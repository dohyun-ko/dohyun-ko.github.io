import Organization from "@/types/Organization";
import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
  const { t } = useTranslation();

  const organizations = [
    ...(
      t("experience.experiences", {
        returnObjects: true,
      }) as Organization[]
    ).reverse(),
    ...(t("current.organizations", {
      returnObjects: true,
    }) as Organization[]),
  ].filter((experience) => experience.isImportant);

  return (
    <>
      <SectionTitle>경력</SectionTitle>

      <Spacer height={"10px"} />

      <Flex flexDirection={"column"} gap={"20px"}>
        {organizations.map((experience) => (
          <OrganizationCard key={experience.name} organization={experience} />
        ))}
      </Flex>
    </>
  );
};

export default ExperienceSection;
