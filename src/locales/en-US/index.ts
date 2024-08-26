export const main = {
  title: { developer: "Developer", name: "Dohyun Ko | 고도현" },
  introduction:
    "As a third-year frontend developer, I strive to write maintainable code. Working at a startup, I gained diverse experience in frontend, backend, infrastructure, and AI, and I have also interned at an AI research lab.  My goal is to 'take the road not taken,' always embracing various challenges.",
  current: {
    organizations: [
      {
        name: "GIST Student Association Infoteam",
        isImportant: true,
        color: "#EB6263",
        url: "https://introduce.gistory.me/",
        job: "Information Member and Leader for 2024-second half",
        startedAt: "2022-09",
        projects: [
          {
            name: "AMS Frontend",
            isImportant: false,
            startedAt: "2022-11",
            endedAt: "2023-02",
            description:
              "Developed the frontend of AMS, the GIST club application system.",
            whatIDid: ["Frontend development", "UI design"],
            techStacks: ["React", "TypeScript", "mono-repo"],
          },
          {
            name: "Ziggle Frontend",
            isImportant: true,
            url: "https://github.com/gsainfoteam/ziggle-fe",
            startedAt: "2023-04",
            description:
              "Developing the frontend of Ziggle, GIST's integrated notification platform.",
            whatIDid: ["Lead and Frontend development"],
            techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
          },
          {
            name: "IdP Frontend",
            isImportant: true,
            url: "https://idp.gistory.me",
            startedAt: "2024-03",
            description:
              "Maintaining the frontend of IdP, the OAuth2.0 authentication system used at GIST.",
            whatIDid: ["Frontend maintenance"],
            techStacks: ["React", "TypeScript", "Tailwind CSS"],
          },
        ],
      },
      {
        name: "Wing: GIST CS Club",
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
              "Conducting development exchanges and sessions at Wing.",
            whatIDid: [
              "Conducted session on introducing mono-repo",
              "Conducted session on React.cpp(refer to the side project: Dutch: OOP Final)",
              "Conducted session on writing code like a UI library: Compound Components",
            ],
          },
        ],
      },
    ],
  },
  education: {
    attendedLectures: [
      "Object-Oriented Programming",
      "Data Structures",
      "Introduction to Algorithms",
      "Computer Systems Theory and Laboratory",
      "Automata Theory",
      "Operating Systems",
      "Computer Graphics",
      "Computer Networking",
      "Machine Learning and Deep Learning",
      "Computer Security",
      "Computational Models of Cognition",
    ],
    attendedLecture: "Attended Courses",
    major: "Electrical Engineering and Computer Science",
  },
  publication: {
    publications: [
      {
        name: "O2ARC 3.0: A Platform for Solving and Creating ARC Tasks",
        date: "2024-08",
        isImportant: true,
        url: "https://www.ijcai.org/proceedings/2024/1034",
        publisher: "IJCAI 2024",
        description:
          "To address the issue of insufficient human solution data for ARC problems and the unsuitability of the collected data for AI training, we developed O2ARC 3.0. This paper focuses on how we improved the quantity and quality of data collection by modifying the UI/UX of the existing tool.",
      },
    ],
  },
  experience: {
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
              "Developed and maintained version 3.0 of O2ARC, a tool for collecting human solutions data for ARC problems. Authored a demo paper on the development and data analysis, which was submitted to IJCAI 2024.",
            whatIDid: [
              "Overall frontend and the grid manipulation logic development",
              "Backend API development",
              "UX design to enhance the quality of collected user data",
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
            whatIDid: [
              "Studied basics of reinforcement learning (up to Q-Learning)",
            ],
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
            url: "https://doggly.co.kr/",
            startedAt: "2022-08",
            endedAt: "2023-03",
            description:
              "Developed the frontend for Doggly, a pet clothing shopping mall which provides AI-based size measurement.",
            whatIDid: [
              "Overall frontend development and maintenance",
              "Developed Doggly android & iOS webview app and integrated payment module",
              "A/B testing for funnel improvement",
            ],
            techStacks: [
              "React",
              "TypeScript",
              "Jetpack Compose",
              "SwiftUI",
              "i18next",
            ],
          },
          {
            name: "Rushhour Frontend",
            isImportant: true,
            url: "https://introduce.rushhourkorea.com/",
            startedAt: "2023-05",
            endedAt: "2023-07",
            description:
              "Developed the frontend and webview app for Rushhour, a service that informs about available seats in the subway.",
            whatIDid: [
              "Developed Rushhour webview frontend",
              "Developed Rushhour android & iOS webview app",
            ],
            techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
          },
          {
            name: "Rushhour App",
            isImportant: true,
            url: "https://introduce.rushhourkorea.com/",
            startedAt: "2023-07",
            endedAt: "2023-10",
            description:
              "Participated in the development of the Flutter version of Rushhour.",
            whatIDid: [
              "Developed Rushhour Flutter app",
              "Logged app user data",
            ],
            techStacks: ["Flutter", "Firebase"],
          },
          {
            name: "Rushhour AI",
            isImportant: true,
            startedAt: "2023-09",
            endedAt: "2023-12",
            description: "Participated in developing AI(ML) for Rushhour.",
            whatIDid: [
              "Developed AI to predict subway congestion",
              "Developed AI to predict available subway seats",
            ],
            techStacks: ["Scikit-learn", "Pandas"],
          },
          {
            name: "Others",
            isImportant: true,
            startedAt: "2022-02",
            endedAt: "2023-12",
            description:
              "Performed various development tasks as a developer in a startup.",
            whatIDid: [
              "Developed landing pages and admin pages",
              "Analyzed and collected user logs",
              "Automated tasks",
              "Integrated into mono-repo for productivity improvement",
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
        job: "2nd-year Team Core, Tech Team",
        startedAt: "2022-05",
        endedAt: "2023-07",
        projects: [
          {
            name: "Study",
            isImportant: false,
            startedAt: "2022-11",
            endedAt: "2023-05",
            description: "Internal development study conducted by GDSC.",
            whatIDid: ["Led React study", "Participated in JS Pattern study"],
          },
          {
            name: "GIST Mini Solution Challenge",
            isImportant: false,
            url: "https://gdsc.community.dev/events/details/developer-student-clubs-gwangju-institute-of-science-and-technology-presents-gist-mini-solution-challenge/",
            startedAt: "2023-04",
            endedAt: "2023-04",
            description:
              "Hackathon hosted by GDSC-GIST at GIST. A total of 60 people participated.",
            whatIDid: ["Prepared and managed hackathon"],
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
            description: "Conducted C language education for members.",
            whatIDid: ["Conducted C language education"],
            techStacks: ["C"],
          },
          {
            name: "Rocket Communication Development",
            isImportant: false,
            startedAt: "2023-07",
            endedAt: "2023-11",
            description:
              "Attempted rocket communication development but was not successful.",
            whatIDid: [
              "Developed Flight Software",
              "Developed communication system",
            ],
            techStacks: ["C", "Zigbee"],
          },
        ],
      },
    ],
  },
  sideProject: {
    sideProjects: [
      {
        name: "2024 KPMG Ideathon: 🥉 3rd place",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
        description:
          "Participated in the [Samjong KPMG Ideathon](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e) and developed Docuflow, a platform implementing VCS for document work and streamlined-ai-search using LLM.",
        whatIDid: ["Frontend development"],
        techStacks: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Kaggle - Regression with a Mohs Hardness Dataset: 4th place",
        isImportant: true,
        url: "https://www.kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
        description:
          "Achieved 4th place in Kaggle's Mohs hardness prediction competition. Used a unique post-processing technique considering the score formula being MedAE.",
        whatIDid: ["Developed ML model"],
        techStacks: ["Python", "Scikit-learn", "Pandas"],
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2nd place",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
        description:
          "Developed an AI assistant combining GPT-4 API and Raspberry Pi, capable of understanding everyday conversations and controlling IoT devices like switches and speakers.",
        whatIDid: [
          "Integrated OpenAI API",
          "Prepared planning and presentation materials",
        ],
        techStacks: ["Python"],
      },
      {
        name: "2023 Net Challenge: 🥈 Silver Award",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
        description:
          "Participated in the 2023 Net Challenge. Developed a service that analyzes CCTV data with AI to detect threats in real-time and notifies nearby users when a threat is detected.",
        whatIDid: [
          "Developed app using React and PWA",
          "Displayed real-time threat locations using Mapbox",
        ],
        techStacks: ["React", "TypeScript", "Mapbox", "PWA"],
      },
      {
        name: "React-Atoms: React Component Library",
        isImportant: true,
        url: "https://github.com/dohyun-ko/react-atoms",
        startedAt: "2023-07",
        endedAt: "2023-07",
        description:
          "A personal library of frequently used React components published on npm.",
        whatIDid: [
          "Developed React components",
          "Documented components using Storybook",
          "Published on npm",
        ],
        techStacks: ["React", "TypeScript", "RollUp", "Storybook", "npm"],
      },
      {
        name: "Dutch: OOP Final Project",
        isImportant: false,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "A Dutch pay platform developed entirely in C++ for both frontend and backend. Submitted as the final project for GIST's Object-Oriented Programming course.",
        whatIDid: [
          "Developed frontend UI using C++ and WebAssembly",
          "Developed frontend logic such as State and Navigator",
        ],
        techStacks: ["C++", "WebAssembly", "Emscripten"],
      },
      {
        name: "Speaking Melona: Convenience Store Foods Talking to Each Other",
        isImportant: false,
        url: "https://melona.chat",
        startedAt: "2024-05",
        endedAt: "2024-05",
        description:
          "A service that assigns personas to convenience store foods and generates conversations between them when a barcode is scanned.",
        whatIDid: ["Frontend development", "Backend development", "Prompting"],
        techStacks: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      },
    ],
  },
  skill: {
    skills: [
      {
        name: "React",
        level: 5,
      },
      {
        name: "TypeScript",
        level: 4,
      },
      {
        name: "JavaScript",
        level: 4,
      },
      {
        name: "HTML/CSS",
        level: 4,
      },
      {
        name: "Python",
        level: 3,
      },
      {
        name: "NestJS",
        level: 2,
      },
      {
        name: "FastAPI",
        level: 2,
      },
      {
        name: "Flutter",
        level: 2,
      },
      {
        name: "C++",
        level: 2,
      },
      {
        name: "Kotlin",
        level: 1,
      },
      {
        name: "Docker",
        level: 1,
      },
      {
        name: "Rust",
        level: 1,
      },
      {
        name: "Assembly",
        level: 1,
      },
    ],
  },
};
