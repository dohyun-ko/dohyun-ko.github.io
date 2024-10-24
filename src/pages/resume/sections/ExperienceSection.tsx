import Organization from '@/types/Organization';
import { useTranslation } from 'react-i18next';
import OrganizationCard from '../components/OrganizationCard';
import SectionTitle from '../components/SectionTitle';

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className={'Area'} id="experience-section">
      <div className={'Content'}>
        <SectionTitle>Experiences</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'flex flex-col gap-[30px]'}>
          {(
            t('experience.experiences', {
              returnObjects: true,
            }) as Organization[]
          ).map((experience) => (
            <OrganizationCard key={experience.name} organization={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
