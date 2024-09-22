import Project from "@/types/Project";
import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

interface AwardSection {}

const AwardSection = ({}: AwardSection) => {
  const { t } = useTranslation();

  return (
    <Area id="side-project-section">
      <Content>
        <SectionTitle>Awards</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {(t("award.list", { returnObjects: true }) as Project[]).map(
            (award) => (
              <ProjectCard key={award.name} project={award} />
            )
          )}
        </Flex>
      </Content>
    </Area>
  );
};

export default AwardSection;
