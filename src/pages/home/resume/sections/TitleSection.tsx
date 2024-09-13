import StylessA from "@/components/StylessA";
import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <Area id="title-section">
      <Content>
        <Text as={"h1"} font={Font.Bold} size={font(3.5)}>
          {t("title.developer")}
          <br />
          {t("title.name")}
        </Text>

        <Text font={Font.Medium} size={font(1.5)}>
          {t("introduction")}
        </Text>

        <Spacer height={"30px"} />

        <Flex>
          <Text size={font(1.5)}>
            <StylessA href="mailto:dohyun682@gmail.com" hasIcon={false}>
              dohyun682@gmail.com
            </StylessA>{" "}
            |{" "}
            <StylessA href="https://github.com/dohyun-ko" hasIcon={false}>
              GitHub
            </StylessA>{" "}
            |{" "}
            <StylessA
              href="https://www.instagram.com/dohyun682"
              hasIcon={false}
            >
              Instagram
            </StylessA>{" "}
            |{" "}
            <StylessA
              href="https://www.linkedin.com/in/dohyun-ko-92b885212"
              hasIcon={false}
            >
              LinkedIn
            </StylessA>
          </Text>
        </Flex>
      </Content>
    </Area>
  );
};

export default TitleSection;
