import Font from "@/types/Font";
import Organization from "@/types/Organization";
import { Area, Content, Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import { useTranslation } from "react-i18next";
import OrganizationCard from "../components/OrganizationCard";

interface CurrentPageProps {}

const CurrentSection = ({}: CurrentPageProps) => {
  const { t } = useTranslation();

  return (
    <Area id="current-section">
      <Content>
        <Text as="h1" font={Font.Bold} size={"2.5rem"}>
          Currently working in
        </Text>

        <Spacer height={"50px"} />

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
