import Organization from "@/types/Organization";
import { Area, Content, Flex, Spacer } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import OrganizationCard from "../components/OrganizationCard";
import SectionTitle from "../components/SectionTitle";

interface CurrentPageProps {}

const CurrentSection = ({}: CurrentPageProps) => {
  const { t } = useTranslation();

  return (
    <Area id="current-section">
      <Content>
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
      </Content>
    </Area>
  );
};

export default CurrentSection;
