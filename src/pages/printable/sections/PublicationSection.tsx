import Publication from '@/types/Publication';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PublicationCard from '../components/PublicationCard';
import SectionTitle from '../components/SectionTitle';

interface PublicationSectionProps {}

const PublicationSection = ({}: PublicationSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Publications</SectionTitle>

      <div className={'h-[5px]'} />

      <div className={'flex flex-col gap-5'}>
        {(
          t('publication.publications', {
            returnObjects: true,
          }) as Publication[]
        ).map((publication) => (
          <PublicationCard key={publication.name} publication={publication} />
        ))}
      </div>
    </>
  );
};

export default PublicationSection;
