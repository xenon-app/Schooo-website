'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlowButton } from '@/components/ui/flow-button';

const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const numberVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 40,
    y: 15,
    rotate: direction * 5
  }),
  visible: {
    opacity: 0.7,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const ghostVariants: Variants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    y: 15,
    rotate: -5
  },
  visible: { 
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    y: -10,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      rotate: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  },
  floating: {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-navy px-4 overflow-hidden relative">
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-royal opacity-[0.05] rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-royal opacity-[0.03] rounded-full blur-[140px]" />

      <AnimatePresence mode="wait">
        <motion.div 
          className="text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            <motion.span 
              className="text-[120px] md:text-[200px] font-bold text-white opacity-10 select-none tracking-tight leading-none"
              variants={numberVariants}
              custom={-1}
            >
              4
            </motion.span>
            <motion.div
              variants={ghostVariants}
              whileHover="hover"
              animate={["visible", "floating"]}
              className="relative"
            >
              <img
                src="https://xubohuah.github.io/xubohua.top/Group.png"
                alt="Ghost"
                className="w-24 h-24 md:w-40 md:h-40 object-contain select-none grayscale invert contrast-[1.2]"
                draggable="false"
              />
              <div className="absolute inset-0 bg-royal/10 blur-[40px] rounded-full -z-10" />
            </motion.div>
            <motion.span 
              className="text-[120px] md:text-[200px] font-bold text-white opacity-10 select-none tracking-tight leading-none"
              variants={numberVariants}
              custom={1}
            >
              4
            </motion.span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest leading-none"
            variants={itemVariants}
          >
            Boo! Lost?
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/30 mb-12 uppercase tracking-[0.3em] font-medium max-w-xl mx-auto"
            variants={itemVariants}
          >
            The page you are looking for has been teleported to <br />another dimension.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <Link to="/">
              <FlowButton text="Find Shelter / Home" />
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NotFound;
