import Font from "@/types/Font";
import { Area, Content, Grid, Spacer, Text } from "@dohyun-ko/react-atoms";
import SectionTitle from "../components/SectionTitle";

const data = {
  skills: [
    {
      name: "React",
      level: 5,
    },
    {
      name: "TypeScript",
      level: 4,
    },
    {
      name: "JavaScript",
      level: 4,
    },
    {
      name: "HTML/CSS",
      level: 3,
    },
    {
      name: "Python",
      level: 3,
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
  ],
};

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

const SkillSection = ({}: SkillSectionProps) => {
  return (
    <Area id="skill-section">
      <Content>
        <SectionTitle>Skills</SectionTitle>

        <Spacer height={"30px"} />

        <Grid gridTemplateColumns="1fr 1fr 1fr" gap={"10px"}>
          {data.skills.map((skill) => (
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
