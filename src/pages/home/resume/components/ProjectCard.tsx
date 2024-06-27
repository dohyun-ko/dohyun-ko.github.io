import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveFont from "@/hooks/useResponsiveFont";
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
  const { font } = useResponsiveFont();
  const isMobile = useIsMobile();

  return (
    <Flex flexDirection="column">
      <StylessA href={url}>
        <Text font={Font.SemiBold} size={font(1.75)}>
          {name}
        </Text>
      </StylessA>

      <Text>
        {formatYearMonth(new Date(startedAt))} ~{" "}
        {endedAt ? formatYearMonth(new Date(endedAt)) : "Now"}
      </Text>

      <Spacer height={"10px"} />

      <Text font={Font.Medium} size={font(1.25)}>
        Description
      </Text>
      <ReactMarkdown>{description}</ReactMarkdown>

      {isMobile || <Spacer height={"10px"} />}

      <Text font={Font.Medium} size={font(1.25)}>
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
          <Text font={Font.Medium} size={font(1.25)}>
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
