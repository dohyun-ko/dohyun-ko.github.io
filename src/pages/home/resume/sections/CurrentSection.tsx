import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import OrganizationCard from "../components/OrganizationCard";

interface CurrentPageProps {}

const data = {
  organizations: [
    {
      name: "시고르자브종",
      color: "#FEAA17",
      url: "https://introduce.sigor.company/",
      job: "웹 개발자",
      startedAt: new Date("2022-02-23"),
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

          description: "러시아워의 플루터 버전 개발에 참여하고 있습니다.",
          whatIDid: ["러시아워 플루터 앱 개발"],
          techStacks: ["Flutter"],
        },
        {
          name: "기타",
          startedAt: new Date("2022-02"),
          description:
            "스타트업에 개발자로서 다양한 개발 업무를 수행하고 있습니다.",
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
            "FastAPI",
            "Pandas",
            "mono-repo",
          ],
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
          techStacks: ["React", "TypeScript"],
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
          description: "Wing에서 개발 상황 교류, 세션을 진행합니다.",
          whatIDid: ["모노레포에 도입기 세션 진행"],
          techStacks: ["mono-repo"],
        },
      ],
    },
    {
      name: "GPERI",
      color: "#4c568f",
      url: "https://sites.google.com/view/gperigist",
      job: "연구부원",
      startedAt: new Date("2023-07"),
      projects: [
        {
          name: "C언어 교육 진행",
          startedAt: new Date("2023-07"),
          description: "부원들에게 C언어 교육을 진행합니다.",
          whatIDid: ["C언어 교육 진행"],
          techStacks: ["C"],
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
