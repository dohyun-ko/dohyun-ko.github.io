const current = {
  organizations: [
    {
      name: "Channel Corp.",
      isImportant: true,
      color: "#5E56F0",
      url: "https://channel.io/",
      job: "Software Engineer",
      startedAt: "2025-01",
      projects: [
        {
          name: "ALF Frontend",
          isImportant: true,
          startedAt: "2025-04",
          description:
            "Developing the frontend for ALF, Channel Corporation's chat solution.",
          whatIDid: ["Frontend development"],
          techStacks: ["React", "TypeScript"],
        },
      ],
    },
    {
      name: "GIST Student Council Information Bureau",
      isImportant: true,
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "Senior Member; Team Lead (H2 2024)",
      startedAt: "2022-09",
      projects: [
        {
          name: "Ziggle Frontend",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: "2023-04",
          endedAt: "2025-02",
          description:
            "Serving as team lead and developing the frontend for Ziggle, GIST's integrated notification platform.",
          whatIDid: [
            "Developed the initial version with React and migrated to Next.js",
            "Introduced various technologies including GraphQL and Apollo Client",
            "Maintained a DAU of 200 users, representing 25% of the undergraduate population",
          ],
          techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
          name: "Frontend Core",
          isImportant: true,
          startedAt: "2022-09",
          description:
            "Focused on improving the frontend technical level within the team.",
          whatIDid: [
            "Introduced i18n for multilingual support",
            "Adopted the Atomic pattern and documented with Storybook",
            "Automated E2E testing using Playwright",
          ],
        },
        {
          name: "IdP Frontend",
          isImportant: false,
          url: "https://idp.gistory.me",
          startedAt: "2024-03",
          endedAt: "2024-12",
          description:
            "Maintaining the frontend of the IdP, the OAuth2.0 authentication system used at GIST.",
          whatIDid: ["Frontend maintenance"],
          techStacks: ["React", "TypeScript", "Tailwind CSS"],
        },
      ],
    },
  ],
};

export default current;
