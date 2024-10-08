const current = {
  organizations: [
    {
      name: "GIST Student Council Information Bureau",
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
            "Developed the frontend for AMS, the GIST club application system. Implemented a drag-and-drop UI for easier interview schedule management and introduced a mono-repo to reduce code duplication.",
          whatIDid: ["Frontend development", "UI design"],
          techStacks: ["React", "TypeScript", "mono-repo"],
        },
        {
          name: "Ziggle Frontend",
          isImportant: true,
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: "2023-04",
          description:
            "Serving as the team leader and developing the frontend for Ziggle, GIST's integrated notification platform.",
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
          description:
            "Maintaining the frontend of the IdP, the OAuth2.0 authentication system used at GIST.",
          whatIDid: ["Frontend maintenance"],
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
            "Conducting development knowledge exchange and sessions at Wing.",
          whatIDid: [
            "Led a session on introducing mono-repo",
            "Led a session on React.cpp",
            "Led a session on writing code like a UI library: Compound Components",
          ],
        },
      ],
    },
  ],
};

export default current;
