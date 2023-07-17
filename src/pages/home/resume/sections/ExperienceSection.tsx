import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

const data = {
  experiences: [
    {
      name: "GDSC-GIST",
      color: "#008cff",
      url: "https://gdsc.community.dev/gwangju-institute-of-science-and-technology/",
      job: "2nd Core, Tech Team",
      startedAt: new Date("2022-05"),
      endedAt: new Date("2023-07"),
      projects: [
        {
          name: "스터디",
          startedAt: new Date("2022-11"),
          endedAt: new Date("2023-05"),
          description: "GDSC에서 진행한 내부 개발 스터디입니다.",
          whatIDid: ["React 스터디 리드", "JS Pattern 스터디 참여"],
        },
        {
          name: "GIST Mini Solution Challenge",
          url: "https://gdsc.community.dev/events/details/developer-student-clubs-gwangju-institute-of-science-and-technology-presents-gist-mini-solution-challenge/",
          startedAt: new Date("2023-04"),
          endedAt: new Date("2023-04"),
          description:
            "GDSC-GIST가 직접 주최한 GIST 내 해커톤입니다. 총 60명이 참가하였습니다.",
          whatIDid: ["해커톤 준비 & 정산"],
        },
      ],
    },
  ],
};

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <Area id="experience-section">
      <Content>
        <SectionTitle>Experiences</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {data.experiences.map((experience) => (
            <OrganizationCard key={experience.name} organization={experience} />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default ExperienceSection;
