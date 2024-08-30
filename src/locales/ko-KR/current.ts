const current = {
  organizations: [
    {
      name: "GIST 학생회 정보국",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "팀장",
      startedAt: "2022-09",
      projects: [
        {
          name: "AMS 프론트엔드",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-02",
          description:
            "GIST 동아리 신청 시스템인 AMS의 프론트엔드를 개발했습니다. 면접 일정 관리 편의성을 위해 drag-and-drop 위주의 UI를 구현하였으며, 비슷한 코드의 재작성을 줄이기 위해 mono-repo를 도입했습니다.",
          whatIDid: ["프론트엔드 개발", "UI 디자인"],
          techStacks: ["React", "TypeScript", "mono-repo"],
        },
        {
          name: "Ziggle 프론트엔드",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: "2023-04",
          description:
            "GIST 통합 공지 플랫폼인 Ziggle의 프론트엔드를 개발하고 있습니다. React로 초기버전 개발 및 Next.js로 migration을 하였으며, GraphQL, Apollo Client 등 다양한 기술을 적극 도입하고 있습니다. 교내에 성공적으로 정착하여 학부 인원의 25%인 DAU 200명을 유지중입니다.",
          whatIDid: ["팀장 및 프론트엔드 개발"],
          techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
          name: "IdP 프론트엔드",
          isImportant: true,
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
      isImportant: false,
      color: "rgb(151, 123, 242)",
      url: "https://wing-homepage.vercel.app/",
      job: "시니어 부원",
      startedAt: "2023-03",
      projects: [
        {
          name: "Wing Session",
          isImportant: true,
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
};

export default current;
