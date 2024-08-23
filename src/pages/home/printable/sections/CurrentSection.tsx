import Organization from "@/types/Organization";
import { Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

interface CurrentPageProps {}

const CurrentSection = ({}: CurrentPageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Currently working in</SectionTitle>

      <Spacer height={"30px"} />

      <Flex flexDirection="column" gap={"35px"}>
        {(
          t("current", { returnObjects: true }) as {
            organizations: Organization[];
          }
        ).organizations.map((organization) => (
          <OrganizationCard
            key={organization.name}
            organization={organization}
          />
        ))}
      </Flex>
    </>
  );
};

export default CurrentSection;
