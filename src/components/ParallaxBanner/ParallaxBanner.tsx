// https://www.youtube.com/watch?v=29UWA-GdA7k&ab_channel=TomIsLoading
// used as guidance on how to create parallax scrolling
import './parallax-banner.css';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { TextInput } from '../inputs/textInput/TextInput';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

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
    <div className="parallax-banner-container flex flex-col" ref={ref}>
      <motion.h1 style={{ y: textY }} className="text-lightest z-10 relative font-bold">
        Unity Homes
      </motion.h1>

      <motion.div style={{ y: backgroundY }} className="banner-full-image" />
      <div className="banner-bottom-image" />

      {/* home page search box */}
      <div className="flex flex-col z-40 bg-sageLight space-y-5 p-3 lg:p-6 rounded w-1/4 items-center justify-center pt-10 pb-10">
        <h2 className="">Find your perfect Home</h2>
        <TextInput placeholder="AB12 3CD" icon={<ManageSearchOutlinedIcon />} iconPosition="right" />
      </div>
    </div>
  );
};

export default ParallaxBanner;
