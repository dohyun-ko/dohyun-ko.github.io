import font from '@/utils/font';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className={twMerge('font-bold', font(1.25))}>{children}</h2>;
  // set to h2 instead of h1 since printable resume does not have section tags
};

export default SectionTitle;
