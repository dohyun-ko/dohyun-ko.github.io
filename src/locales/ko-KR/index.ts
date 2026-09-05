import current from "./current";
import experience from "./experience";

export const main = {
  techStackLabel: "사용 기술",
  title: {
    developer: "Generalist FE 개발자",
    name: "고도현 | Dohyun Ko | 산업기능요원 보충역",
  },
  introduction:
    "프론트엔드 개발자로, 스타트업과 연구실에서 웹과 앱 개발을 주도했으며 초기 개발부터 유저 분석까지 폭넓은 경험을 쌓았습니다. \n 다양한 기술 스택을 활용하여 사용자 중심의 서비스를 개발하는 데 주력합니다. 컨퍼런스를 운영하며 지역 개발 생태계 활성화에도 노력하고 있습니다.",
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
        name: "is-an.ai",
        isImportant: true,
        url: "https://is-an.ai",
        startedAt: "2025-05",
        description:
          "AI 서비스들을 위한 무료 도메인 서비스입니다. 현재 에이전트 접근성을 높여가고 있습니다. PSL 등재가 목표입니다.",
        whatIDid: ["프론트엔드 개발", "리서치"],
      },
      {
        name: "Trax Music: 음악인들을 위한 github",
        isImportant: true,
        url: "https://trax-music.com",
        startedAt: "2024-09",
        endedAt: "2026-03",
        description:
          "음악 제작 과정에서의 협업을 위한 git-like 버전 관리 서비스입니다. 음악 구간별 피드백 기능을 제공합니다.",
        whatIDid: ["프론트엔드 개발"],
        techStacks: ["React", "TypeScript", "WaveSurfer.js"],
      },
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
          "React의 핵심 기능(navigator, state, router, function component, style 등)을 C++로 구현",
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
  award: {
    list: [
      {
        name: "2024 KPMG Ideathon: 🥉 3등",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
      },
      {
        name: "Kaggle - Mohs Hardness Dataset: 4등",
        isImportant: true,
        url: "https://kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2등",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
      },
      {
        name: "2023 Net Challenge: 🥈 은상",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
      },
    ],
  },
};
