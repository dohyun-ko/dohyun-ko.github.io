import font from '@/utils/font';
import { Spacer } from '@dohyun-ko/react-atoms';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import SectionTitle from '../components/SectionTitle';

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle>학력</SectionTitle>

      <Spacer height={'10px'} />

      <div className={'PrintableCard'}>
        <div className={'flex gap-5 border-l-[5px] border-[#EB0D00] pl-[10px]'}>
          <div className={'flex flex-col gap-[30px]'}>
            <div className={'flex flex-col'}>
              <h2 className={twMerge('font-bold', `text-[${font(1)}]`)}>
                GIST
              </h2>
              <span>{t('education.major')}</span>
            </div>
          </div>
        </div>
        <div className={'flex flex-col'}>
          <span className={font(1)}>TGPA 4.04 / 4.5</span>
          <span className={font(0.75)}>2022. 2 – </span>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
