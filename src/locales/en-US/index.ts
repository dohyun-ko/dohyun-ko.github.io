import current from "./current";
import experience from "./experience";

export const main = {
  title: { developer: "Generalist Frontend Developer", name: "Dohyun Ko" },
  introduction:
    "A front-end developer, I have led web and app development in startups and labs, with extensive experience from early development to user analytics. \n Focused on developing user-centered services utilizing a diverse technology stack. I also run conferences and work to vitalize the local developer ecosystem",
  current,
  education: {
    attendedLectures: [
      "Object-Oriented Programming",
      "Data Structures",
      "Introduction to Algorithms",
      "Computer Systems Theory and Practice",
      "Automata Theory",
      "Operating Systems",
      "Computer Graphics",
      "Computer Networking",
      "Machine Learning and Deep Learning",
      "Computer Security",
      "Computational Models of Cognition",
    ],
    attendedLecture: "Attended Courses",
    major: "Department of Electrical, Electronics, and Computer Engineering",
  },
  publication: {
    publications: [
      {
        name: "O2ARC 3.0: A Platform for Solving and Creating ARC Tasks",
        date: "2024-08",
        isImportant: true,
        url: "https://www.ijcai.org/proceedings/2024/1034",
        publisher: "IJCAI 2024 | Co-first Author",
        description:
          "To address the issue of insufficient human solving data for ARC problems and the poor quality of collected data for AI training, O2ARC 3.0 was developed. This paper introduces the method of improving data collection quality by reorganizing the grid manipulation logic of existing tools and increasing the volume of data collection through gamification.",
      },
    ],
  },
  experience,
  sideProject: {
    sideProjects: [
      {
        name: "React-Atoms: React Component Library",
        isImportant: true,
        url: "https://github.com/dohyun-ko/react-atoms",
        startedAt: "2023-07",
        endedAt: "2023-07",
        description:
          "This is a library of React components that I frequently use personally, published on npm. It is currently being used in this resume and my personal webpage.",
        whatIDid: [
          "Developed the library following the Atomic pattern, bundled with RollUp, and published on npm",
          "Documented components using Storybook",
        ],
      },
      {
        name: "Dutch: OOP Final Project",
        isImportant: true,
        url: "https://github.com/dohyun-ko/dutch-wasm",
        startedAt: "2023-04",
        endedAt: "2023-06",
        description:
          "A Dutch Pay platform written entirely in C++ for both frontend and backend. It utilizes Emscripten to transpile C++ into Web Assembly. [Presentation Slides](https://docs.google.com/presentation/d/1z5m_s2rTHaUCb3rpHDB-zI-1NMvKHpysNDFqbwSA2LE/edit?usp=sharing)",
        whatIDid: [
          "Implemented key React functionalities such as navigator, state, router, function components, and styles in C++",
          "Developed a framework similar to React and Flutter",
          "In browser environment performance tests, it showed approximately 110 times faster performance than React in hash repetitive calculation tasks",
        ],
      },
      {
        name: "Speaking Melona: Convenience Store Food Talks",
        isImportant: false,
        url: "https://melona.chat",
        startedAt: "2024-05",
        endedAt: "2024-05",
        description:
          "This service sets personas for convenience store foods and generates conversations between them when their barcodes are scanned. The challenge was barcode recognition in the frontend.",
        whatIDid: [
          "Frontend Development",
          "Backend Development",
          "Prompt Engineering",
        ],
        techStacks: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      },
    ],
  },
  award: {
    list: [
      {
        name: "2024 KPMG Ideathon: 🥉 3rd Place",
        isImportant: true,
        url: "https://github.com/gist-optima",
        startedAt: "2024-01",
        endedAt: "2024-02",
      },
      {
        name: "Kaggle - Mohs Hardness Dataset: 4th Place",
        isImportant: true,
        url: "https://kaggle.com/competitions/playground-series-s3e25",
        startedAt: "2023-10",
        endedAt: "2023-12",
      },
      {
        name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2nd Place",
        isImportant: false,
        startedAt: "2023-10",
        endedAt: "2023-11",
      },
      {
        name: "2023 Net Challenge: 🥈 Silver Award",
        isImportant: true,
        url: "https://github.com/Net-Challenge-InfoTeam",
        startedAt: "2023-06",
        endedAt: "2023-12",
      },
    ],
  },
};
