import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal opacity-[0.05] rounded-full blur-[180px] z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-[2.5rem] flex items-center justify-center text-royal border border-white/10 shadow-2xl mb-12"
        >
          <GraduationCap size={48} className="sm:w-16 sm:h-16" />
        </motion.div>

        {/* Branding */}
        <div className="space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl font-bold text-white tracking-[0.2em] uppercase leading-none"
          >
            Adarsh <span className="text-royal">Public</span> School
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.5em]"
          >
            Enlightening Minds · Shaping Futures
          </motion.p>
        </div>

        {/* Progress System */}
        <div className="w-64 sm:w-80 h-1 bg-white/5 rounded-full overflow-hidden relative border border-white/5 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 bg-royal shadow-[0_0_15px_rgba(37,99,235,1)]"
          />
        </div>
        
        <div className="flex items-center gap-4 text-blue-100/20 text-[10px] font-bold uppercase tracking-widest">
          <span className="w-8">{progress}%</span>
          <span className="animate-pulse">Initializing Excellence...</span>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 text-blue-100/10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-center">
        © 2026 Adarsh Public School System
      </div>
    </motion.div>
  );
};
