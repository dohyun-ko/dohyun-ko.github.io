import { Area, Content, Spacer } from "@dohyun-ko/react-atoms";

import AwardSection from "./sections/AwardsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import PublicationSection from "./sections/PublicationSection";
import SideProjectSection from "./sections/SideProjectSection";
import SkillSection from "./sections/SkillSection";
import TitleSection from "./sections/TitleSection";

const PrintablePage = () => {
  return (
    <Area>
      <Content width={"92%"}>
        <TitleSection />

        <Spacer height={"20px"} />

        <SkillSection />

        <Spacer height={"30px"} />

        <ExperienceSection />

        <Spacer height={"30px"} />

        <EducationSection />

        <Spacer height={"30px"} />

        <PublicationSection />

        <Spacer height={"20px"} />

        <SideProjectSection />

        <Spacer height={"20px"} />

        <AwardSection />
      </Content>
    </Area>
  );
};

export default PrintablePage;
