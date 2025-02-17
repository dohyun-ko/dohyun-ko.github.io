import { MOBILE_MAX_WIDTH } from "@/utils/const";
import { Grid } from "@dohyun-ko/react-atoms";
import styled from "styled-components";

interface CardProps {}

const Card = styled(Grid)`
  gap: 30px;
  grid-template-columns: 160px 1fr;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}px) {
    grid-template-columns: 1fr;
  }
`;
export default Card;
