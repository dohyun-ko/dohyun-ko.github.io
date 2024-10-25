import font from '@/utils/font';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h1 className={twMerge('font-bold', font(2.5))}>{children}</h1>;
};

export default SectionTitle;
