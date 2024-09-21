import Publication from "@/types/Publication";
import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import PublicationCard from "../components/PublicationCard";
import SectionTitle from "../components/SectionTitle";

interface PublicationSectionProps {}

const PublicationSection = ({}: PublicationSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Publications</SectionTitle>

      <Spacer height={"5px"} />

      <Flex flexDirection={"column"} gap={"20px"}>
        {(
          t("publication.publications", {
            returnObjects: true,
          }) as Publication[]
        ).map((publication) => (
          <PublicationCard key={publication.name} publication={publication} />
        ))}
      </Flex>
    </>
  );
};

export default PublicationSection;
