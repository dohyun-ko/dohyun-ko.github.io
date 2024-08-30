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
            "AI의 추론능력을 평가하는 벤치마크 Abstract and Resoning Corpus([ARC](https://github.com/fchollet/ARC))의 사람 풀이 데이터 수집을 위한 툴 O2ARC 3.0을 개발했습니다. 기존 툴에서 수집된 데이터는 학습에 쓰기 어려운 형태였으며, 이를 유저가 취할 수 있는 행동을 제한해 AI 학습에 유리한 형태의 데이터 1만개 이상을 수집하였습니다. IJCAI 2024에 공동 1저자로 논문을 게재하였습니다.",
          whatIDid: [
            "전체적인 프론트엔드 UI 및 그리드 조작 로직 개발",
            "이벤트 관련 백엔드 API 개발",
            "수집 데이터 품질 개선을 위한 UX 디자인 및 유저 데이터 수집",
          ],
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
          isImportant: false,
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
      name: "Sigor Inc.",
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
            "AI 기반으로 강아지 사이즈를 측정하고, 맞는 옷을 추천해주는 쇼핑몰 Doggly의 FE를 개발했습니다. 결제모듈을 포함한 쇼핑몰의 전체적인 기능과 판매자용 페이지, admin용 페이지를 전부 개발하였으며 PWA와 웹뷰 android/ios 앱도 개발하였습니다. 유저 퍼널 개선을 위해 로깅과 A/B 테스팅도 수행하였습니다.",
          whatIDid: [
            "쇼핑몰의 전체적인 프론트엔드 개발 및 유지보수",
            "Android & iOS 웹뷰 앱 개발 및 결제 모듈 연동",
            "퍼널 개선을 위한 A/B 테스팅",
          ],
          techStacks: [
            "React",
            "TypeScript",
            "Jetpack Compose",
            "SwiftUI",
            "i18next",
            "PWA",
          ],
        },
        {
          name: "러시아워 프론트엔드",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-05",
          endedAt: "2023-07",
          description:
            "지하철 빈 자리를 알려주는 서비스인 러시아워의 프론트엔드와 웹뷰 앱을 개발했습니다. 웹뷰지만 네이티브 앱과 구별할 수 없는 사용자 경험을 제공하기 위해 노력했습니다.",
          whatIDid: [
            "러시아워 웹뷰용 프론트엔드 개발",
            "러시아워 android & ios 웹뷰 앱 개발",
          ],
          techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
        },
        {
          name: "러시아워 앱",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-07",
          endedAt: "2023-10",

          description:
            "러시아워의 플러터 버전 개발에 참여했습니다. GA, Amplitude, Smartlook, 자체 로깅 시스템을 통해 유저 로그를 수집하였고, 리텐션, 퍼널을 계산할 수 있는 자체 로그 분석 툴도 개발하였습니다.",
          whatIDid: ["러시아워 플러터 앱 개발", "앱 유저 로그 기록"],
          techStacks: ["Flutter", "Firebase"],
        },
        {
          name: "러시아워 AI",
          isImportant: true,
          startedAt: "2023-09",
          endedAt: "2023-12",

          description:
            "지하철 혼잡도 데이터를 이용해 ML 기반으로 실시간 혼잡도를 예측하는 AI를 개발하였습니다.",
          whatIDid: ["지하철 혼잡도 및 빈자리 예측 AI 개발"],
          techStacks: ["Scikit-learn", "Pandas"],
        },
        {
          name: "기타",
          isImportant: true,
          startedAt: "2022-02",
          endedAt: "2023-12",
          description: "스타트업의 개발자로서 다양한 개발 업무를 수행했습니다.",
          whatIDid: [
            "랜딩 페이지 및 관리자 페이지 개발",
            "유저 로그 분석 및 통계",
            "업무 자동화",
            "생산성 향상을 위한 모노레포 통합",
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
