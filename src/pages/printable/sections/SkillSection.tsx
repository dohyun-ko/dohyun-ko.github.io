import Font from "@/types/Font";
import { Flex, Grid, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";

const mapFont = (level: number): Font => {
  switch (level) {
    case 1:
      return Font.Thin;
    case 2:
      return Font.Light;
    case 3:
      return Font.Medium;
    case 4:
      return Font.Bold;
    case 5:
      return Font.Black;
    default:
      return Font.Regular;
  }
};

interface SkillSectionProps {}

const skills = [
  {
    name: "React",
    level: 5,
  },
  {
    name: "TypeScript",
    level: 4,
  },
  {
    name: "Next.js",
    level: 3,
  },

  {
    name: "Python",
    level: 3,
  },
  {
    name: "NestJS",
    level: 2,
  },
  {
    name: "FastAPI",
    level: 2,
  },
  {
    name: "Flutter",
    level: 2,
  },
  {
    name: "C++",
    level: 2,
  },
];

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Flex>
        <SectionTitle>보유기술</SectionTitle>
      </Flex>

      <Spacer height={"10px"} />

      <Grid gridTemplateColumns="70px 1fr" gap={"0px"}>
        <Text>전문:</Text>

        <Text font={Font.SourceCodePro} className={"source-code-pro"}>
          React&nbsp; TypeScript&nbsp; Next.js
        </Text>

        <Text>활용:</Text>

        <Text font={Font.SourceCodePro}>
          Python&nbsp; NestJS&nbsp; FastAPI&nbsp; Flutter
        </Text>
      </Grid>
    </>
  );
};

export default SkillSection;
