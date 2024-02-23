import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

const data = {
  experiences: [
    {
      name: "시고르자브종",
      color: "#FEAA17",
      url: "https://introduce.sigor.company/",
      job: "웹 개발자",
      startedAt: new Date("2022-02-23"),
      endedAt: new Date("2023-12-22"),
      projects: [
        {
          name: "도글리 프론트엔드",
          url: "https://doggly.co.kr/",
          startedAt: new Date("2022-08"),
          endedAt: new Date("2023-03"),
          description:
            "강아지 의류 쇼핑몰인 도글리의 프론트엔드를 개발했습니다.",
          whatIDid: ["도글리 프론트엔드 개발"],
          techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
        },
        {
          name: "러시아워 프론트엔드",
          url: "https://introduce.rushhourkorea.com/",
          startedAt: new Date("2023-05"),
          endedAt: new Date("2023-07"),
          description:
            "지하철 빈 자리를 알려주는 서비스인 러시아워의 프론트엔드와 웹뷰 앱을 개발했습니다.",
          whatIDid: [
            "러시아워 웹뷰용 프론트엔드 개발",
            "러시아워 android & ios 웹뷰 앱 개발",
          ],
          techStacks: ["React", "TypeScript", "Jetpack Compose", "SwiftUI"],
        },
        {
          name: "러시아워 앱",
          url: "https://introduce.rushhourkorea.com/",
          startedAt: new Date("2023-07"),
          endedAt: new Date("2023-10"),

          description: "러시아워의 플러터 버전 개발에 참여했습니다.",
          whatIDid: ["러시아워 플러터 앱 개발", "앱 유저 로그 기록"],
          techStacks: ["Flutter", "Firebase"],
        },
        {
          name: "러시아워 AI",
          startedAt: new Date("2023-09"),
          endedAt: new Date("2023-12"),

          description: "러시아워 AI 개발에 참여했습니다.",
          whatIDid: [
            "지하철 혼잡도 예측 AI 개발",
            "지하철 빈자리 예측 AI 개발",
          ],
          techStacks: ["Scikit-learn", "Pandas"],
        },
        {
          name: "기타",
          startedAt: new Date("2022-02"),
          endedAt: new Date("2023-12"),
          description:
            "스타트업의 개발자로서 다양한 개발 업무를 수행하고 있습니다.",
          whatIDid: [
            "랜딩 페이지 개발",
            "관리자 페이지 개발",
            "간단한 백엔드 API 개발",
            "유저 로그 분석 및 통계",
            "업무 자동화",
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
