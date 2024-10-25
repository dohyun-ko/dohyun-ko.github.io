import Publication from '@/types/Publication';
import { formatYearMonth } from '@/utils/dateFormats';
import font from '@/utils/font';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';
import StylessA from '../../../components/StylessA';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const { name, date, url, description, publisher } = publication;

  return (
    <div className={twMerge('flex flex-col', font(0.75))}>
      <StylessA href={url}>
        <h3 className={twMerge('font-semibold', font(1))}>{name}</h3>
      </StylessA>

      <span className={font(0.75)}>
        {publisher} - {formatYearMonth(new Date(date))}
      </span>

      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );
};

export default PublicationCard;
