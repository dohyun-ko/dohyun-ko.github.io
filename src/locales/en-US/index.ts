import current from "./current";
import experience from "./experience";

export const main = {
  title: { developer: "Developer", name: "Dohyun Ko | 고도현" },
  introduction:
    "I worked at a startup for two years, taking the lead on various tasks across front-end, back-end, app development, automation, and machine learning. Afterwards, I worked in an AI research lab where I developed data collection tools and wrote a paper on UX. Since I have often worked in environments with a shortage of developers, I always prioritize productivity and ease of maintenance. I aim to enhance productivity by creating monorepos and libraries, and I strive to write code that is easy for others to understand by using atomic patterns and Storybook.",
  current,
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
        publisher: "IJCAI 2024 | Co-First Author",
        description:
          "To address the lack of human solution data for ARC tasks and the poor quality of collected data for AI training, I developed O2ARC 3.0. This work introduces methods for improving data collection quality by intentionally creating certain inconveniences in the existing tool's UI/UX and increasing data collection volume through gamification.",
      },
    ],
  },
  experience,
  sideProject: {
    sideProjects: [
      {
        name: "2024 KPMG Ideathon: 🥉 3rd Place",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
        description:
          "Participated in the [Samjong KPMG Ideathon](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e) and developed the platform Docuflow, which implemented VCS for document work and streamlined-ai-search using LLM. I focused on making VCS intuitive for non-developers through drag & drop and ensuring the UI accommodated AI responses that could take up to a minute.",
        whatIDid: ["Front-end Development"],
        techStacks: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Kaggle - Regression with a Mohs Hardness Dataset: 4th Place",
        isImportant: true,
        url: "https://www.kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
        description:
          "Achieved 4th place in Kaggle's Mohs Hardness Prediction Competition. I used a unique post-processing technique, leveraging the fact that the scoring metric was MedAE.",
        whatIDid: ["ML Model Development"],
        techStacks: ["Python", "Scikit-learn", "Pandas"],
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2nd Place",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
        description:
          "Developed an AI assistant that interprets meanings from everyday conversations to control IoT devices like switches and speakers, combining GPT-4 API and Raspberry Pi.",
        whatIDid: [
          "OpenAI API Integration",
          "Planning and Preparing Presentation Materials",
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
          "Participated in the 2023 Net Challenge, developing a service that analyzes CCTV data with AI to detect real-time threats. When a threat is detected, it alerts nearby users and displays the location on a map.",
        whatIDid: [
          "Developed the app using React and PWA",
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
          "A library of React components I frequently use, which I published on npm. It follows the atomic design pattern and is documented using Storybook.",
        whatIDid: [
          "Developed React components",
          "Documented components using Storybook",
          "Published on npm",
        ],
        techStacks: ["React", "TypeScript", "RollUp", "Storybook", "npm"],
      },
      {
        name: "Dutch: OOP Final Project",
        isImportant: true,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "A Dutch pay platform written entirely in C++ for both front-end and back-end. I implemented key front-end functionalities like navigator, state, router, functional components, and styling using design patterns and utilized Emscripten to transpile C++ to WebAssembly. Submitted as a final project for the GIST Object-Oriented Programming course.",
        whatIDid: [
          "Developed front-end UI using C++ and WebAssembly",
          "Developed front-end logic such as State, Navigator, etc.",
        ],
        techStacks: ["C++", "WebAssembly", "Emscripten"],
      },
      {
        name: "Speaking Melona: Convenience Store Foods Talk to Each Other",
        isImportant: false,
        url: "https://melona.chat",
        startedAt: "2024-05",
        endedAt: "2024-05",
        description:
          "A service where each convenience store food item is assigned a persona, and scanning a barcode generates conversations between them. Barcode recognition in the front-end was a challenge.",
        whatIDid: [
          "Front-end Development",
          "Back-end Development",
          "Prompt Engineering",
        ],
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
