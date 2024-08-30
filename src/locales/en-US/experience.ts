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
            "Developed O2ARC 3.0, a tool for collecting human solution data for the Abstract and Reasoning Corpus ([ARC](https://github.com/fchollet/ARC)), a benchmark for evaluating AI reasoning abilities. The data collected by the existing tool was not suitable for training, so I restricted user actions to collect over 10,000 data points in a format favorable for AI training. Co-authored a paper published at IJCAI 2024 as a co-first author.",
          whatIDid: [
            "Developed the overall frontend UI and grid manipulation logic",
            "Developed backend APIs related to events",
            "Designed UX and collected user data to improve data quality",
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
            "Studied the basics of reinforcement learning through Coursera's Reinforcement Learning Specialization.",
          whatIDid: ["Studied basics of reinforcement learning (~Q-Learning)"],
        },
      ],
    },
    {
      name: "Sigor Inc.",
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
            "Developed the frontend for Doggly, an e-commerce that measures dog sizes and recommends fitting clothes based on AI. I developed all the key features of the shopping mall, including the payment module, seller pages, admin pages, and also developed PWA and webview Android/iOS apps. Additionally, I performed logging and A/B testing to improve the user funnel.",
          whatIDid: [
            "Developed and maintained the overall frontend of the shopping mall",
            "Developed Android & iOS webview apps and integrated payment modules",
            "Conducted A/B testing to improve the user funnel",
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
          name: "Rush Hour Frontend",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-05",
          endedAt: "2023-07",
          description:
            "Developed the frontend and webview app for Rush Hour, a service that informs about available subway seats. I focused on providing a user experience indistinguishable from native apps, despite it being a webview.",
          whatIDid: [
            "Developed Rush Hour webview frontend",
            "Developed Rush Hour Android & iOS webview apps",
          ],
          techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
        },
        {
          name: "Rush Hour App",
          isImportant: true,
          url: "https://introduce.rushhourkorea.com/",
          startedAt: "2023-07",
          endedAt: "2023-10",
          description:
            "Participated in the development of the Flutter version of Rush Hour. Collected user logs through GA, Amplitude, Smartlook, and an in-house logging system, and developed an in-house log analysis tool capable of calculating retention and funnel metrics.",
          whatIDid: [
            "Developed Rush Hour Flutter app",
            "Recorded app user logs",
          ],
          techStacks: ["Flutter", "Firebase"],
        },
        {
          name: "Rush Hour AI",
          isImportant: true,
          startedAt: "2023-09",
          endedAt: "2023-12",
          description:
            "Developed an AI that predicts real-time subway congestion based on congestion data using machine learning.",
          whatIDid: [
            "Developed AI for predicting subway congestion and available seats",
          ],
          techStacks: ["Scikit-learn", "Pandas"],
        },
        {
          name: "Various",
          isImportant: true,
          startedAt: "2022-02",
          endedAt: "2023-12",
          description:
            "Performed various development tasks as a developer in a startup.",
          whatIDid: [
            "Developed landing pages and admin pages",
            "Analyzed and conducted statistics on user logs",
            "Automated tasks",
            "Integrated mono-repo to improve productivity",
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
          name: "Study Sessions",
          isImportant: false,
          startedAt: "2022-11",
          endedAt: "2023-05",
          description:
            "Led the frontend study sessions within GDSC. I created and conducted the overall curriculum. Additionally, I participated in the JS Pattern study, learning design patterns and applying them to a side project that involved creating a C++ based React.",
          whatIDid: [
            "Led React study sessions",
            "Participated in JS Pattern study",
          ],
        },
        {
          name: "GIST Mini Solution Challenge",
          isImportant: false,
          url: "https://gdsc.community.dev/events/details/developer-student-clubs-gwangju-institute-of-science-and-technology-presents-gist-mini-solution-challenge/",
          startedAt: "2023-04",
          endedAt: "2023-04",
          description:
            "A hackathon hosted by GDSC-GIST within GIST, with a total of 60 participants.",
          whatIDid: ["Prepared and managed the hackathon"],
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
          description: "Provided C language education to club members.",
          whatIDid: ["Conducted C language education"],
          techStacks: ["C"],
        },
        {
          name: "Rocket Communication Development",
          isImportant: false,
          startedAt: "2023-07",
          endedAt: "2023-11",
          description:
            "Attempted to develop communication systems for rockets but did not succeed.",
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
