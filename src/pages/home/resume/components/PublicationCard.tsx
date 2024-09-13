import StylessA from "@/components/StylessA";
import useIsMobile from "@/hooks/useIsMobile";
import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import Publication from "@/types/Publication";
import { formatYearMonth } from "@/utils/dateFormats";
import { Flex, Text } from "@dohyun-ko/react-atoms";
import ReactMarkdown from "react-markdown";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const { name, date, url, description, publisher } = publication;
  const { font } = useResponsiveFont();
  const isMobile = useIsMobile();

  return (
    <Flex flexDirection="column">
      <StylessA href={url}>
        <Text font={Font.SemiBold} size={font(1.5)}>
          {name}
        </Text>
      </StylessA>

      <Text>
        {publisher} - {formatYearMonth(new Date(date))}
      </Text>

      <ReactMarkdown>{description}</ReactMarkdown>
    </Flex>
  );
};

export default PublicationCard;
