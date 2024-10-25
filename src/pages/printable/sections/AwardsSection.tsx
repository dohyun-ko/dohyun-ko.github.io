import Project from '@/types/Project';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
interface AwardSection {}

const AwardSection = ({}: AwardSection) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Awards</SectionTitle>

      <div className={'h-[10px]'} />

      <div className={'flex flex-col'}>
        {(t('award.list', { returnObjects: true }) as Project[])
          .filter((award) => award.isImportant)
          .map((award) => (
            <ProjectCard key={award.name} project={award} />
          ))}
      </div>
    </>
  );
};

export default AwardSection;
