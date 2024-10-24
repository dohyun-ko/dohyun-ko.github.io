import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle';

const mapFont = (level: number) => {
  switch (level) {
    case 1:
      return 'font-thin';
    case 2:
      return 'font-light';
    case 3:
      return 'font-medium';
    case 4:
      return 'font-bold';
    case 5:
      return 'font-black';
    default:
      return 'font-normal';
  }
};

interface SkillSectionProps {}

const skills = [
  {
    name: 'React',
    level: 5,
  },
  {
    name: 'TypeScript',
    level: 4,
  },
  {
    name: 'Next.js',
    level: 3,
  },
  {
    name: 'Python',
    level: 3,
  },
  {
    name: 'NestJS',
    level: 2,
  },
  {
    name: 'FastAPI',
    level: 2,
  },
  {
    name: 'Flutter',
    level: 2,
  },
  {
    name: 'C++',
    level: 2,
  },
  {
    name: 'Kotlin',
    level: 1,
  },
  {
    name: 'Docker',
    level: 1,
  },
  {
    name: 'Rust',
    level: 1,
  },
  {
    name: 'Assembly',
    level: 1,
  },
];

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className={'Area'} id="skill-section">
      <div className={'Content'}>
        <SectionTitle>Skills</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'grid grid-cols-3 gap-[10px]'}>
          {skills.map((skill) => (
            <span className={mapFont(skill.level)} key={skill.name}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
