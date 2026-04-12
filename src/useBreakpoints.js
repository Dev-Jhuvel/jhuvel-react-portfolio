import { useMediaQuery } from "react-responsive";

export function useBreakpoints() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px) and (max-width: 1439px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isPortrait,
    isRetina,
  };
}
