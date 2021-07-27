
import { useState, useEffect, useRef } from 'react';

const mediaQueriesTablet = () => window.innerWidth <= 1024;
const mediaQueriesMobile = () => window.innerWidth <= 768;

export const useBreackPoints = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(() => mediaQueriesMobile());
  const [isTabletView, setIsTabletView] = useState<boolean>(() => mediaQueriesTablet());
  const tablet = useRef(mediaQueriesTablet());
  const mobile = useRef(mediaQueriesMobile());

  useEffect(() => {
    const handleResizeTablet = () => {
      const isResizeTablet = mediaQueriesTablet();

      if (tablet.current === isResizeTablet) {
        return;
      }

      tablet.current = isResizeTablet;

      if (!isResizeTablet) {
        setIsTabletView(false);
      } else {
        setIsTabletView(true);
      }
    };

    window.addEventListener('resize', handleResizeTablet);
    return () => window.removeEventListener('resize', handleResizeTablet);
  }, []);

  useEffect(() => {
    const handleResizeMobile = () => {
      const isResizeMobile = mediaQueriesMobile();

      if (mobile.current === isResizeMobile) {
        return;
      }

      mobile.current = isResizeMobile;

      if (!isResizeMobile) {
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    };

    window.addEventListener('resize', handleResizeMobile);
    return () => window.removeEventListener('resize', handleResizeMobile);
  }, []);

  return {
    isMobileView,
    isTabletView
  };
}
