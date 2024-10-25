import font from '@/utils/font';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { twMerge } from 'tailwind-merge';
import StylessA from '../../../components/StylessA';

interface TitleSectionProps {}

const TitleSection = ({}: TitleSectionProps) => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={twMerge('font-bold', font(2))}>{t('title.name')}</h1>

      <p className={twMerge('font-medium', font(0.75))}>{t('introduction')}</p>

      <div className={'h-2.5'} />

      <div className={'flex'}>
        <p className={font(0.875)}>
          <StylessA href="mailto:dohyun682@gmail.com" hasIcon={false}>
            dohyun682@gmail.com
          </StylessA>{' '}
          | 010-3351-0168 |{' '}
          <StylessA href="https://github.com/dohyun-ko" hasIcon={false}>
            github.com/dohyun-ko
          </StylessA>{' '}
          <br />
          Detailed Resume:{' '}
          <StylessA href="https://dohyun.is-a.dev/resume" hasIcon={false}>
            dohyun.is-a.dev
          </StylessA>
        </p>
      </div>
    </>
  );
};

export default TitleSection;
