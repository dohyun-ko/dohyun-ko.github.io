import StylessA from '@/components/StylessA';
import useIsMobile from '@/hooks/useIsMobile';
import useResponsiveFont from '@/hooks/useResponsiveFont';
import Publication from '@/types/Publication';
import { formatYearMonth } from '@/utils/dateFormats';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const { name, date, url, description, publisher } = publication;
  const { font } = useResponsiveFont();
  const isMobile = useIsMobile();

  return (
    <div className={'flex flex-col'}>
      <StylessA href={url}>
        <h3 className={twMerge('font-semibold', `text-[${font(1.5)}]`)}>
          {name}
        </h3>
      </StylessA>

      <span>
        {publisher} - {formatYearMonth(new Date(date))}
      </span>

      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
};

export default PublicationCard;
