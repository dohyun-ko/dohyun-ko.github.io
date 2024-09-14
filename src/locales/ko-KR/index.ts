import current from "./current";
import experience from "./experience";

export const main = {
  title: { developer: "Generalist FE 개발자", name: "고도현 | Dohyun Ko" },
  introduction:
    "스타트업의 유일한 FE 개발자로 2년간 일하며 프론트엔드, 백엔드, 앱, 자동화, ML 등 다양한 분야를 주도적으로 작업했습니다. 이후 AI 연구실에서 일하며 데이터 수집 툴을 제작했고 UX 관련 논문을 작성했습니다. 개발인력이 늘 부족한 곳에서 일했기에 생산성과 유지보수의 편의성을 중시하며 동료가 보기 쉬운 코드를 짜려 노력합니다. 유저 행동 분석도 중요시하기에 유저가 수행하는 모든 액션을 로깅하고 다양한 분석 툴 접목하기를 좋아합니다.",
  current,
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
  publication: {
    publications: [
      {
        name: "O2ARC 3.0: A Platform for Solving and Creating ARC Tasks",
        date: "2024-08",
        isImportant: true,
        url: "https://www.ijcai.org/proceedings/2024/1034",
        publisher: "IJCAI 2024 | 공동 1저자",
        description:
          "ARC 문제의 사람 풀이 데이터가 부족하며, 수집된 데이터의 품질도 AI 학습에 적합하지 않다는 문제를 해결하기 위해 O2ARC 3.0을 개발했습니다. 기존 툴의 그리드 조작 로직을 개편해 데이터 수집 품질을 개선한 방법과 gamification을 통해 데이터 수집량을 늘린 방법을 소개합니다.",
      },
    ],
  },
  experience,
  sideProject: {
    sideProjects: [
      {
        name: "React-Atoms: React Component Library",
        isImportant: true,
        url: "https://github.com/dohyun-ko/react-atoms",
        startedAt: "2023-07",
        endedAt: "2023-07",
        description:
          "개인적으로 자주 사용하는 React 컴포넌트를 모아 npm에 배포한 라이브러리입니다. 이 이력서와 개인 웹페이지에 사용중입니다.",
        whatIDid: [
          "Atomic 패턴에 따라 라이브러리 개발 및 RollUp을 이용한 번들링, npm 배포",
          "Storybook을 사용한 컴포넌트 문서화",
        ],
        techStacks: ["React", "TypeScript", "RollUp", "Storybook", "npm"],
      },
      {
        name: "2024 KPMG Ideathon: 🥉 3등",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
        description:
          "[삼정 KPMG 아이디어톤](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e)에 참여해 문서 작업에 VCS를 도입하고 LLM으로 맥락 유지 구글링을 구현한 플랫폼 Docuflow의 FE를 개발했습니다. [보도자료](https://www.newsworker.co.kr/news/articleView.html?idxno=322280)",
      },
      {
        name: "Kaggle - Regression with a Mohs Hardness Dataset: 4등",
        isImportant: true,
        url: "https://www.kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
        description:
          "Kaggle의 광물 모스 경도 예측 대회에서 4등을 차지했습니다. 점수 공식이 MedAE인 점을 이용해 독특한 후처리 기법을 사용했습니다.",
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2등",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
        description:
          "메이커톤에서 GPT-4 API와 라즈베리파이를 결합해 일상 대화에서 의미를 추론하고 스위치, 스피커 등 IoT 기기를 조작하는 AI 비서를 개발했습니다.",
        whatIDid: ["OpenAI API 연동", "기획 및 발표자료 준비"],
        techStacks: ["Python"],
      },
      {
        name: "2023 Net Challenge: 🥈 은상",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
        description:
          "CCTV 데이터를 AI로 분석해 실시간으로 위협을 감지하고, 위협이 감지되면 주변 유저들에게 알림을 보내며 지도에 표시해주는 PWA 앱을 개발했습니다.",
      },
      {
        name: "Dutch: OOP Final Project",
        isImportant: true,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "프론트엔드와 백엔드 모두 C++로만 작성된 더치페이 플랫폼입니다. Emscripten을 이용해 C++를 Web Assembly로 트랜스파일할 수 있다는 점을 이용했습니다. [발표자료](https://docs.google.com/presentation/d/1z5m_s2rTHaUCb3rpHDB-zI-1NMvKHpysNDFqbwSA2LE/edit?usp=sharing)",
        whatIDid: [
          "React의 navigator, state, router, function component, style 등 핵심 기능을 C++로 구현",
          "React, Flutter와 비슷한 형태의 프레임워크 개발",
          "브라우저 환경에서 성능 테스트 결과 해시 반복 연산 작업에서 React보다 110배 가량 빠른 성능을 보임",
        ],
      },
      {
        name: "Speaking Melona: 편의점 음식이 서로 대화를 해요",
        isImportant: false,
        url: "https://melona.chat",
        startedAt: "2024-05",
        endedAt: "2024-05",
        description:
          "편의점 음식별로 페르소나를 설정하고 바코드를 스캔하면 서로 간의 대화를 생성해주는 서비스입니다. 프론트엔드에서의 바코드 인식이 challenge였습니다.",
        whatIDid: ["프론트엔드 개발", "백엔드 개발", "프롬프팅"],
        techStacks: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      },
    ],
  },
};
