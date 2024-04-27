import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import SectionTitle from "../components/SectionTitle";

interface EducationSectionProps {}

const attendedLectures = [
  "객체 지향 프로그래밍",
  "자료 구조",
  "알고리즘 개론",
  "컴퓨터 시스템 이론 및 실습",
  "오토마타 이론",
  "운영체제",
  "컴퓨터 그래픽스",
  "컴퓨터 네트워킹",
  "기계학습 및 딥러닝",
];

const EducationSection = ({}: EducationSectionProps) => {
  return (
    <Area id="education-section">
      <Content>
        <SectionTitle>Educations</SectionTitle>

        <Spacer height={"30px"} />

        <Flex gap={"40px"}>
          <Flex
            gap={"20px"}
            width={"280px"}
            style={{
              borderLeft: `5px solid #EB0D00`,
              paddingLeft: "10px",
            }}
          >
            <Flex flexDirection={"column"} gap={"30px"}>
              <Flex flexDirection={"column"}>
                <Text font={Font.Bold} size={"2rem"}>
                  GIST
                </Text>
                <Text size={"1rem"}>전기전자컴퓨터공학부</Text>
                <Text size={"1rem"}>2022. 2 ~ 현재</Text>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"30px"}>
              <Spacer
                height={"18px"}
                style={{
                  flexGrow: 0,
                }}
              />
              <Text size={"1rem"}>TGPA 3.93 / 4.5</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            width={"calc(100% - 335px)"}
            gap={"10px"}
          >
            <Text size={"1.125rem"} weight={"bold"}>
              수강 강좌
            </Text>

            <Flex gap={"0 10px"} wrap={"wrap"}>
              {attendedLectures.map((lecture) => (
                <Text>{lecture}</Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default EducationSection;
