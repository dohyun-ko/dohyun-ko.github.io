import Project from '@/types/Project';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

interface SideProjectSectionProps {}

const SideProjectSection = ({}: SideProjectSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className={'Area'} id="side-project-section">
      <div className={'Content'}>
        <SectionTitle>Side Projects</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'flex flex-col gap-[30px]'}>
          {(
            t('sideProject.sideProjects', { returnObjects: true }) as Project[]
          ).map((sideProject) => (
            <ProjectCard key={sideProject.name} project={sideProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideProjectSection;
