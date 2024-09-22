import Font from "@/types/Font";
import { Area, Content, Flex, Text } from "@dohyun-ko/react-atoms";

interface MetaSectionProps {}

const MetaSection = ({}: MetaSectionProps) => {
  return (
    <Area id="meta-section">
      <Content>
        <Flex>
          <Text font={Font.Thin} size={"1.25rem"}>
            Last update: 2024-09-22
          </Text>
        </Flex>
      </Content>
    </Area>
  );
};

export default MetaSection;
