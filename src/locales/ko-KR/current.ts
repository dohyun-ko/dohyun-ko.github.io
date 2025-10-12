const current = {
  organizations: [
    {
      name: "채널코퍼레이션",
      isImportant: true,
      color: "#5E56F0",
      url: "https://channel.io/",
      job: "Software Engineer",
      startedAt: "2025-01",
      projects: [
        {
          name: "Front ALF 개발",
          isImportant: true,
          startedAt: "2025-04",
          description:
            "채널코퍼레이션의 채팅 솔루션인 ALF의 프론트엔드를 개발하고 있습니다.",
          whatIDid: ["프론트엔드 개발"],
          techStacks: ["React", "TypeScript"],
        },
      ],
    },
    {
      name: "GIST 학생회 정보국",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "시니어 부원, 2024년 하반기 팀장",
      startedAt: "2022-09",
      projects: [
        {
          name: "Ziggle 프론트엔드",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: "2023-04",
          endedAt: "2025-02",
          description:
            "GIST 통합 공지 플랫폼인 Ziggle의 팀장 및 프론트엔드를 개발하고 있습니다.",
          whatIDid: [
            "React로 초기버전 개발 및 Next.js로 migration",
            "GraphQL, Apollo Client 등 다양한 기술 도입",
            "학부생의 25%인 DAU 200명 유지 중",
          ],
          techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
          name: "프론트엔드 코어",
          isImportant: true,
          startedAt: "2022-09",
          description:
            "팀 내 프론트엔드 기술 수준을 향상시키기 위해 노력하고 있습니다.",
          whatIDid: [
            "i18n 도입으로 다국어 지원",
            "Atomic 패턴 도입 및 Storybook으로 문서화",
            "Playwright를 이용한 E2E 테스트 자동화",
          ],
        },
        {
          name: "IdP 프론트엔드",
          isImportant: false,
          url: "https://idp.gistory.me",
          startedAt: "2024-03",
          endedAt: "2024-12",
          description:
            "GIST에서 사용하는 OAuth2.0 인증 시스템 IdP의 프론트엔드를 유지보수하고 있습니다.",
          whatIDid: ["프론트엔드 유지보수"],
          techStacks: ["React", "TypeScript", "Tailwind CSS"],
        },
      ],
    },
  ],
};

export default current;
