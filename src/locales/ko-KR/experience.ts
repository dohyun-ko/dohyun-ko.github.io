const experience = {
  experiences: [
    {
      name: "GIST Data Science Lab",
      isImportant: true,
      color: "#b509ac",
      url: "https://sundong.kim/members/",
      job: "인턴",
      startedAt: "2024-01-02",
      endedAt: "2024-05-31",
      projects: [
        {
          name: "O2ARC 3.0",
          isImportant: true,
          url: "https://o2arc.com/",
          startedAt: "2024-01",
          endedAt: "2024-05",
          description:
            "[ARC](https://github.com/fchollet/ARC)(AI 추론능력 벤치마크)를 사람이 푼 데이터를 수집하기 위해 O2ARC 3.0을 개발했습니다. 스타트업 프로덕트처럼 접근해 데이터 수집량을 대폭 늘렸습니다.",
          whatIDid: [
            "JQuery 기반 시스템을 React로 migration",
            "그리드 조작 UX 개선으로 매우 저조하던 오브젝트 액션(AI 학습에 적합) 사용 빈도가 문제당 7회 이상으로 증가",
            "유저가 자발적으로 문제를 풀도록 gamification과 이벤트 및 타겟 광고 도입. 데이터 수집속도가 6개월간 2천개 → 3개월간 1만개로 증가",
            "IJCAI 2024에 공동 1저자로 논문 게재",
          ],
          techStacks: ["React", "TypeScript", "i18next", "NestJS", "Prisma"],
        },
        {
          name: "Introductory RL Study",
          isImportant: false,
          url: "https://www.coursera.org/specializations/reinforcement-learning",
          startedAt: "2024-01",
          endedAt: "2024-02",
          description:
            "Coursera의 강화학습 스페셜리제이션을 통해 강화학습 기초를 공부했습니다.",
          whatIDid: ["강화학습 기초 공부(– Q-Learning)"],
        },
      ],
    },
    {
      name: "스타트업 Sigor Inc.",
      isImportant: true,
      color: "#FEAA17",
      url: "https://introduce.sigor.company/",
      job: "웹 개발자",
      startedAt: "2022-02-23",
      endedAt: "2023-12-22",
      projects: [
        {
          name: "도글리 프론트엔드",
          isImportant: true,
          url: "https://doggly.co.kr/",
          startedAt: "2022-08",
          endedAt: "2023-03",
          description:
            "AI 기반으로 강아지 사이즈를 측정하고, 맞는 옷을 추천해주는 쇼핑몰 Doggly(유저수 2000+)의 FE를 개발했습니다.",
          whatIDid: [
            "쇼핑몰, 판매자 페이지, 관리자 페이지 프론트엔드 대부분 개발, 반응형 & 다국어 작업 및 유지보수",
            "PWA & Jetpack Compose & SwiftUI 웹뷰 앱 개발 및 결제 모듈 연동",
            "에러 사후 대응을 위한 로깅 도입, 결제 오류 시 30분 내로 유저에게 연락할 수 있도록 개선",
            "UI A/B 테스팅으로 한 달간 유저 전환율(상품 확인) 40% 이상으로 증가",
          ],
          techStacks: [
            "React",
            "TypeScript",
            "Styled-components",
            "Jetpack Compose",
            "SwiftUI",
            "i18next",
            "PWA",
          ],
        },
        {
          name: "러시아워",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-05",
          endedAt: "2023-12",
          description:
            "지하철 혼잡도와 빈 자리를 알려주는 서비스인 러시아워의 프론트엔드/앱/ML을 개발했습니다.",
          whatIDid: [
            "React와 WebView로 초기 버전 개발, Flutter로 migration",
            "GA, Amplitude, Smartlook, 자체 로깅 시스템을 통해 유저의 모든 행동 로깅",
            "지하철 혼잡도 데이터를 이용해 ML 기반으로 역/시간대별 혼잡도를 예측하는 AI 개발",
          ],
          techStacks: [
            "React",
            "TypeScript",
            "Jetpack Compose",
            "SwiftUI",
            "Flutter",
            "Firebase",
          ],
        },
        {
          name: "기획자/개발자 생산성 향상",
          isImportant: true,
          startedAt: "2022-02",
          endedAt: "2023-12",
          description:
            "스타트업의 개발자로서 기획자의 업무를 자동화하고 개발자의 생산성을 향상시키기 위해 노력했습니다. 초기창업팀의 일원으로서 박람회 및 펫페어 부스 운영, 유저 인터뷰, 협력사 미팅 등 다양한 업무를 수행하였습니다.",
          whatIDid: [
            "zero install과 Vite 도입으로 CI/CD 속도 개선 (3분 → 1분)",
            "Amplitude 사용이 어렵다는 피드백을 받아 러시아워에 필요한 기능만을 모은 웹 기반 분석 툴 개발. 유저 플로우, 퍼널 및 리텐션 분석 기능 제공",
            "상품 승인, 로그 추출 등 기획자의 반복 업무 자동화",
            "프론트엔드 재사용성을 높이기 위해 Yarn Workspaces를 이용한 모노레포 통합",
          ],
          techStacks: [
            "React",
            "TypeScript",
            "Amplitude",
            "AWS Lightsail",
            "AWS Lambda",
            "Docker",
            "FastAPI",
            "Pandas",
            "mono-repo",
          ],
        },
      ],
    },
    {
      name: "GDSC-GIST",
      isImportant: false,
      color: "#008cff",
      url: "https://gdsc.community.dev/gwangju-institute-of-science-and-technology/",
      job: "2nd Core, Tech Team",
      startedAt: "2022-05",
      endedAt: "2023-07",
      projects: [
        {
          name: "스터디",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-05",
          description:
            "GDSC에서 진행한 내부 개발 스터디에서 프론트엔드 스터디 리드를 맡았습니다. 전반적인 커리큘럼을 제작하고 진행했습니다. JS Pattern 스터디에도 참여해 디자인 패턴을 공부하고 C++ 기반 React를 만드는 사이드 프로젝트에 활용했습니다.",
          whatIDid: ["React 스터디 리드", "JS Pattern 스터디 참여"],
        },
        {
          name: "GIST Mini Solution Challenge",
          isImportant: false,
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
      isImportant: false,
      color: "#4c568f",
      url: "https://sites.google.com/view/gperigist",
      job: "연구부원",
      startedAt: "2023-07",
      endedAt: "2024-3",
      projects: [
        {
          name: "C언어 교육 진행",
          isImportant: false,
          startedAt: "2023-07",
          endedAt: "2023-08",
          description: "부원들에게 C언어 교육을 진행했습니다.",
          whatIDid: ["C언어 교육 진행"],
          techStacks: ["C"],
        },
        {
          name: "발사체 통신 개발",
          isImportant: false,
          startedAt: "2023-07",
          endedAt: "2023-11",
          description: "발사체 통신 개발을 시도했지만 성공하지는 못했습니다.",
          whatIDid: ["Flight Software 개발", "통신 시스템 개발"],
          techStacks: ["C", "Zigbee"],
        },
      ],
    },
  ],
};

export default experience;
