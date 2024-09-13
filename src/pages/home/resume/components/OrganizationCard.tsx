import StylessA from "@/components/StylessA";
import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Organization from "@/types/Organization";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import Card from "./Card";
import ProjectCard from "./ProjectCard";

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt } = organization;
  const { font } = useResponsiveFont();

  return (
    <Card>
      <Flex
        flexDirection="column"
        style={{
          borderLeft: `5px solid ${color || "gray"}`,
          paddingLeft: "10px",
        }}
      >
        <StylessA href={url}>
          <Text font={Font.Bold} size={font(2)}>
            {name}
          </Text>
        </StylessA>

        <Text>{job}</Text>

        <Text>
          {formatYearMonth(new Date(startedAt))} –{" "}
          {endedAt ? formatYearMonth(new Date(endedAt)) : "Now"}
        </Text>
      </Flex>

      <Flex flexDirection="column" gap={"20px"}>
        {organization.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Flex>
    </Card>
  );
};

export default OrganizationCard;
