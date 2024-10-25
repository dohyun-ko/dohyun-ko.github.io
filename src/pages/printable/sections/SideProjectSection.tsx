import Project from '@/types/Project';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

interface SideProjectSectionProps {}

const SideProjectSection = ({}: SideProjectSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>Side Projects</SectionTitle>

      <div className={'h-2.5'} />

      <div className={'flex flex-col gap-[15px]'}>
        {(t('sideProject.sideProjects', { returnObjects: true }) as Project[])
          .filter((sideProject) => sideProject.isImportant)
          .map((sideProject) => (
            <ProjectCard key={sideProject.name} project={sideProject} />
          ))}
      </div>
    </>
  );
};

export default SideProjectSection;
