import { Spacer } from "@dohyun-ko/react-atoms";
import CurrentSection from "./sections/CurrentSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import MetaSection from "./sections/MetaSection";
import SideProjectSection from "./sections/SideProjectSection";
import SkillSection from "./sections/SkillSection";
import TitleSection from "./sections/TitleSection";

interface ResumePageProps {}

const ResumePage = ({}: ResumePageProps) => {
  return (
    <>
      <Spacer height={"50px"} />

      <MetaSection />

      <Spacer height={"50px"} />

      <TitleSection />

      <Spacer height={"50px"} />

      <SkillSection />

      <Spacer height={"50px"} />

      <EducationSection />

      <Spacer height={"50px"} />

      <CurrentSection />

      <Spacer height={"50px"} />

      <ExperienceSection />

      <Spacer height={"50px"} />

      <SideProjectSection />

      <Spacer height={"150px"} />
    </>
  );
};

export default ResumePage;
