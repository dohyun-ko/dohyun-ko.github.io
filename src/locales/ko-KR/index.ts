export const main = {
  title: "개발자 고도현 | Dohyun Ko",
  introduction:
    "3년차 프론트엔드 개발자로, 유지보수하기 쉬운 코드를 짜기 위해 노력합니다. 스타트업에서 일하며 프론트엔드, 백엔드, 인프라, AI 등 다양한 경험을 쌓았고, AI 연구실에서 인턴으로 일했습니다. 현재 UC Berkeley에서 여름학기를 보내고 있습니다. 가지 않은 길'을 가는 것을 목표로 언제나 다양한 도전을 합니다.",
  current: {
    organizations: [
      {
        name: "GIST 학생회 정보국",
        color: "#EB6263",
        url: "https://introduce.gistory.me/",
        job: "정보국원",
        startedAt: "2022-09",
        projects: [
          {
            name: "AMS 프론트엔드",
            startedAt: "2022-11",
            endedAt: "2023-02",
            description:
              "GIST 동아리 신청 시스템인 AMS의 프론트엔드를 개발했습니다.",
            whatIDid: ["프론트엔드 개발", "UI 디자인"],
            techStacks: ["React", "TypeScript", "mono-repo"],
          },
          {
            name: "Ziggle 프론트엔드",
            url: "https://github.com/gsainfoteam/ziggle-fe",
            startedAt: "2023-04",
            description:
              "GIST 공지 통합 시스템인 Ziggle의 프론트엔드를 개발하고 있습니다.",
            whatIDid: ["프론트엔드 개발"],
            techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
          },
          {
            name: "IdP 프론트엔드",
            url: "https://idp.gistory.me",
            startedAt: "2024-03",
            description:
              "GIST에서 사용하는 OAuth2.0 인증 시스템 IdP의 프론트엔드를 유지보수하고 있습니다.",
            whatIDid: ["프론트엔드 유지보수"],
            techStacks: ["React", "TypeScript", "Tailwind CSS"],
          },
        ],
      },
      {
        name: "Wing: GIST 전산 동아리",
        color: "rgb(151, 123, 242)",
        url: "https://wing-homepage.vercel.app/",
        job: "시니어 부원",
        startedAt: "2023-03",
        projects: [
          {
            name: "Wing Session",
            startedAt: "2023-03",
            description: "Wing에서 개발 상황 교류 및 세션을 진행합니다.",
            whatIDid: [
              "모노레포에 도입기 세션 진행",
              "React.cpp 세션 진행",
              "UI 라이브러리처럼 코드 짜기: Compound Components 세션 진행",
            ],
          },
        ],
      },
    ],
  },
  education: {
    attendedLectures: [
      "객체 지향 프로그래밍",
      "자료 구조",
      "알고리즘 개론",
      "컴퓨터 시스템 이론 및 실습",
      "오토마타 이론",
      "운영체제",
      "컴퓨터 그래픽스",
      "컴퓨터 네트워킹",
      "기계학습 및 딥러닝",
      "Computer Security",
      "Computational Models of Cognition",
    ],
    attendedLecture: "수강 강좌",
    major: "전기전자컴퓨터공학부",
  },
  experience: {
    experiences: [
      {
        name: "GIST Data Science Lab",
        color: "#b509ac",
        url: "https://sundong.kim/members/",
        job: "인턴",
        startedAt: "2024-01-02",
        endedAt: "2024-05-31",
        projects: [
          {
            name: "O2ARC 3.0",
            url: "https://o2arc.com/",
            startedAt: "2024-01",
            endedAt: "2024-05",
            description:
              "[ARC](https://github.com/fchollet/ARC) 문제의 사람 풀이 데이터 수집을 위한 툴 O2ARC의 3.0 버전을 개발했고 유지보수 했습니다. 개발과 데이터 분석 내용으로 demo 논문을 작성했고 IJCAI 2024에 투고했습니다.",
            whatIDid: ["프론트엔드 개발", "백엔드 개발", "UX 디자인"],
            techStacks: [
              "React",
              "TypeScript",
              "Tailwind CSS",
              "i18next",
              "NestJS",
              "Prisma",
            ],
          },
          {
            name: "Introductory RL Study",
            url: "https://www.coursera.org/specializations/reinforcement-learning",
            startedAt: "2024-01",
            endedAt: "2024-02",
            description:
              "Coursera의 강화학습 스페셜리제이션을 통해 강화학습 기초를 공부했습니다.",
            whatIDid: ["강화학습 기초 공부(~Q-Learning)"],
          },
        ],
      },
      {
        name: "시고르자브종",
        color: "#FEAA17",
        url: "https://introduce.sigor.company/",
        job: "웹 개발자",
        startedAt: "2022-02-23",
        endedAt: "2023-12-22",
        projects: [
          {
            name: "도글리 프론트엔드",
            url: "https://doggly.co.kr/",
            startedAt: "2022-08",
            endedAt: "2023-03",
            description:
              "강아지 의류 쇼핑몰인 도글리의 프론트엔드를 개발했습니다.",
            whatIDid: ["도글리 프론트엔드 개발"],
            techStacks: [
              "React",
              "TypeScript",
              "Jetpack Compose",
              "SwiftUI",
              "i18next",
            ],
          },
          {
            name: "러시아워 프론트엔드",
            url: "https://introduce.rushhourkorea.com/",
            startedAt: "2023-05",
            endedAt: "2023-07",
            description:
              "지하철 빈 자리를 알려주는 서비스인 러시아워의 프론트엔드와 웹뷰 앱을 개발했습니다.",
            whatIDid: [
              "러시아워 웹뷰용 프론트엔드 개발",
              "러시아워 android & ios 웹뷰 앱 개발",
            ],
            techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
          },
          {
            name: "러시아워 앱",
            url: "https://introduce.rushhourkorea.com/",
            startedAt: "2023-07",
            endedAt: "2023-10",

            description: "러시아워의 플러터 버전 개발에 참여했습니다.",
            whatIDid: ["러시아워 플러터 앱 개발", "앱 유저 로그 기록"],
            techStacks: ["Flutter", "Firebase"],
          },
          {
            name: "러시아워 AI",
            startedAt: "2023-09",
            endedAt: "2023-12",

            description: "러시아워 AI 개발에 참여했습니다.",
            whatIDid: [
              "지하철 혼잡도 예측 AI 개발",
              "지하철 빈자리 예측 AI 개발",
            ],
            techStacks: ["Scikit-learn", "Pandas"],
          },
          {
            name: "기타",
            startedAt: "2022-02",
            endedAt: "2023-12",
            description:
              "스타트업의 개발자로서 다양한 개발 업무를 수행하고 있습니다.",
            whatIDid: [
              "랜딩 페이지 개발",
              "관리자 페이지 개발",
              "간단한 백엔드 API 개발",
              "유저 로그 분석 및 통계",
              "업무 자동화",
            ],
            techStacks: [
              "React",
              "TypeScript",
              "Amplitude",
              "AWS Lightsail",
              "AWS Lambda",
              "FastAPI",
              "Pandas",
              "mono-repo",
            ],
          },
        ],
      },
      {
        name: "GDSC-GIST",
        color: "#008cff",
        url: "https://gdsc.community.dev/gwangju-institute-of-science-and-technology/",
        job: "2nd Core, Tech Team",
        startedAt: "2022-05",
        endedAt: "2023-07",
        projects: [
          {
            name: "스터디",
            startedAt: "2022-11",
            endedAt: "2023-05",
            description: "GDSC에서 진행한 내부 개발 스터디입니다.",
            whatIDid: ["React 스터디 리드", "JS Pattern 스터디 참여"],
          },
          {
            name: "GIST Mini Solution Challenge",
            url: "https://gdsc.community.dev/events/details/developer-student-clubs-gwangju-institute-of-science-and-technology-presents-gist-mini-solution-challenge/",
            startedAt: "2023-04",
            endedAt: "2023-04",
            description:
              "GDSC-GIST가 직접 주최한 GIST 내 해커톤입니다. 총 60명이 참가하였습니다.",
            whatIDid: ["해커톤 준비 & 정산"],
          },
        ],
      },
      {
        name: "GPERI",
        color: "#4c568f",
        url: "https://sites.google.com/view/gperigist",
        job: "연구부원",
        startedAt: "2023-07",
        endedAt: "2024-3",
        projects: [
          {
            name: "C언어 교육 진행",
            startedAt: "2023-07",
            endedAt: "2023-08",
            description: "부원들에게 C언어 교육을 진행했습니다.",
            whatIDid: ["C언어 교육 진행"],
            techStacks: ["C"],
          },
          {
            name: "발사체 통신 개발",
            startedAt: "2023-07",
            endedAt: "2023-11",
            description: "발사체 통신 개발을 시도했지만 성공하지는 못했습니다.",
            whatIDid: ["Flight Software 개발", "통신 시스템 개발"],
            techStacks: ["C", "Zigbee"],
          },
        ],
      },
    ],
  },
  sideProject: {
    sideProjects: [
      {
        name: "2024 KPMG Ideathon: 🥉 3등",
        url: "https://github.com/gist-optima",
        startedAt: "2024-1",
        endedAt: "2024-2",
        description:
          "[삼정 KPMG 아이디어톤](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e)에 참여해 문서 작업에 VCS를 도입하고 LLM을 이용한 streamlined-ai-search를 구현한 플랫폼 Docuflow를 개발했습니다.",
        whatIDid: ["프론트엔드 개발"],
        techStacks: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Kaggle - Regression with a Mohs Hardness Dataset: 4등",
        url: "https://www.kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
        description:
          "Kaggle의 광물 모스 경도 예측 대회에서 4등을 차지했습니다. 점수 공식이 MedAE인 점을 이용해 독특한 후처리 기법을 사용했습니다.",
        whatIDid: ["ML 모델 개발"],
        techStacks: ["Python", "Scikit-learn", "Pandas"],
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2등",
        startedAt: "2023-10",
        endedAt: "2023-11",
        description:
          "메이커톤에서 GPT-4 API와 라즈베리파이를 결합해 일상 대화에서 의미를 추론하고 스위치, 스피커 등 IoT 기기를 조작하는 AI 비서를 개발했습니다.",
        whatIDid: ["OpenAI API 연동", "기획 및 발표자료 준비"],
        techStacks: ["Python"],
      },
      {
        name: "2023 Net Challenge: 🥈 은상",
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
        description:
          "2023 Net Chanllenge에 참여했습니다. CCTV 데이터를 AI로 분석해 실시간으로 위협을 감지하고, 위협이 감지되면 주변 유저들에게 알림을 보내는 서비스를 개발했습니다.",
        whatIDid: [
          "React와 PWA를 사용한 앱 개발",
          "Mapbox를 사용해 실시간 위협 위치 표시",
        ],
        techStacks: ["React", "TypeScript", "Mapbox", "PWA"],
      },
      {
        name: "React-Atoms: React Component Library",
        url: "https://github.com/dohyun-ko/react-atoms",
        startedAt: "2023-07",
        endedAt: "2023-07",
        description:
          "개인적으로 자주 사용하는 React 컴포넌트를 모아 npm에 배포한 라이브러리입니다.",
        whatIDid: [
          "React 컴포넌트 개발",
          "Storybook을 사용한 컴포넌트 문서화",
          "npm 배포",
        ],
        techStacks: ["React", "TypeScript", "RollUp", "Storybook", "npm"],
      },
      {
        name: "Dutch: OOP Final Project",
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "프론트엔드와 백엔드 모두 C++로만 작성된 더치페이 플랫폼입니다. GIST 객체 지향 프로그래밍 수업 기말 과제로 제출했습니다.",
        whatIDid: [
          "C++과 웹 어셈블리를 사용한 프론트엔드 UI 개발",
          "State, Navigator 등 프론트엔드 로직 개발",
        ],
        techStacks: ["C++", "WebAssembly", "Emscripten"],
      },
      {
        name: "Speaking Melona: 편의점 음식이 서로 대화를 해요",
        url: "https://melona.chat",
        startedAt: "2024-05",
        endedAt: "2024-05",
        description:
          "편의점 음식별로 페르소나를 설정하고 바코드를 스캔하면 서로 간의 대화를 생성해주는 서비스입니다.",
        whatIDid: ["프론트엔드 개발", "백엔드 개발", "프롬프팅"],
        techStacks: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      },
    ],
  },
  skill: {
    skills: [
      {
        name: "React",
        level: 5,
      },
      {
        name: "TypeScript",
        level: 4,
      },
      {
        name: "JavaScript",
        level: 4,
      },
      {
        name: "HTML/CSS",
        level: 4,
      },
      {
        name: "Python",
        level: 3,
      },
      {
        name: "NestJS",
        level: 2,
      },
      {
        name: "FastAPI",
        level: 2,
      },
      {
        name: "Flutter",
        level: 2,
      },
      {
        name: "C++",
        level: 2,
      },
      {
        name: "Kotlin",
        level: 1,
      },
      {
        name: "Docker",
        level: 1,
      },
      {
        name: "Rust",
        level: 1,
      },
      {
        name: "Assembly",
        level: 1,
      },
    ],
  },
};
