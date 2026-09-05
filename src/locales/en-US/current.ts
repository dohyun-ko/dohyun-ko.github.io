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
          name: "ALF Development",
          isImportant: true,
          startedAt: "2025-04",
          endedAt: "2026-06",
          description:
            "Developed ALF v2, Channel Corp.'s AI customer support agent.",
          whatIDid: [
            "Developed the agent's knowledge base UI",
            "Developed the agent workflow UI",
            "Reduced costs by 24% by optimizing the key-value (KV) cache",
          ],
        },
        {
          name: "CoS Development",
          isImportant: true,
          startedAt: "2026-07",
          description:
            "Developing CoS, an agent that automates customer data integration, analysis, and business tasks.",
          whatIDid: [
            "Developed the agent system backend",
            "Reduced prompt noise",
          ],
        },
      ],
    },
  ],
};

export default current;
