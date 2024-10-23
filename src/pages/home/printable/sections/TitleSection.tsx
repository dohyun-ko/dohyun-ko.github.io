import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import StylessA from "../../../../components/StylessA";

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <>
      <Text as={"h1"} font={Font.Bold} size={font(2)}>
        {t("title.name")}
      </Text>

      <Text font={Font.Medium} size={font(0.75)}>
        {t("introduction")}
      </Text>

      <Spacer height={"10px"} />

      <Flex>
        <Text size={font(0.875)}>
          <StylessA href="mailto:dohyun682@gmail.com" hasIcon={false}>
            dohyun682@gmail.com
          </StylessA>{" "}
          | 010-3351-0168 |{" "}
          <StylessA href="https://github.com/dohyun-ko" hasIcon={false}>
            github.com/dohyun-ko
          </StylessA>{" "}
          |{" "}
          <StylessA
            href="https://www.linkedin.com/in/dohyun-ko-92b885212"
            hasIcon={false}
          >
            linkedin.com/in/dohyun-ko-92b885212
          </StylessA>
          <br />
          Detailed Resume:{" "}
          <StylessA href="https://dohyun.is-a.dev/resume" hasIcon={false}>
            dohyun.is-a.dev
          </StylessA>
        </Text>
      </Flex>
    </>
  );
};

export default TitleSection;
