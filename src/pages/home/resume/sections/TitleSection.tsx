import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import StylessA from "../components/StylessA";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="title-section">
      <Content>
        <Text as={"h1"} font={Font.Bold} size={"3.5rem"}>
          {t("title")}
        </Text>

        <Text font={Font.Medium} size={"1.5rem"}>
          {t("introduction")}
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
