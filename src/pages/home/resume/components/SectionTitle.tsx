import Font from "@/types/Font";
import { Text } from "@dohyun-ko/react-atoms";

interface SectionTitleProps {
  children?: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Text as="h1" font={Font.Bold} size={"2.5rem"}>
      {children}
    </Text>
  );
};

export default SectionTitle;
