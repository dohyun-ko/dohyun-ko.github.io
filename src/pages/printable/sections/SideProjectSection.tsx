import Project from "@/types/Project";
import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

interface SideProjectSectionProps {}

const SideProjectSection = ({}: SideProjectSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Side Projects</SectionTitle>

      <Spacer height={"10px"} />

      <Flex flexDirection={"column"} gap={"15px"}>
        {(t("sideProject.sideProjects", { returnObjects: true }) as Project[])
          .filter((sideProject) => sideProject.isImportant)
          .map((sideProject) => (
            <ProjectCard key={sideProject.name} project={sideProject} />
          ))}
      </Flex>
    </>
  );
};

export default SideProjectSection;
