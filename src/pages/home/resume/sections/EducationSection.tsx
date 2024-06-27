import Font from "@/types/Font";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  const { t } = useTranslation();

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
                <Text size={"1rem"}>{t("education.major")}</Text>
                <Text size={"1rem"}>2022. 2 ~ </Text>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"30px"}>
              <Spacer
                height={"18px"}
                style={{
                  flexGrow: 0,
                }}
              />
              <Text size={"1rem"}>TGPA 4.04 / 4.5</Text>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"column"}
            width={"calc(100% - 335px)"}
            gap={"10px"}
          >
            <Text size={"1.125rem"} weight={"bold"}>
              {t("education.attendedLecture")}
            </Text>

            <Flex gap={"0 10px"} wrap={"wrap"}>
              {(
                t("education.attendedLectures", {
                  returnObjects: true,
                }) as string[]
              ).map((lecture) => (
                <Text key={lecture}>{lecture}</Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default EducationSection;
