import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const data = {
  sideProjects: [
    {
      name: "2024 KPMG Ideathon: 🥉 3등",
      url: "https://github.com/gist-optima",
      startedAt: new Date("2024-1"),
      endedAt: new Date("2024-2"),
      description:
        "[삼정 KPMG 아이디어톤](https://kpmgkr.notion.site/kpmgkr/2024-KPMG-1fcd8a808f3d4f36a5ae8ad6e9bc413e)에 참여해 문서 작업에 VCS를 도입하고 LLM을 이용한 streamlined-ai-search를 구현한 플랫폼 Docuflow를 개발했습니다.",
      whatIDid: ["프론트엔드 개발"],
      techStacks: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Kaggle - Regression with a Mohs Hardness Dataset: 4등",
      url: "https://www.kaggle.com/competitions/playground-series-s3e25",
      startedAt: new Date("2023-10"),
      endedAt: new Date("2023-12"),
      description:
        "Kaggle의 광물 모스 경도 예측 대회에서 4등을 차지했습니다. 점수 공식이 MedAE인 점을 이용해 독특한 후처리 기법을 사용했습니다.",
      whatIDid: ["ML 모델 개발"],
      techStacks: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      name: "2023 Creative Space G A.I. & IoT Makerthon: 🥈 2등",
      startedAt: new Date("2023-10"),
      endedAt: new Date("2023-11"),
      description:
        "메이커톤에서 GPT-4 API와 라즈베리파이를 결합해 일상 대화에서 의미를 추론하고 스위치, 스피커 등 IoT 기기를 조작하는 AI 비서를 개발했습니다.",
      whatIDid: ["OpenAI API 연동", "기획 및 발표자료 준비"],
      techStacks: ["Python"],
    },
    {
      name: "2023 Net Challenge: 🥈 은상",
      url: "https://github.com/Net-Challenge-InfoTeam",
      startedAt: new Date("2023-06"),
      endedAt: new Date("2023-12"),
      description:
        "2023 Net Chanllenge에 참여했습니다. CCTV 데이터를 AI로 분석해 실시간으로 위협을 감지하고, 위협이 감지되면 주변 유저들에게 알림을 보내는 서비스를 개발했습니다.",
      whatIDid: [
        "React와 PWA를 사용한 앱 개발",
        "Mapbox를 사용해 실시간 위협 위치 표시",
      ],
      techStacks: ["React", "TypeScript", "Mapbox", "PWA"],
    },
    {
      name: "React-Atoms: React Component Library",
      url: "https://github.com/dohyun-ko/react-atoms",
      startedAt: new Date("2023-07"),
      endedAt: new Date("2023-07"),
      description:
        "개인적으로 자주 사용하는 React 컴포넌트를 모아 npm에 배포한 라이브러리입니다.",
      whatIDid: [
        "React 컴포넌트 개발",
        "Storybook을 사용한 컴포넌트 문서화",
        "npm 배포",
      ],
      techStacks: ["React", "TypeScript", "RollUp", "Storybook", "npm"],
    },
    {
      name: "Dutch: OOP Final Project",
      url: "https://github.com/dohyun-ko/dutch-wasm",
      startedAt: new Date("2023-04"),
      endedAt: new Date("2023-06"),
      description:
        "프론트엔드와 백엔드 모두 C++로만 작성된 더치페이 플랫폼입니다. GIST 객체 지향 프로그래밍 수업 기말 과제로 제출했습니다.",
      whatIDid: [
        "C++과 웹 어셈블리를 사용한 프론트엔드 UI 개발",
        "State, Navigator 등 프론트엔드 로직 개발",
      ],
      techStacks: ["C++", "WebAssembly", "Emscripten"],
    },
  ],
};

interface SideProjectSectionProps {}

const SideProjectSection = ({}: SideProjectSectionProps) => {
  return (
    <Area id="side-project-section">
      <Content>
        <SectionTitle>Side Projects</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {data.sideProjects.map((sideProject) => (
            <ProjectCard key={sideProject.name} project={sideProject} />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default SideProjectSection;
