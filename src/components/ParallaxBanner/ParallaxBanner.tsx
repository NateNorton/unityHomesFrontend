// https://www.youtube.com/watch?v=29UWA-GdA7k&ab_channel=TomIsLoading
// used as guidance on how to create parallax scrolling
import './parallax-banner.css';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ParallaxBanner = () => {
  const ref = useRef(null);
  // get values to show progress of scroll - 0 to 1
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // transform scroll value into usable values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div className="parallax-banner-container" ref={ref}>
      <motion.h1 style={{ y: textY }} className="parallax-title">
        Unity Homes
      </motion.h1>

      <motion.div style={{ y: backgroundY }} className="banner-full-image" />
      <div className="banner-bottom-image" />
    </div>
  );
};

export default ParallaxBanner;
