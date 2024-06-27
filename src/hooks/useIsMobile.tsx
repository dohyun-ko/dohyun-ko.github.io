import { LayoutContext } from "@/App";
import { MOBILE_MAX_WIDTH } from "@/utils/const";
import { useContext } from "react";

const useIsMobile = () => {
  const layout = useContext(LayoutContext);

  return layout.windowWidth < MOBILE_MAX_WIDTH;
};

export default useIsMobile;
