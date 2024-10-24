import useResponsiveFont from '@/hooks/useResponsiveFont';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import SectionTitle from '../components/SectionTitle';

interface EducationSectionProps {}

const EducationSection = ({}: EducationSectionProps) => {
  const { t, i18n } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <div className={'Area'} id="education-section">
      <div className={'Content'}>
        <SectionTitle>Educations</SectionTitle>

        <div className={'h-[30px]'} />

        <div className={'Card'}>
          <div
            className={'flex gap-5 border-l-[4px] border-[#EB0D00] pl-[10px]'}
          >
            <div className={'flex flex-col gap-[30px]'}>
              <div className={'flex flex-col'}>
                <h3 className={twMerge('font-bold', `text-[${font(2)}]`)}>
                  GIST
                </h3>
                <span>{t('education.major')}</span>
                <span>2022. 2 – </span>
              </div>
            </div>

            <span>TGPA 4.04 / 4.5</span>
          </div>

          <div className={'flex w-full flex-col gap-[10px]'}>
            <span className={'text-[1.125rem] font-bold'}>
              {t('education.attendedLecture')}
            </span>

            <div className={'flex-wrap gap-[0_10px]'}>
              <p>
                {(
                  t('education.attendedLectures', {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index, array) => (
                  <React.Fragment key={item}>
                    {index < array.length - 1
                      ? [item, <span style={{ padding: '0 6px' }}>|</span>]
                      : item}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
