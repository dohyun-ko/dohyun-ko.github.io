import Font from "@/types/Font";
import { Grid, Spacer, Text } from "@dohyun-ko/react-atoms";
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
  {
    name: "Kotlin",
    level: 1,
  },
  {
    name: "Docker",
    level: 1,
  },
  {
    name: "Rust",
    level: 1,
  },
  {
    name: "Go",
    level: 1,
  },
];

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>보유기술</SectionTitle>

      <Spacer height={"10px"} />

      <Grid gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" gap={"0px"}>
        {skills.map((skill) => (
          <Text key={skill.name} font={mapFont(skill.level)}>
            {skill.name}
          </Text>
        ))}
      </Grid>
    </>
  );
};

export default SkillSection;
