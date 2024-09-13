import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Project from "@/types/Project";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import ReactMarkdown from "react-markdown";
import StylessA from "../../../../components/StylessA";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, url, description, whatIDid, techStacks, startedAt, endedAt } =
    project;
  const { font } = useResponsiveFont();
  const isMobile = useIsMobile();

  return (
    <Flex
      flexDirection="column"
      style={{
        fontSize: "0.75rem",
      }}
    >
      <StylessA href={url}>
        <Text font={Font.SemiBold} size={font(1)}>
          {name}
        </Text>
      </StylessA>

      <Text size={font(0.75)}>
        {formatYearMonth(new Date(startedAt))} –{" "}
        {endedAt ? formatYearMonth(new Date(endedAt)) : "Now"}
      </Text>

      <ReactMarkdown>{description}</ReactMarkdown>

      <ul
        style={{
          margin: "0px",
          paddingLeft: "20px",
        }}
      >
        {whatIDid.map((whatIDid) => (
          <li key={whatIDid}>
            <Text size={font(0.75)}>{whatIDid}</Text>
          </li>
        ))}

        {techStacks && techStacks.length > 0 && (
          <li>
            <Text size={font(0.75)}>
              사용 기술: {techStacks.map((techStack) => techStack).join(", ")}
            </Text>
          </li>
        )}
      </ul>
    </Flex>
  );
};

export default ProjectCard;
