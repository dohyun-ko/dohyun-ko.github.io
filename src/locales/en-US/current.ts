const current = {
  organizations: [
    {
      name: "GIST Student Association Infoteam",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "Team Leader",
      startedAt: "2022-09",
      projects: [
        {
          name: "AMS Frontend",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-02",
          description:
            "Developed the frontend for AMS, GIST's club application system. Implemented a drag-and-drop based UI to enhance the convenience of managing interview schedules, and introduced a mono-repo to reduce the rewriting of similar code.",
          whatIDid: ["Frontend Development", "UI Design"],
          techStacks: ["React", "TypeScript", "mono-repo"],
        },
        {
          name: "Ziggle Frontend",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: "2023-04",
          description:
            "Developing the frontend for Ziggle, GIST's integrated notice platform. Initially developed the version using React and then migrated to Next.js, actively adopting various technologies like GraphQL and Apollo Client. Successfully established within the school, maintaining 200 DAUs, which is 25% of the undergraduate population.",
          whatIDid: ["Team Leader and Frontend Development"],
          techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
          name: "IdP Frontend",
          isImportant: true,
          url: "https://idp.gistory.me",
          startedAt: "2024-03",
          description:
            "Maintaining the frontend for IdP, GIST's OAuth2.0 authentication system.",
          whatIDid: ["Frontend Maintenance"],
          techStacks: ["React", "TypeScript", "Tailwind CSS"],
        },
      ],
    },
    {
      name: "Wing: GIST Computing Club",
      isImportant: false,
      color: "rgb(151, 123, 242)",
      url: "https://wing-homepage.vercel.app/",
      job: "Senior Member",
      startedAt: "2023-03",
      projects: [
        {
          name: "Wing Session",
          isImportant: true,
          startedAt: "2023-03",
          description:
            "Conducting development exchange and sessions within Wing.",
          whatIDid: [
            "Conducted a session on introducing mono-repo",
            "Conducted a session on React.cpp",
            "Conducted a session on writing code like a UI library: Compound Components",
          ],
        },
      ],
    },
  ],
};

export default current;
