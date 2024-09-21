const experience = {
  experiences: [
    {
      name: "GIST Data Science Lab",
      isImportant: true,
      color: "#b509ac",
      url: "https://sundong.kim/members/",
      job: "Intern",
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
            "Developed O2ARC 3.0 to collect human solving data for [ARC](https://github.com/fchollet/ARC) (AI reasoning benchmark). Approached it like a startup product, significantly increasing data collection volume.",
          whatIDid: [
            "Migrated the system from JQuery to React",
            "Improved grid manipulation UX, increasing object action usage (suitable for AI training) from almost non-existent to over 7 times per problem",
            "Introduced gamification, events, and targeted ads to encourage users to solve problems voluntarily. Increased data collection speed from 2,000 in 6 months to 10,000 in 3 months",
            "Published a paper as a co-first author at IJCAI 2024",
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
            "Studied the basics of reinforcement learning through Coursera's Reinforcement Learning Specialization.",
          whatIDid: [
            "Studied the basics of reinforcement learning (– Q-Learning)",
          ],
        },
      ],
    },
    {
      name: "Startup Sigor Inc.",
      isImportant: true,
      color: "#FEAA17",
      url: "https://introduce.sigor.company/",
      job: "Web Developer",
      startedAt: "2022-02-23",
      endedAt: "2023-12-22",
      projects: [
        {
          name: "Doggly Frontend",
          isImportant: true,
          url: "https://doggly.co.kr/",
          startedAt: "2022-08",
          endedAt: "2023-03",
          description:
            "Developed the frontend for Doggly (with over 2000 users), a shopping mall that measures dog sizes using AI and recommends fitting clothes.",
          whatIDid: [
            "Developed most of the frontend for the shopping mall, seller page, and admin page; worked on responsiveness and multilingual support; and handled maintenance",
            "Developed the PWA & Jetpack Compose & SwiftUI WebView app and integrated the payment module",
            "Introduced logging for error post-processing, enabling contact with users within 30 minutes in case of payment errors",
            "Increased user conversion rate (product view) by over 40% through UI A/B testing over a month",
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
          name: "Rush Hour",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-05",
          endedAt: "2023-12",
          description:
            "Developed the frontend/app/ML for Rush Hour, a service that informs users about subway congestion and available seats.",
          whatIDid: [
            "Developed the initial version with React and WebView, then migrated to Flutter",
            "Logged all user actions using GA, Amplitude, Smartlook, and a custom logging system",
            "Developed AI to predict congestion levels at each station and time zone using subway congestion data",
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
          name: "Improving Productivity for Planners/Developers",
          isImportant: true,
          startedAt: "2022-02",
          endedAt: "2023-12",
          description:
            "As a developer at a startup, I focused on automating planners' tasks and improving developers' productivity. As a member of the early startup team, I handled various tasks including booth operations at expos and pet fairs, user interviews, and meetings with partners.",
          whatIDid: [
            "Improved CI/CD speed (from 3 minutes to 1 minute) by introducing zero install and Vite",
            "Developed a web-based analytics tool focused only on the features needed for Rush Hour in response to feedback that Amplitude was difficult to use. Provided user flow, funnel, and retention analysis functionalities",
            "Automated repetitive tasks of planners such as product approval and log extraction",
            "Integrated mono-repo with Yarn Workspaces to enhance frontend reusability",
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
          name: "Study",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-05",
          description:
            "Led the frontend study in the internal development study at GDSC. Created and conducted the overall curriculum. Also participated in the JS Pattern study, where I studied design patterns and applied them to a side project that created a C++ based React.",
          whatIDid: ["Frontend study lead", "Participated in JS Pattern study"],
        },
        {
          name: "GIST Mini Solution Challenge",
          isImportant: false,
          url: "https://gdsc.community.dev/events/details/developer-student-clubs-gwangju-institute-of-science-and-technology-presents-gist-mini-solution-challenge/",
          startedAt: "2023-04",
          endedAt: "2023-04",
          description:
            "A hackathon organized by GDSC-GIST within GIST. A total of 60 people participated.",
          whatIDid: ["Hackathon preparation & accounting"],
        },
      ],
    },
    {
      name: "GPERI",
      isImportant: false,
      color: "#4c568f",
      url: "https://sites.google.com/view/gperigist",
      job: "Research Member",
      startedAt: "2023-07",
      endedAt: "2024-03",
      projects: [
        {
          name: "C Language Education",
          isImportant: false,
          startedAt: "2023-07",
          endedAt: "2023-08",
          description: "Conducted C language education for the members.",
          whatIDid: ["Conducted C language education"],
          techStacks: ["C"],
        },
        {
          name: "Rocket Communication Development",
          isImportant: false,
          startedAt: "2023-07",
          endedAt: "2023-11",
          description:
            "Attempted to develop rocket communication, but it was not successful.",
          whatIDid: [
            "Developed flight software",
            "Developed communication system",
          ],
          techStacks: ["C", "Zigbee"],
        },
      ],
    },
  ],
};

export default experience;
