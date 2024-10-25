import Organization from '@/types/Organization';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import OrganizationCard from '../components/OrganizationCard';
import SectionTitle from '../components/SectionTitle';

interface CurrentPageProps {}

const CurrentSection = ({}: CurrentPageProps) => {
  const { t } = useTranslation();

  return (
    <section className={'Area'} id="current-section">
      <div className={'Content'}>
        <SectionTitle>Currently working in</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'flex flex-col gap-[35px]'}>
          {(
            t('current', { returnObjects: true }) as {
              organizations: Organization[];
            }
          ).organizations.map((organization) => (
            <OrganizationCard
              key={organization.name}
              organization={organization}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentSection;
