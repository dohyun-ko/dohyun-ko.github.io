import Font from "@/types/Font";
import { Area, Content, Flex, Text } from "@dohyun-ko/react-atoms";

interface MetaSectionProps {}

const MetaSection = ({}: MetaSectionProps) => {
  return (
    <Area id="meta-section">
      <Content>
        <Flex>
          <Text font={Font.Thin} size={"1.25rem"}>
            Last update: 2023-12-19
          </Text>
        </Flex>
      </Content>
    </Area>
  );
};

export default MetaSection;
