import AwardSection from '@/components/resume/sections/AwardSection';
import CurrentSection from '@/components/resume/sections/CurrentSection';
import EducationSection from '@/components/resume/sections/EducationSection';
import ExperienceSection from '@/components/resume/sections/ExperienceSection';
import MetaSection from '@/components/resume/sections/MetaSection';
import PublicationSection from '@/components/resume/sections/PublicationSection';
import SideProjectSection from '@/components/resume/sections/SideProjectSection';
import SkillSection from '@/components/resume/sections/SkillSection';
import TitleSection from '@/components/resume/sections/TitleSection';
import { graphql } from 'gatsby';
import React from 'react';

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
