import Project from "@/types/Project";
import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

interface SideProjectSectionProps {}

const SideProjectSection = ({}: SideProjectSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="side-project-section">
      <Content>
        <SectionTitle>Side Projects</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {(
            t("sideProject.sideProjects", { returnObjects: true }) as Project[]
          ).map((sideProject) => (
            <ProjectCard key={sideProject.name} project={sideProject} />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default SideProjectSection;
