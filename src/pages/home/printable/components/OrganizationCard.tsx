import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Organization from "@/types/Organization";
import { formatYearMonth } from "@/utils/dateFormats";
import formatUrl from "@/utils/formatUrl";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import StylessA from "../../../../components/StylessA";
import Card from "./Card";
import ProjectCard from "./ProjectCard";

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt, projects } = organization;
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
          <Flex>
            <Text font={Font.Bold} size={font(1)}>
              {name}
            </Text>

            {url && <Text size={font(0.75)}>{formatUrl(url)}</Text>}
          </Flex>
        </StylessA>

        <Text size={font(0.75)}>{job}</Text>

        <Text size={font(0.75)}>
          {formatYearMonth(new Date(startedAt))} –{" "}
          {endedAt ? formatYearMonth(new Date(endedAt)) : "Now"}
        </Text>
      </Flex>

      <Flex flexDirection="column" gap={"20px"}>
        {projects
          .filter((project) => project.isImportant)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </Flex>
    </Card>
  );
};

export default OrganizationCard;
