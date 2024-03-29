import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import StylessA from "../components/StylessA";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  return (
    <Area id="title-section">
      <Content>
        <Text as={"h1"} font={Font.Bold} size={"3.5rem"}>
          개발자 고도현 | Dohyun Ko
        </Text>

        <Text font={Font.Medium} size={"1.5rem"}>
          2년차 프론트엔드 개발자로, 유지보수하기 쉬운 코드를 짜기 위해
          노력합니다. 스타트업에서 일하며 프론트엔드, 백엔드, 인프라, AI 등
          다양한 경험을 쌓았고, 현재 AI 연구실에서 인턴으로 일하고 있습니다.
          '가지 않은 길'을 가는 것을 목표로 언제나 다양한 도전을 합니다.
        </Text>

        <Spacer height={"30px"} />

        <Flex>
          <Text size={"1.5rem"}>
            <StylessA href="mailto:dohyun682@gmail.com">
              dohyun682@gmail.com
            </StylessA>{" "}
            | <StylessA href="https://github.com/dohyun-ko">GitHub</StylessA> |{" "}
            <StylessA href="https://www.instagram.com/dohyun682">
              Instagram
            </StylessA>{" "}
            |{" "}
            <StylessA href="https://www.linkedin.com/in/dohyun-ko-92b885212">
              LinkedIn
            </StylessA>
          </Text>
        </Flex>
      </Content>
    </Area>
  );
};

export default TitleSection;
