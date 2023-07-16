import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import StylessA from "../components/StylessA";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  return (
    <Area id="title-section">
      <Content>
        <Text as={"h1"} font={Font.Bold} size={"4rem"}>
          개발자 고도현 | Dohyun Ko
        </Text>

        <Text font={Font.Medium} size={"1.5rem"}>
          2년차 프론트엔드 개발자로, React와 코드 재사용을 정말 좋아합니다.
          스타트업에서 일하기에 프론트엔드, 백엔드, 인프라 등 다양한 경험을 쌓고
          있습니다. 게임 개발과 로보틱스에도 관심이 많습니다.
        </Text>

        <Spacer height={"30px"} />

        <Flex>
          <Text size={"1.5rem"}>
            <StylessA href="https://github.com/dohyun-ko">GitHub</StylessA> |{" "}
            <StylessA href="mailto:dohyun682@gmail.com">
              dohyun682@gmail.com
            </StylessA>{" "}
            |{" "}
            <StylessA href="https://www.instagram.com/dohyun682">
              Instagram
            </StylessA>
          </Text>
        </Flex>
      </Content>
    </Area>
  );
};

export default TitleSection;
