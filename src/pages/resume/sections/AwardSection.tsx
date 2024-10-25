import Project from '@/types/Project';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

interface AwardSection {}

const AwardSection = ({}: AwardSection) => {
  const { t } = useTranslation();

  return (
    <section className={'Area'} id="side-project-section">
      <div className={'Content'}>
        <SectionTitle>Awards</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'flex flex-col gap-[30px]'}>
          {(t('award.list', { returnObjects: true }) as Project[]).map(
            (award) => (
              <ProjectCard key={award.name} project={award} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
