import current from "./current";
import experience from "./experience";

export const main = {
  title: { developer: "개발자", name: "고도현 | Dohyun Ko" },
  introduction:
    "스타트업에서 2년간 일하며 프론트엔드, 백엔드, 앱, 자동화, ML 등 다양한 분야를 주도적으로 작업했습니다. 이후 AI 연구실에서 일하며 데이터 수집 툴을 제작했고 UX 관련으로 논문을 작성했습니다. 개발인력이 늘 부족한 곳에서 일했기에 생산성과 유지보수의 편의성을 항상 중시합니다. 모노레포와 라이브러리를 제작해 생산성을 높이며 atomic 패턴과 Storybook로 동료가 보기 쉬운 코드를 짜려 노력합니다.",
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
          "ARC 문제의 사람 풀이 데이터가 부족하며, 수집된 데이터의 품질도 AI 학습에 적합하지 않다는 문제를 해결하기 위해 O2ARC 3.0을 개발했습니다. 기존 툴의 UI/UX에서 특정 부분을 불편하게 만들어 데이터 수집 품질을 개선한 방법과 gamification을 통해 데이터 수집량을 늘린 방법을 소개합니다.",
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
          "개인적으로 자주 사용하는 React 컴포넌트를 모아 npm에 배포한 라이브러리입니다. atomic design 패턴을 따르며, Storybook을 사용해 문서화했습니다. 이 이력서와 개인 웹페이지에 사용중입니다.",
        whatIDid: [
          "React 컴포넌트 개발",
          "Storybook을 사용한 컴포넌트 문서화",
          "npm 배포",
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
          "[삼정 KPMG 아이디어톤](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e)에 참여해 문서 작업에 VCS를 도입하고 LLM을 이용한 streamlined-ai-search를 구현한 플랫폼 Docuflow를 개발했습니다. 비개발자도 VCS를 직관적으로 사용할 수 있도록 drag & drop을 적극 이용하였으며, 최대 1분까지 걸릴 수 있는 AI 응답을 기다릴 수 있는 UI를 중시했습니다.",
        whatIDid: ["프론트엔드 개발"],
        techStacks: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Kaggle - Regression with a Mohs Hardness Dataset: 4등",
        isImportant: true,
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
          "2023 Net Chanllenge에 참여했습니다. CCTV 데이터를 AI로 분석해 실시간으로 위협을 감지하고, 위협이 감지되면 주변 유저들에게 알림을 보내며 지도에 표시해주는 서비스를 개발했습니다.",
        whatIDid: [
          "React와 PWA를 사용한 앱 개발",
          "Mapbox를 사용해 실시간 위협 위치 표시",
        ],
        techStacks: ["React", "TypeScript", "Mapbox", "PWA"],
      },
      {
        name: "Dutch: OOP Final Project",
        isImportant: true,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "프론트엔드와 백엔드 모두 C++로만 작성된 더치페이 플랫폼입니다. Emscripten을 이용해 C++를 웹 어셈블리로 트랜스파일할 수 있다는 점과 디자인 패턴을 이용해 React의 navigator, state, router, function component, style 등 핵심 기능을 구현했습니다. 성능 테스트 결과 해시 반복 연산 작업에서 React보다 110배 가량 빠른 성능을 보였습니다. [발표자료](https://docs.google.com/presentation/d/1z5m_s2rTHaUCb3rpHDB-zI-1NMvKHpysNDFqbwSA2LE/edit?usp=sharing)",
        whatIDid: [
          "C++과 웹 어셈블리를 사용한 프론트엔드 UI 개발",
          "React 및 Flutter와 유사한 프레임워크 구현",
          "State, Navigator, Router, Style 등 프론트엔드 로직 개발",
        ],
        techStacks: ["C++", "WebAssembly", "Emscripten"],
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
