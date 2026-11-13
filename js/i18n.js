// 한/영 문구 사전. 문구를 바꾸려면 여기만 수정하세요.
const I18N = {
  ko: {
    "nav.services": "서비스",
    "nav.process": "개발 프로세스",
    "nav.projects": "프로젝트",
    "nav.about": "회사소개",
    "nav.cta": "프로젝트 문의",

    "hero.eyebrow": "Software Development",
    "hero.title": "Speedy Build,<br>Smart Solutions.",
    "hero.desc": "아이디어를 빠르게 동작하는 소프트웨어로. SB Works는 작은 단위로 만들고, 검증하고, 한 단계씩 쌓아 올려 결과를 만듭니다.",
    "hero.cta": "프로젝트 문의하기",
    "hero.cta2": "서비스 보기",
    "hero.s1": "탄탄한 설계",
    "hero.s2": "빠른 개발",
    "hero.s3": "출시 · 성과",

    "services.label": "Services",
    "services.title": "필요한 소프트웨어를, 필요한 속도로.",
    "service.1.title": "웹 · 앱 개발",
    "service.1.desc": "웹 서비스, 모바일 앱, 관리자 시스템을 기획부터 배포까지 한 팀처럼 만듭니다.",
    "service.2.title": "임베디드 · IoT",
    "service.2.desc": "펌웨어, 센서 연동, 산업용 통신까지 하드웨어와 맞닿은 소프트웨어를 개발합니다.",
    "service.3.title": "시스템 설계 · 컨설팅",
    "service.3.desc": "아키텍처 검토와 기술 선택을 함께 고민해, 오래 쓸 수 있는 구조를 제안합니다.",

    "process.label": "Process",
    "process.title": "한 단계씩, 빠르게 쌓아 올립니다.",
    "step.1.title": "기획",
    "step.1.desc": "목표와 범위를 함께 정리하고 우선순위를 정합니다.",
    "step.2.title": "설계",
    "step.2.desc": "화면과 시스템 구조를 설계하고 일정을 확정합니다.",
    "step.3.title": "개발",
    "step.3.desc": "짧은 주기로 개발하고 중간 결과물을 공유합니다.",
    "step.4.title": "출시 · 운영",
    "step.4.desc": "안정적으로 배포하고 이후 개선까지 함께합니다.",

    "projects.label": "Projects",
    "projects.title": "만들어 온 프로젝트.",
    "projects.details": "주요 업무",
    "projects.more": "자세히 보기 →",

    "contact.title": "다음 프로젝트, 첫 블록부터 함께 쌓아요.",
    "contact.cta": "문의하기",

    "footer.info": "[사업자 정보] · [주소]"
  },
  en: {
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.cta": "Contact us",

    "hero.eyebrow": "Software Development",
    "hero.title": "Speedy Build,<br>Smart Solutions.",
    "hero.desc": "From idea to working software, fast. SB Works builds in small pieces, verifies each one, and stacks them up step by step into results.",
    "hero.cta": "Start a project",
    "hero.cta2": "View services",
    "hero.s1": "Solid design",
    "hero.s2": "Fast build",
    "hero.s3": "Launch · Results",

    "services.label": "Services",
    "services.title": "The software you need, at the speed you need.",
    "service.1.title": "Web & App Development",
    "service.1.desc": "Web services, mobile apps, and admin systems, built from planning to deployment like one team.",
    "service.2.title": "Embedded & IoT",
    "service.2.desc": "Firmware, sensor integration, and industrial communication: software that meets the hardware.",
    "service.3.title": "System Design & Consulting",
    "service.3.desc": "We review architecture and weigh technology choices with you, proposing structures built to last.",

    "process.label": "Process",
    "process.title": "Stacked up fast, one step at a time.",
    "step.1.title": "Plan",
    "step.1.desc": "Define goals and scope together and set priorities.",
    "step.2.title": "Design",
    "step.2.desc": "Design the screens and system structure, and confirm the schedule.",
    "step.3.title": "Build",
    "step.3.desc": "Build in short cycles and share interim results.",
    "step.4.title": "Launch & Operate",
    "step.4.desc": "Deploy reliably and keep improving afterwards.",

    "projects.label": "Projects",
    "projects.title": "Selected projects.",
    "projects.details": "Key work",
    "projects.more": "Learn more →",

    "contact.title": "Your next project: let's stack the first block together.",
    "contact.cta": "Get in touch",

    "footer.info": "[Business info] · [Address]"
  }
};

// 프로젝트 목록 (경력기술서 기반, 최신순). 추가하려면 객체 하나를 더 넣으세요.
// mark: 썸네일에 크게 보일 글자(없으면 제목 첫 글자), image: 썸네일 이미지 경로(선택),
// points: 카드를 펼치면 보이는 주요 업무, link: 상세 링크(없으면 "자세히 보기" 숨김)
const PROJECTS = [
  {
    mark: "2026",
    period: "2026.04 ~ 2026.06",
    title: { ko: "정밀 온도 변환기(PTT)", en: "Precision Temperature Converter (PTT)" },
    role: { ko: "펌웨어 단독 설계 및 전체 구현", en: "Sole firmware designer and implementer" },
    desc: {
      ko: "STM32U575 기반 8채널 PT100 RTD 정밀 온도 변환기 펌웨어. ThreadX 멀티스레드 구조에 RS-485 Modbus RTU 통신과 LCD 표시를 포함합니다.",
      en: "Firmware for an 8-channel PT100 RTD precision temperature converter on the STM32U575. A ThreadX multithreaded design with RS-485 Modbus RTU and an LCD display."
    },
    points: {
      ko: [
        "ThreadX 6개 스레드(ADC, LCD, RS-485, 셸, 앱, LED) 설계, Mutex/Event Flags 동기화와 IWDG 갱신 전략 수립",
        "AD7793 24-bit ADC 래치오메트릭 측정, IEC 60751 CVD 방정식 기반 저항→온도 변환, 미연결/단락 채널 자동 감지",
        "Modbus RTU 슬레이브(FC 03/10), UART IDLE 인터럽트 기반 프레임 수신, 가상 레지스터 맵 설계",
        "Flash 직접 제어 설정 저장(Magic+Checksum 검증), 채널별 Gain/Offset과 2점 보정 캘리브레이션",
        "UART CLI 디버그 셸과 실시간 CSV 로깅"
      ],
      en: [
        "Designed six ThreadX threads (ADC, LCD, RS-485, shell, app, LED) with Mutex/Event Flags synchronization and an IWDG refresh strategy",
        "Ratiometric measurement with the AD7793 24-bit ADC, resistance-to-temperature conversion using the IEC 60751 CVD equation, automatic open/short channel detection",
        "Modbus RTU slave (FC 03/10) with UART IDLE-interrupt frame reception and a virtual register map",
        "Direct Flash control for persistent settings (Magic + Checksum validation), per-channel Gain/Offset and two-point calibration",
        "UART CLI debug shell with real-time CSV logging"
      ]
    },
    tags: ["STM32U575", "ThreadX", "Modbus RTU", "AD7793"]
  },
  {
    mark: "2024",
    period: "2024.09 ~ 2025.06",
    title: { ko: "의료용 내시경 세척기", en: "Medical Endoscope Reprocessor" },
    role: { ko: "펌웨어·GUI 단독 설계 및 전체 구현", en: "Sole designer and implementer of firmware and GUI" },
    desc: {
      ko: "STM32G474 기반 의료용 내시경 세척기. FreeRTOS 펌웨어와 Windows CE 기반 장치 제어 GUI를 개발했고, 국내외 병원에 판매 중입니다.",
      en: "A medical endoscope reprocessor on the STM32G474: FreeRTOS firmware and a Windows CE control GUI. Sold to hospitals in Korea and abroad."
    },
    points: {
      ko: [
        "누수 검사, 세척/에어블로 각 3단계, 세제·소독·알코올·에어건조 등 16단계 자동 세척 공정 상태머신 설계·구현",
        "FreeRTOS 4개 태스크(Process, GuiRx, DbgRx, Mon) 분리 설계, MessageQueue 기반 태스크 간 통신",
        "STX/ETX/DLE 이스케이프 + CRC 검증 구조의 GUI 시리얼 프로토콜 자체 설계, 함수 포인터 디스패치 테이블 핸들러",
        "ADS1115, PCA9535 I2C 디바이스 드라이버 직접 개발 — 압력·온도 계측, 수위·유량 센서 6채널 처리",
        "챔버 압력 실시간 모니터링 기반 누수 검사 알고리즘(허용 오차 ±0.03%, 수동/자동 2모드)과 9종 알람 감시",
        "GPIO 핀 패턴으로 4개 모델 자동 인식, 단일 바이너리로 전 모델 지원"
      ],
      en: [
        "Designed and implemented a 16-step automatic reprocessing state machine (leak test, three-step wash and air-blow, detergent, disinfection, alcohol, air drying)",
        "Split the firmware into four FreeRTOS tasks (Process, GuiRx, DbgRx, Mon) communicating through message queues",
        "Designed the GUI panel serial protocol (STX/ETX/DLE escaping + CRC) with function-pointer dispatch table handlers",
        "Wrote the ADS1115 and PCA9535 I2C drivers: pressure and temperature measurement plus six channels of level and flow sensors",
        "Leak-test algorithm based on real-time chamber pressure monitoring (±0.03% tolerance, manual/auto modes) and nine alarm types",
        "Automatic recognition of four models from GPIO pin patterns, supporting every model with a single binary"
      ]
    },
    tags: ["STM32G474", "FreeRTOS", "Windows CE", "I2C"]
  },
  {
    mark: "RCMU",
    period: "2024.11 ~ 2025.01",
    title: { ko: "RCMU TACAN 원격 제어·감시 GUI", en: "RCMU TACAN Remote Control & Monitoring GUI" },
    role: { ko: "GUI Guider + LVGL 기반 LCD 화면 디자인", en: "LCD screen design with GUI Guider and LVGL" },
    desc: {
      ko: "TACAN 지상국 원격 제어·감시 장치(RCMU)의 터치 GUI. 1024×768 패널에서 상태 감시, 파라미터 설정, 진단, 안테나 제어, 보안 관리를 제공합니다.",
      en: "Touch GUI for a TACAN ground-station remote control and monitoring unit (RCMU). A 1024×768 panel for status monitoring, parameter setup, diagnostics, antenna control, and security management."
    },
    points: {
      ko: [
        "GUI Guider 자동 생성 코드와 커스텀 로직을 분리하고, 22개 커스텀 모듈로 전체 화면 기능을 단독 설계·구현",
        "단일 스크린에서 서브윈도우를 토글하는 7화면 전환 시스템, 구성 유닛 20개 이상 실시간 상태 표시",
        "설정·모니터·진단·안테나 탭 구현 (펄스 측정 파라미터 17종 알람 한계값 설정 포함)",
        "값 입력, 드롭다운, ON/OFF 채널 등 18종 모달 팝업 시스템 설계",
        "히스토리 로그 테이블과 계정 관리·정보 표시 보안 화면"
      ],
      en: [
        "Separated GUI Guider generated code from custom logic and built every screen feature alone, in 22 custom modules",
        "Seven-screen navigation by toggling sub-windows on a single screen, with live status for more than 20 system units",
        "Settings, monitor, diagnostics, and antenna tabs, including alarm limits for 17 pulse measurement parameters",
        "Modal popup system with 18 types: value entry, dropdowns, ON/OFF channels, and more",
        "History log table and security screens for account management and information display"
      ]
    },
    tags: ["LVGL v8", "GUI Guider", "FreeRTOS", "C"]
  },
  {
    mark: "DNLD",
    period: "2024.12 ~ 2025.02",
    title: { ko: "펌웨어 다운로더", en: "Firmware Downloader" },
    role: { ko: "단독 설계 및 전체 구현", en: "Sole designer and implementer" },
    desc: {
      ko: "BeagleBone(Debian Linux) 기반 무선 충전 트랜스미터 펌웨어 다운로드 호스트 툴. UART로 내장 부트로더와 통신하며 6종 이미지를 순차 전송하고 CRC32로 패킷 무결성을 검증합니다. 이미지 변환용 C# 툴(Bin2C)도 함께 개발했습니다.",
      en: "A firmware download host tool for a wireless charging transmitter, running on a BeagleBone (Debian Linux). It talks to the on-board bootloader over UART, sends six images in sequence, and verifies packets with CRC32. A companion C# tool (Bin2C) converts the images."
    },
    points: {
      ko: [
        "epoll 기반 비동기 UART 이벤트 루프 — 다운로드 포트와 디버그 포트를 단일 epoll 인스턴스로 감시",
        "4단계 다운로드 상태머신(부트로더 진입 → 이미지 정보 → 패킷 전송 → 캘리브레이션 완료)과 3초 무응답 타임아웃 처리",
        "128바이트 패킷 CRC32 무결성 검증, Bin2C 생성 코드와 동일 알고리즘 보장",
        "6종 이미지 순차 다운로드와 진행률 실시간 산출, GPIO 토글로 대상 장치 리셋 제어",
        "UART 디버그 셸(함수 포인터 디스패치 테이블)과 C# Windows Forms 툴 Bin2C(.bin → C 헤더 배열 변환, FlashCfg.bin 생성)"
      ],
      en: [
        "Asynchronous UART event loop on epoll, watching the download and debug ports with a single epoll instance",
        "Four-stage download state machine (enter bootloader, image info, packet transfer, calibration done) with a 3-second no-response timeout",
        "CRC32 integrity check on 128-byte packets, using the same algorithm as the code Bin2C generates",
        "Sequential download of six images with live progress, and GPIO toggling to reset the target device",
        "UART debug shell (function-pointer dispatch table) and the C# Windows Forms tool Bin2C, which converts .bin files to C header arrays and builds FlashCfg.bin"
      ]
    },
    tags: ["BeagleBone", "Linux C", "epoll", "C#"]
  },
  {
    mark: "UIP",
    period: "2024.02 ~ 2024.07",
    title: { ko: "UIP 차량용 초음파 침입 방지 시스템", en: "UIP Vehicle Ultrasonic Intrusion Protection" },
    role: { ko: "펌웨어 개발", en: "Firmware development" },
    desc: {
      ko: "PIC18 기반 차량용 초음파 침입 방지(UIP) ECU 펌웨어. LIN 2.0 슬레이브로 차량 제어 유닛과 통신하며, 초음파 센서와 가속도계 틸트 센서로 차내 침입을 감지합니다.",
      en: "Firmware for a PIC18-based vehicle ultrasonic intrusion protection (UIP) ECU. A LIN 2.0 slave that detects cabin intrusion with an ultrasonic sensor and an accelerometer tilt sensor."
    },
    points: {
      ko: [
        "DisArm → ArmWait → Arm → Alarm 알람 상태머신 설계·구현 (ArmWait 내부 서브 상태 포함)",
        "ADCC 기반 초음파 센서 도달 전압 측정, 임계값 초과 시 침입 감지와 3회 재시도 후 오류 처리",
        "SPI 가속도 센서로 X·Y 축 각도 연산, 22초 재감지 대기를 포함한 틸트 침입 감지, 캘리브레이션 기준값 EEPROM 영속화",
        "TMR0 인터럽트 기반 5ms/10ms 2주기 협력형 태스크 스케줄러, LIN 슬립 기반 High/Low Power 전환",
        "DTC 로그 모듈 통합, 복수 차종을 전처리기 매크로 1개로 분기하는 버전 관리 구조 유지보수"
      ],
      en: [
        "Designed and implemented the DisArm → ArmWait → Arm → Alarm state machine, including sub-states inside ArmWait",
        "ADCC-based ultrasonic sensor voltage measurement, with intrusion detection above a threshold and error handling after three retries",
        "Tilt detection from X/Y angles of an SPI accelerometer, including a 22-second re-detect wait, with calibration values stored in EEPROM",
        "Cooperative task scheduler with 5 ms / 10 ms periods on TMR0 interrupts, and High/Low Power mode switching driven by LIN sleep",
        "Integrated a DTC log module and maintained a version structure that selects between vehicle models with a single preprocessor macro"
      ]
    },
    tags: ["PIC18", "LIN 2.0", "SPI", "Bare-metal"]
  },
  {
    mark: "BBS",
    period: "2024.02 ~ 2024.07",
    title: { ko: "BBS 차량용 도난 경보 / 배터리 백업 사이렌", en: "BBS Vehicle Anti-theft Alarm / Battery Backup Siren" },
    role: { ko: "펌웨어 개발", en: "Firmware development" },
    desc: {
      ko: "PIC18 기반 차량용 배터리 백업 사이렌(BBS) 펌웨어. LIN 2.0 슬레이브로 도난 경보 상태를 제어하고, 보조 배터리 충전과 저전력 슬립/웨이크업을 관리합니다.",
      en: "Firmware for a PIC18-based vehicle battery backup siren (BBS). A LIN 2.0 slave that controls the anti-theft alarm state and manages auxiliary battery charging and low-power sleep/wake-up."
    },
    points: {
      ko: [
        "Off → DisArm → ArmWait → Arm → Alarm 5단계 알람 상태머신, 배터리·LIN 버스 탬퍼링, 틸트, IGN 4종 알람 트리거 감지",
        "메인 배터리 ADC 모니터링으로 저전압(8.5V)/고전압(16.5V) 이탈 감지, LIN 통신 자동 차단/복귀",
        "보조 배터리 Standard/Trickle 2단계 PWM 충전 제어와 충전 온도(0°C ~ 60°C) 범위 감시",
        "5ms/10ms 협력형 스케줄러, High/Low Power 전환 (저전력 모드 33ms 주기 웨이크업)",
        "ECU 정보와 튜닝 파라미터 EEPROM 영속화, LIN 진단 프레임과 EOL 제조 테스트 프레임 처리"
      ],
      en: [
        "Five-state alarm machine (Off → DisArm → ArmWait → Arm → Alarm) with four trigger types: battery tampering, LIN bus tampering, tilt, and IGN",
        "Main battery ADC monitoring that detects under-voltage (8.5 V) and over-voltage (16.5 V) and automatically cuts and restores LIN communication",
        "Two-stage PWM charging (Standard and Trickle) for the auxiliary battery, with charge-temperature supervision (0 °C to 60 °C)",
        "5 ms / 10 ms cooperative scheduler and High/Low Power switching (33 ms wake-up period in low-power mode)",
        "ECU info and tuning parameters persisted in EEPROM, plus LIN diagnostic frames and EOL manufacturing test frames"
      ]
    },
    tags: ["PIC18", "LIN 2.0", "PWM", "EEPROM"]
  },
  {
    mark: "PM2.5",
    period: "2020.04 ~ 2020.12",
    title: { ko: "PM2.5 미세먼지 센서 (차량용)", en: "PM2.5 Particulate Sensor (Automotive)" },
    role: { ko: "펌웨어 단독 설계 및 전체 구현", en: "Sole firmware designer and implementer" },
    desc: {
      ko: "PIC32MM 기반 차량용 레이저 산란 방식 미세먼지 센서 펌웨어. LIN 슬레이브로 PM2.5 농도를 전달하며, 협력형 태스크 스케줄러를 직접 설계하고 EZBL로 UART OTA 업데이트를 지원합니다.",
      en: "Firmware for a PIC32MM-based automotive laser-scattering particulate sensor. A LIN slave that reports PM2.5 concentration, with a custom cooperative task scheduler and UART OTA updates through EZBL."
    },
    points: {
      ko: [
        "레이저 ON(700ms)/OFF(300ms) 1초 주기 제어와 포토다이오드 ADC 샘플링으로 PM1.0·PM2.5 입자 계수",
        "7포인트 이동평균 + 35단계 큐 필터 2단 처리, 8구간 선형 보간 룩업 테이블로 원시 카운트 → 농도(µg/m³) 변환",
        "6상태 시스템 모드 상태머신과 우선순위·주기 기반 협력형 태스크 스케줄러(최대 10태스크) 직접 설계",
        "전압·온도·모터 RPM·레이저·포토다이오드 5종 Fault 자동 감시와 LIN 에러 코드 보고",
        "Flash 직접 제어로 에러 카운트·캘리브레이션 파라미터 영속화"
      ],
      en: [
        "One-second laser cycle (700 ms ON / 300 ms OFF) with photodiode ADC sampling to count PM1.0 and PM2.5 particles",
        "Two-stage noise filtering (7-point moving average + 35-step queue) and an 8-segment linear interpolation table to convert raw counts to µg/m³",
        "Designed a six-state system mode machine and a priority- and period-based cooperative scheduler (up to 10 tasks)",
        "Automatic monitoring of five fault types (voltage, temperature, motor RPM, laser, photodiode) reported as LIN error codes",
        "Error counters and calibration parameters persisted through direct Flash control"
      ]
    },
    tags: ["PIC32MM", "LIN", "EZBL", "ADC"]
  },
  {
    mark: "2021",
    period: "2021.09 ~ 2022.09",
    title: { ko: "의료용 내시경 세척기 (소독액 재사용, 듀얼 바신)", en: "Medical Endoscope Reprocessor (Disinfectant Reuse, Dual Basin)" },
    role: { ko: "펌웨어·GUI 단독 설계 및 전체 구현", en: "Sole designer and implementer of firmware and GUI" },
    desc: {
      ko: "BeagleBone Black(Debian Linux) 기반 듀얼 바신 내시경 세척기. Linux 펌웨어와 Windows CE 기반 장치 제어 GUI를 개발했고, 국내외 병원에 판매 중입니다.",
      en: "A dual-basin endoscope reprocessor on a BeagleBone Black (Debian Linux): Linux firmware and a Windows CE control GUI. Sold to hospitals in Korea and abroad."
    },
    points: {
      ko: [
        "누수 검사, 세척/에어블로 각 3단계, 세제·소독·알코올·에어건조 등 16단계 자동 세척 공정 상태머신 설계·구현",
        "STX/ETX/DLE 이스케이프 + CRC 검증 구조의 GUI 시리얼 프로토콜 자체 설계",
        "ADS1115, PCA9535 I2C 디바이스 드라이버 직접 개발 — 압력·온도 계측, 수위·유량 센서 6채널 처리",
        "챔버 압력 기반 누수 검사 알고리즘(허용 오차 ±0.03%)과 9종 알람 감시",
        "GPIO 핀 패턴 기반 모델 자동 인식과 UART 디버그 셸(현장 A/S·양산 테스트용)"
      ],
      en: [
        "Designed and implemented a 16-step automatic reprocessing state machine (leak test, three-step wash and air-blow, detergent, disinfection, alcohol, air drying)",
        "Designed the GUI panel serial protocol (STX/ETX/DLE escaping + CRC)",
        "Wrote the ADS1115 and PCA9535 I2C drivers: pressure and temperature measurement plus six channels of level and flow sensors",
        "Leak-test algorithm based on chamber pressure (±0.03% tolerance) and nine alarm types",
        "Model recognition from GPIO pin patterns and a UART debug shell for field service and production testing"
      ]
    },
    tags: ["BeagleBone Black", "Debian Linux", "Windows CE", "C#"]
  },
  {
    mark: "2020",
    period: "2020.11 ~ 2021.06",
    title: { ko: "부저통합 전자혼", en: "Integrated Buzzer / Electronic Horn" },
    role: { ko: "펌웨어 단독 설계 및 전체 구현", en: "Sole firmware designer and implementer" },
    desc: {
      ko: "PIC16F15324 기반 차량용 부저/전자혼 통합 드라이버 펌웨어. 아날로그 입력 전압으로 혼·부저 모드를 자동 판별하고, 온도와 공급 전압 변화를 보정하며 PWM 출력을 제어합니다.",
      en: "Firmware for a PIC16F15324-based automotive buzzer/electronic horn driver. It detects horn or buzzer mode from an analog input voltage and controls PWM output while compensating for temperature and supply voltage."
    },
    points: {
      ko: [
        "ADC 전압으로 대기·부저·혼 3모드 자동 판별 (1.5V / 2.0V / 2.8V 임계값)",
        "Timer2 + CCP1 PWM 주파수·듀티 실시간 제어, 레지스터 값을 매크로로 직접 산출",
        "내장 온도 센서 기반 온도 보상(±5단계 주파수 오프셋)과 15항목 OVP 룩업 테이블 기반 듀티 보정으로 음압 편차 최소화",
        "STX/ETX + XOR 체크섬 팩토리 시리얼 프로토콜과 Flash 파라미터 영속화",
        "부저 OFF 시 PWM 듀티를 점진적으로 감소시키는 페이드아웃으로 기계적 충격음 제거"
      ],
      en: [
        "Automatic detection of standby, buzzer, and horn modes from ADC voltage (1.5 V / 2.0 V / 2.8 V thresholds)",
        "Real-time PWM frequency and duty control with Timer2 + CCP1, deriving register values directly through macros",
        "Temperature compensation from the on-chip sensor (±5-step frequency offset) and duty correction from a 15-entry OVP lookup table to minimize sound-pressure variation",
        "Factory serial protocol (STX/ETX + XOR checksum) and Flash-persisted parameters",
        "Fade-out that gradually lowers the PWM duty when the buzzer turns off, removing the mechanical click"
      ]
    },
    tags: ["PIC16F15324", "PWM", "ADC", "Bare-metal"]
  }
];
