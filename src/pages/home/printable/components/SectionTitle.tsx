import useResponsiveFont from "@/hooks/useResponsiveFont";
import Font from "@/types/Font";
import { Text } from "@dohyun-ko/react-atoms";

interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  const { font } = useResponsiveFont();

  return (
    <Text as="h1" font={Font.Bold} size={font(1.25)}>
      {children}
    </Text>
  );
};

export default SectionTitle;
