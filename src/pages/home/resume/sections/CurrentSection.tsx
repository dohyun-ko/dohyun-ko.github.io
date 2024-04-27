import Font from "@/types/Font";
import Organization from "@/types/Organization";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import OrganizationCard from "../components/OrganizationCard";

interface CurrentPageProps {}

const data: {
  organizations: Organization[];
} = {
  organizations: [
    {
      name: "GIST Data Science Lab",
      color: "#b509ac",
      url: "https://sundong.kim/members/",
      job: "인턴",
      startedAt: new Date("2024-01-02"),
      projects: [
        {
          name: "O2ARC 3.0",
          url: "https://o2arc.com/",
          startedAt: new Date("2024-01"),
          description:
            "[ARC](https://github.com/fchollet/ARC) 문제의 사람 풀이 데이터 수집을 위한 툴 O2ARC의 3.0 버전을 개발했고 유지보수 중입니다. 개발과 데이터 분석 내용으로 demo 논문을 작성했고 IJCAI 2024에 투고했습니다.",
          whatIDid: ["프론트엔드 개발", "UX 디자인"],
          techStacks: ["React", "TypeScript", "Tailwind CSS"],
        },
        // {
        //   name: "ARCLE",
        //   url: "https://github.com/ConfeitoHS/arcle",
        //   startedAt: new Date("2024-03"),
        //   description:
        //     "ARC를 위한 강화학습 환경인 ARCLE의 추가 기능을 개발하고 있습니다.",
        //   whatIDid: ["프론트엔드 개발", "UX 디자인"],
        //   techStacks: ["React", "TypeScript", "Tailwind CSS"],
        // },
        {
          name: "Introductory RL Study",
          url: "https://www.coursera.org/specializations/reinforcement-learning",
          startedAt: new Date("2024-01"),
          endedAt: new Date("2024-02"),
          description:
            "Coursera의 강화학습 스페셜리제이션을 통해 강화학습 기초를 공부했습니다.",
          whatIDid: ["강화학습 기초 공부(~Q-Learning)"],
        },
      ],
    },
    {
      name: "GIST 학생회 정보국",
      color: "#EB6263",
      url: "https://introduce.gistory.me/",
      job: "정보국원",
      startedAt: new Date("2022-09"),
      projects: [
        {
          name: "AMS 프론트엔드",
          startedAt: new Date("2022-11"),
          endedAt: new Date("2023-02"),
          description:
            "GIST 동아리 신청 시스템인 AMS의 프론트엔드를 개발했습니다.",
          whatIDid: ["프론트엔드 개발", "UI 디자인"],
          techStacks: ["React", "TypeScript", "mono-repo"],
        },
        {
          name: "Ziggle 프론트엔드",
          url: "https://github.com/gsainfoteam/ziggle-fe",
          startedAt: new Date("2023-04"),
          description:
            "GIST 공지 통합 시스템인 Ziggle의 프론트엔드를 개발하고 있습니다.",
          whatIDid: ["프론트엔드 개발"],
          techStacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        },
        {
          name: "IdP 프론트엔드",
          url: "https://idp.gistory.me",
          startedAt: new Date("2024-03"),
          description:
            "GIST에서 사용하는 OAuth2.0 인증 시스템 IdP의 프론트엔드를 유지보수하고 있습니다.",
          whatIDid: ["프론트엔드 유지보수"],
          techStacks: ["React", "TypeScript", "Tailwind CSS"],
        },
      ],
    },
    {
      name: "Wing: GIST 전산 동아리",
      color: "rgb(151, 123, 242)",
      url: "https://wing-homepage.vercel.app/",
      job: "시니어 부원",
      startedAt: new Date("2023-03"),
      projects: [
        {
          name: "Wing Session",
          startedAt: new Date("2023-03"),
          description: "Wing에서 개발 상황 교류 및 세션을 진행합니다.",
          whatIDid: [
            "모노레포에 도입기 세션 진행",
            "React.cpp 세션 진행",
            "UI 라이브러리처럼 코드 짜기: Compound Components 세션 진행",
          ],
        },
      ],
    },
  ],
};

const CurrentSection = ({}: CurrentPageProps) => {
  return (
    <Area id="current-section">
      <Content>
        <Text as="h1" font={Font.Bold} size={"2.5rem"}>
          Currently working in
        </Text>

        <Spacer height={"50px"} />

        <Flex flexDirection="column" gap={"35px"}>
          {data.organizations.map((organization) => (
            <OrganizationCard
              key={organization.name}
              organization={organization}
            />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default CurrentSection;
