import Font from "@/types/Font";
import { Flex, Text } from "@dohyun-ko/react-atoms";

interface MetaSectionProps {}

const MetaSection = ({}: MetaSectionProps) => {
  return (
    <Flex>
      <Text font={Font.Thin} size={"1rem"}>
        Last update: 2024-06-27
      </Text>
    </Flex>
  );
};

export default MetaSection;
