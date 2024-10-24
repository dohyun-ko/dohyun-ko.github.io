import StylessA from '@/components/StylessA';
import useResponsiveFont from '@/hooks/useResponsiveFont';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();
  const { font } = useResponsiveFont();

  return (
    <div className={'Area'} id="title-section">
      <div className={'Content'}>
        <h1 className={twMerge('font-bold', font(2))}>
          {t('title.developer')}
        </h1>
        <h1 className={twMerge('font-bold', font(3.5))}>{t('title.name')}</h1>

        <p className={twMerge('font-medium', font(1.5))}>{t('introduction')}</p>

        <div className={'h-[30px]'} />

        <div className={'flex'}>
          <p className={`text-[${font(1.5)}]`}>
            <StylessA href="mailto:dohyun682@gmail.com" hasIcon={false}>
              dohyun682@gmail.com
            </StylessA>{' '}
            |{' '}
            <StylessA href="https://github.com/dohyun-ko" hasIcon={false}>
              GitHub
            </StylessA>{' '}
            |{' '}
            <StylessA
              href="https://www.instagram.com/dohyun682"
              hasIcon={false}
            >
              Instagram
            </StylessA>{' '}
            |{' '}
            <StylessA
              href="https://www.linkedin.com/in/dohyun-ko-92b885212"
              hasIcon={false}
            >
              LinkedIn
            </StylessA>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
