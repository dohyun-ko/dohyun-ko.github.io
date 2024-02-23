import Font from "@/types/Font";
import Project from "@/types/Project";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
import ReactMarkdown from "react-markdown";
import StylessA from "./StylessA";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, url, description, whatIDid, techStacks, startedAt, endedAt } =
    project;

  return (
    <Flex flexDirection="column">
      <StylessA href={url}>
        <Text font={Font.SemiBold} size={"1.75rem"}>
          {name}
        </Text>
      </StylessA>

      <Text>
        {formatYearMonth(startedAt)} ~{" "}
        {endedAt ? formatYearMonth(endedAt) : "현재"}
      </Text>

      <Spacer height={"10px"} />

      <Text font={Font.Medium} size={"1.25rem"}>
        Description
      </Text>
      <ReactMarkdown>{description}</ReactMarkdown>

      <Spacer height={"10px"} />

      <Text font={Font.Medium} size={"1.25rem"}>
        What I did
      </Text>
      <ul
        style={{
          margin: "0px",
        }}
      >
        {whatIDid.map((whatIDid) => (
          <li key={whatIDid}>
            <Text>{whatIDid}</Text>
          </li>
        ))}
      </ul>

      <Spacer height={"10px"} />

      {techStacks && techStacks.length > 0 && (
        <>
          <Text font={Font.Medium} size={"1.25rem"}>
            What I used
          </Text>

          <ul
            style={{
              margin: "0px",
            }}
          >
            {techStacks.map((techStack) => (
              <li key={techStack}>
                <Text>{techStack}</Text>
              </li>
            ))}
          </ul>
        </>
      )}
    </Flex>
  );
};

export default ProjectCard;
