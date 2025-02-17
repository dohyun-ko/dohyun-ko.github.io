import Font from "@/types/Font";
import { Area, Content, Grid, Spacer, Text } from "@dohyun-ko/react-atoms";
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
    name: "Assembly",
    level: 1,
  },
]

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="skill-section">
      <Content>
        <SectionTitle>Skills</SectionTitle>

        <Spacer height={"30px"} />

        <Grid gridTemplateColumns="1fr 1fr 1fr" gap={"10px"}>
          {skills.map((skill) => (
            <Text key={skill.name} font={mapFont(skill.level)}>
              {skill.name}
            </Text>
          ))}
        </Grid>
      </Content>
    </Area>
  );
};

export default SkillSection;
