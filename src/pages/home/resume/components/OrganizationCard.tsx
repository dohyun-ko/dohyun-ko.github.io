import Font from "@/types/Font";
import Organization from "@/types/Organization";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import ProjectCard from "./ProjectCard";
import StylessA from "./StylessA";

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt } = organization;

  return (
    <Flex gap={"20px"} alignItems="start">
      <Flex
        flexDirection="column"
        width={"280px"}
        style={{
          borderLeft: `5px solid ${color || "gray"}`,
          paddingLeft: "10px",
        }}
      >
        <StylessA href={url}>
          <Text font={Font.Bold} size={"2rem"}>
            {name}
          </Text>
        </StylessA>

        <Text>{job}</Text>

        <Text>
          {formatYearMonth(startedAt)} ~{" "}
          {endedAt ? formatYearMonth(endedAt) : "현재"}
        </Text>
      </Flex>

      <div
        style={{
          height: "100%",
          width: "1px",
          backgroundColor: "black",
        }}
      />

      <Flex flexDirection="column" gap={"20px"}>
        {organization.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};

export default OrganizationCard;
