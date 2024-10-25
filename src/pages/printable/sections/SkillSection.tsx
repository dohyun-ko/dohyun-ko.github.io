import { useTranslation } from 'gatsby-plugin-react-i18next';
import { twMerge } from 'tailwind-merge';
import SectionTitle from '../components/SectionTitle';
import * as styles from './skillSection.module.css';

interface SkillSectionProps {}

const SkillSection = ({}: SkillSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={'flex'}>
        <SectionTitle>보유기술</SectionTitle>
      </div>

      <div className={'h-2.5'} />

      <p className={twMerge('grid grid-cols-[70px_1fr]', styles.sourceCode)}>
        <span>{t('common.advanced')}:</span>

        <span className={'source-code-pro'}>
          React&nbsp; TypeScript&nbsp; Next.js
        </span>

        <span>{t('common.proficient')}:</span>

        <span className={'source-code-pro'}>
          Python&nbsp; NestJS&nbsp; FastAPI&nbsp; Flutter
        </span>
      </p>
    </>
  );
};

export default SkillSection;
