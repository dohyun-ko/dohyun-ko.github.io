import Publication from '@/types/Publication';
import { useTranslation } from 'react-i18next';
import PublicationCard from '../components/PublicationCard';
import SectionTitle from '../components/SectionTitle';

interface PublicationSectionProps {}

const PublicationSection = ({}: PublicationSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className={'Area'} id="side-project-section">
      <div className={'Content'}>
        <SectionTitle>Publications</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'flex flex-col gap-[30px]'}>
          {(
            t('publication.publications', {
              returnObjects: true,
            }) as Publication[]
          ).map((publication) => (
            <PublicationCard key={publication.name} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationSection;
