import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Publication from "@/types/Publication";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import ReactMarkdown from "react-markdown";
import StylessA from "../../../../components/StylessA";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const { name, date, url, description, publisher } = publication;
  const { font } = useResponsiveFont();

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
        {publisher} - {formatYearMonth(new Date(date))}
      </Text>

      <ReactMarkdown>{description}</ReactMarkdown>
    </Flex>
  );
};

export default PublicationCard;
