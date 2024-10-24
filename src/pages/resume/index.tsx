import { Spacer } from "@dohyun-ko/react-atoms";
import { graphql } from "gatsby";
import React from "react";
import AwardSection from "./sections/\bAwardSection";
import CurrentSection from "./sections/CurrentSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import MetaSection from "./sections/MetaSection";
import PublicationSection from "./sections/PublicationSection";
import SideProjectSection from "./sections/SideProjectSection";
import SkillSection from "./sections/SkillSection";
import TitleSection from "./sections/TitleSection";

interface ResumePageProps {}

const ResumePage = ({}: ResumePageProps) => {
  return (
    <React.Fragment>
      <Spacer height={"50px"} />

      <MetaSection />

      <Spacer height={"50px"} />

      <TitleSection />

      <Spacer height={"50px"} />

      <SkillSection />

      <Spacer height={"50px"} />

      <EducationSection />

      <Spacer height={"50px"} />

      <PublicationSection />

      <Spacer height={"50px"} />

      <CurrentSection />

      <Spacer height={"50px"} />

      <ExperienceSection />

      <Spacer height={"50px"} />

      <SideProjectSection />

      <Spacer height={"50px"} />

      <AwardSection />

      <Spacer height={"150px"} />
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
