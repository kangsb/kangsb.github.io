(function () {
  const saved = localStorage.getItem("lang");
  let lang = saved || ((navigator.language || "ko").startsWith("ko") ? "ko" : "en");

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // 스크롤 시 요소가 부드럽게 나타나게 한다. (IntersectionObserver 미지원 시 그대로 표시)
  const revealIO = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
        });
      }, { threshold: 0.12 })
    : null;

  function observeReveal() {
    if (!revealIO) return;
    $$(".head, .panel, .step, .card, .cta-inner").forEach((el) => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      // 같은 묶음 안에서 순서대로 조금씩 늦게 나타나게 한다.
      const idx = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = `${Math.min(idx, 4) * 80}ms`;
      revealIO.observe(el);
    });
  }

  function renderProjects() {
    const grid = $("#project-grid");
    grid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";

      const h3 = document.createElement("h3");
      h3.textContent = p.title[lang];
      const desc = document.createElement("p");
      desc.textContent = p.desc[lang];
      const tags = document.createElement("ul");
      tags.className = "tags";
      p.tags.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        tags.appendChild(li);
      });
      // 기간·역할 (없으면 생략)
      const meta = document.createElement("p");
      meta.className = "meta";
      if (p.period) {
        const period = document.createElement("span");
        period.className = "period";
        period.textContent = p.period;
        meta.appendChild(period);
      }
      if (p.role) {
        const role = document.createElement("span");
        role.className = "role";
        role.textContent = p.role[lang];
        meta.appendChild(role);
      }

      // 썸네일: p.image가 있으면 이미지, 없으면 Pine 배경 + p.mark(없으면 제목 첫 글자)
      const thumb = document.createElement("div");
      thumb.className = "thumb";
      if (p.image) {
        const img = document.createElement("img");
        img.src = p.image;
        img.alt = p.title[lang];
        img.loading = "lazy";
        thumb.appendChild(img);
      } else {
        thumb.textContent = p.mark || p.title[lang].trim().charAt(0);
        thumb.setAttribute("aria-hidden", "true");
      }

      const body = document.createElement("div");
      body.className = "card-body";
      body.append(h3);
      if (meta.childElementCount) body.appendChild(meta);
      body.append(desc, tags);

      // 주요 업무: 카드 안에서 펼쳐 본다 (네이티브 <details>)
      if (p.points && p.points[lang] && p.points[lang].length) {
        const details = document.createElement("details");
        details.className = "details";
        const summary = document.createElement("summary");
        summary.textContent = I18N[lang]["projects.details"];
        const ul = document.createElement("ul");
        p.points[lang].forEach((t) => {
          const li = document.createElement("li");
          li.textContent = t;
          ul.appendChild(li);
        });
        details.append(summary, ul);
        body.appendChild(details);
      }

      // 링크가 없거나 "#"이면 "자세히 보기"를 표시하지 않는다.
      if (p.link && p.link !== "#") {
        const a = document.createElement("a");
        a.className = "more";
        a.href = p.link;
        a.textContent = I18N[lang]["projects.more"];
        if (/^https?:/.test(p.link)) { a.target = "_blank"; a.rel = "noopener"; }
        body.appendChild(a);
      }

      card.append(thumb, body);
      grid.appendChild(card);
    });
    observeReveal();
  }

  function applyLang() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      el.innerHTML = I18N[lang][el.dataset.i18n];
    });
    $("#lang-toggle").textContent = lang === "ko" ? "EN" : "KO";
    renderProjects();
  }

  $("#lang-toggle").addEventListener("click", () => {
    lang = lang === "ko" ? "en" : "ko";
    localStorage.setItem("lang", lang);
    applyLang();
  });

  // Mobile menu
  const menu = $("#menu");
  const toggle = $("#menu-toggle");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#menu a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Active nav link on scroll
  const links = $$("#menu a:not(.btn)");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  $$("main section[id]").forEach((s) => io.observe(s));

  $("#year").textContent = new Date().getFullYear();
  applyLang();
})();
