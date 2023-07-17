import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import SectionTitle from "../components/SectionTitle";

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  return (
    <Area id="education-section">
      <Content>
        <SectionTitle>Educations</SectionTitle>

        <Spacer height={"30px"} />

        <Flex gap={"20px"}>
          <Flex
            flexDirection={"column"}
            gap={"30px"}
            style={{
              borderLeft: `5px solid #EB0D00`,
              paddingLeft: "10px",
            }}
          >
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
            <Text size={"1rem"}>TGPA 3.9 / 4.5</Text>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default EducationSection;
