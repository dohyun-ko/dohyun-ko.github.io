import { graphql } from 'gatsby';
import React from 'react';
import AwardSection from './sections/AwardSection';
import CurrentSection from './sections/CurrentSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import MetaSection from './sections/MetaSection';
import PublicationSection from './sections/PublicationSection';
import SideProjectSection from './sections/SideProjectSection';
import SkillSection from './sections/SkillSection';
import TitleSection from './sections/TitleSection';

interface ResumePageProps {}

const ResumePage = ({}: ResumePageProps) => {
  return (
    <React.Fragment>
      <div className={'h-[50px]'} />

      <MetaSection />

      <div className={'h-[50px]'} />

      <TitleSection />

      <div className={'h-[50px]'} />

      <SkillSection />

      <div className={'h-[50px]'} />

      <EducationSection />

      <div className={'h-[50px]'} />

      <PublicationSection />

      <div className={'h-[50px]'} />

      <CurrentSection />

      <div className={'h-[50px]'} />

      <ExperienceSection />

      <div className={'h-[50px]'} />

      <SideProjectSection />

      <div className={'h-[50px]'} />

      <AwardSection />

      <div className={'h-[150px]'} />
    </React.Fragment>
  );
};

export default ResumePage;

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
