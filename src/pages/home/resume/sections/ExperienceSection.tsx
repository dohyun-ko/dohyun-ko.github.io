import Organization from "@/types/Organization";
import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="experience-section">
      <Content>
        <SectionTitle>Experiences</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {(
            t("experience.experiences", {
              returnObjects: true,
            }) as Organization[]
          ).map((experience) => (
            <OrganizationCard key={experience.name} organization={experience} />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default ExperienceSection;
