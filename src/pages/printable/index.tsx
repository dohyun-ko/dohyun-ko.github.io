import { graphql } from 'gatsby';
import { twMerge } from 'tailwind-merge';
import * as styles from './printable.module.css';
import AwardSection from './sections/AwardsSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import PublicationSection from './sections/PublicationSection';
import SideProjectSection from './sections/SideProjectSection';
import SkillSection from './sections/SkillSection';
import TitleSection from './sections/TitleSection';

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
