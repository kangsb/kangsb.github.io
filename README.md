# SBWorks Homepage

순수 HTML/CSS/JS로 만든 단일 페이지 포트폴리오 사이트입니다.

## 로컬 실행
```
python3 -m http.server 8000
# http://localhost:8000
```

## 내용 수정
- 문구(한/영), 프로젝트 목록: `js/i18n.js`
- 이메일/SNS 링크: `index.html`의 Contact 섹션 (TODO 주석 부분)
- 색상/레이아웃: `css/style.css` 상단의 CSS 변수 (브랜드 토큰 `--sb-*` 포함, 원본은 `../CI/tokens.css`)
- 로고/파비콘: `assets/brand/` (원본은 `../CI/logo/`이며, CI가 바뀌면 다시 복사)
- 디자인 시안: `_design/reference.html` (참고용, 사이트에서 사용하지 않음)

## GitHub Pages 배포
1. GitHub에서 저장소 생성 (`<username>.github.io` 또는 임의 이름)
2. 이 폴더를 push (main 브랜치)
3. 저장소 Settings → Pages → Source: `main` / `(root)` 선택
4. 잠시 후 `https://<username>.github.io/` (또는 `/<repo>/`)에서 확인
