import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import React from "react";
import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <Area id="education-section">
      <Content>
        <SectionTitle>Educations</SectionTitle>

        <Spacer height={"30px"} />

        <Card>
          <Flex
            gap={"20px"}
            style={{
              borderLeft: `5px solid #EB0D00`,
              paddingLeft: "10px",
            }}
          >
            <Flex flexDirection={"column"} gap={"30px"}>
              <Flex flexDirection={"column"}>
                <Text font={Font.Bold} size={font(2)}>
                  GIST
                </Text>
                <Text size={"1rem"}>{t("education.major")}</Text>
                <Text size={"1rem"}>2022. 2 – </Text>
              </Flex>
            </Flex>

            <Text size={"1rem"}>TGPA 4.04 / 4.5</Text>
          </Flex>

          <Flex flexDirection={"column"} width={"100%"} gap={"10px"}>
            <Text size={"1.125rem"} weight={"bold"}>
              {t("education.attendedLecture")}
            </Text>

            <Flex gap={"0 10px"} wrap={"wrap"}>
              <Text>
                {(
                  t("education.attendedLectures", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index, array) => (
                  <React.Fragment key={item}>
                    {index < array.length - 1
                      ? [item, <span style={{ padding: "0 6px" }}>|</span>]
                      : item}
                  </React.Fragment>
                ))}
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Content>
    </Area>
  );
};

export default EducationSection;
