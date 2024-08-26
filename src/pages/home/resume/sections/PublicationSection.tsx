import Publication from "@/types/Publication";
import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import PublicationCard from "../components/PublicationCard";
import SectionTitle from "../components/SectionTitle";

interface PublicationSectionProps {}

const PublicationSection = ({}: PublicationSectionProps) => {
  const { t } = useTranslation();

  return (
    <Area id="side-project-section">
      <Content>
        <SectionTitle>Publications</SectionTitle>

        <Spacer height={"30px"} />

        <Flex flexDirection={"column"} gap={"30px"}>
          {(
            t("publication.publications", {
              returnObjects: true,
            }) as Publication[]
          ).map((publication) => (
            <PublicationCard key={publication.name} publication={publication} />
          ))}
        </Flex>
      </Content>
    </Area>
  );
};

export default PublicationSection;
