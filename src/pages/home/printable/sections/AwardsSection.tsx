import Project from "@/types/Project";
import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

interface AwardSection {}

const AwardSection = ({}: AwardSection) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Awards</SectionTitle>

      <Spacer height={"10px"} />

      <Flex flexDirection={"column"} gap={"0px"}>
        {(t("award.list", { returnObjects: true }) as Project[])
          .filter((award) => award.isImportant)
          .map((award) => (
            <ProjectCard key={award.name} project={award} />
          ))}
      </Flex>
    </>
  );
};

export default AwardSection;
