import useIsMobile from './useIsMobile';

const useResponsiveFont = () => {
  const isMobile = useIsMobile();

  const font = (size: number) => {
    const resized = !isMobile
      ? size
      : (() => {
          switch (size) {
            case 3.5:
              return 2.375;
            default:
              return Math.round(size * 0.8 * 16) / 16;
          }
        })();

    const className = `text-[${resized}rem] md:text-[${size}rem]`;

    return className;
  };

  return { font };
};

export default useResponsiveFont;
