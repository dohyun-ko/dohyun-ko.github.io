import useResponsiveFont from '@/hooks/useResponsiveFont';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  const { font } = useResponsiveFont();

  return (
    <h1 className={twMerge('font-bold', `text-[${font(2.5)}]`)}>{children}</h1>
  );
};

export default SectionTitle;
