import AwardSection from '@/components/printable/sections/AwardsSection';
import EducationSection from '@/components/printable/sections/EducationSection';
import ExperienceSection from '@/components/printable/sections/ExperienceSection';
import PublicationSection from '@/components/printable/sections/PublicationSection';
import SideProjectSection from '@/components/printable/sections/SideProjectSection';
import SkillSection from '@/components/printable/sections/SkillSection';
import TitleSection from '@/components/printable/sections/TitleSection';
import { graphql } from 'gatsby';
import { twMerge } from 'tailwind-merge';
import * as styles from './printable.module.css';

const PrintablePage = () => {
  console.log(styles);

  return (
    <div className={twMerge('Area', styles.pretendard)}>
      <div className={'Content w-[92%]'}>
        <TitleSection />

        <div className={'h-[20px]'} />

        <SkillSection />

        <div className={'h-[30px]'} />

        <ExperienceSection />

        <div className={'h-[30px]'} />

        <EducationSection />

        <div className={'h-[30px]'} />

        <PublicationSection />

        <div className={'h-[20px]'} />

        <SideProjectSection />

        <div className={'h-[20px]'} />

        <AwardSection />
      </div>
    </div>
  );
};

export default PrintablePage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
