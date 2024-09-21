import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Project from "@/types/Project";
import { formatYearMonth } from "@/utils/dateFormats";
import formatUrl from "@/utils/formatUrl";
import { Flex, Spacer, Text } from "@dohyun-ko/react-atoms";
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

        {url && <Text size={font(0.75)}>{formatUrl(url)}</Text>}
      </StylessA>

      <Text size={font(0.75)}>
        {formatYearMonth(new Date(startedAt))} –{" "}
        {endedAt ? formatYearMonth(new Date(endedAt)) : "Now"}
      </Text>

      {description && (
        <>
          <Spacer height={"5px"} />
          <ReactMarkdown>{description}</ReactMarkdown>
        </>
      )}

      {whatIDid && whatIDid.length > 0 && (
        <>
          <Spacer height={"5px"} />

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
          </ul>
        </>
      )}
    </Flex>
  );
};

export default ProjectCard;
