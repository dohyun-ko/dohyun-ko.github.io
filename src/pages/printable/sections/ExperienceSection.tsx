import Organization from '@/types/Organization';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OrganizationCard from '../components/OrganizationCard';
import SectionTitle from '../components/SectionTitle';

interface ExperienceSectionProps {}

const ExperienceSection = ({}: ExperienceSectionProps) => {
  const { t } = useTranslation();

  const organizations = [
    ...(
      t('experience.experiences', {
        returnObjects: true,
      }) as Organization[]
    ).reverse(),
    ...(t('current.organizations', {
      returnObjects: true,
    }) as Organization[]),
  ].filter((experience) => experience.isImportant);

  return (
    <>
      <SectionTitle>경력</SectionTitle>

      <div className={'h-2.5'} />

      <div className={'flex flex-col gap-5'}>
        {organizations.map((experience) => (
          <OrganizationCard key={experience.name} organization={experience} />
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
