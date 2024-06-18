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

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="skill-section">
      <Content>
        <SectionTitle>Skills</SectionTitle>

        <Spacer height={"30px"} />

        <Grid gridTemplateColumns="1fr 1fr 1fr" gap={"10px"}>
          {(
            t("skill.skills", { returnObjects: true }) as {
              name: string;
              level: number;
            }[]
          ).map((skill) => (
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
