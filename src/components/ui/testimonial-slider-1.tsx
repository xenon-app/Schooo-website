"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Define the type for a single review
type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
};

// Define the props for the slider component
interface TestimonialSliderProps {
  reviews: Review[];
  /** Optional class name for the container */
  className?: string;
  title?: string;
}

/**
 * A reusable, animated testimonial slider component.
 * It uses framer-motion for animations and is styled with
 * shadcn/ui theme variables.
 */
export const TestimonialSlider = ({
  reviews,
  className,
  title = "Leadership Desk"
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 'direction' helps framer-motion understand slide direction (next vs. prev)
  const [direction, setDirection] = useState<"left" | "right">("right");

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    // Determine direction for animation
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get the other reviews for thumbnails
  const thumbnailReviews = reviews.filter((_, i) => i !== currentIndex);

  // Animation variants for the main image
  const imageVariants: Variants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };


  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-navy text-white px-6 py-20 sm:p-24 md:p-32 border-y border-white/5",
        className
      )}
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-royal opacity-[0.05] rounded-full blur-[140px] z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-royal opacity-[0.02] rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* === Left: Main Image Display === */}
        <div className="w-full lg:w-5/12 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group">
          {/* Quotes behind image */}
          <Quote size={120} className="absolute -top-12 -left-12 text-white/5 rotate-[-12deg] z-0 lg:block hidden" />
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
               key={currentIndex}
               custom={direction}
               variants={imageVariants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="absolute inset-0 w-full h-full rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden border-4 sm:border-8 border-white/5 shadow-2xl"
            >
              <img
                src={activeReview.imageSrc}
                alt={activeReview.name}
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Overlay for Mobile */}
          <div className="absolute bottom-6 inset-x-6 flex items-center justify-between lg:hidden z-20">
             <div className="flex gap-2">
               {reviews.map((_, i) => (
                 <div key={i} className={cn("w-2 h-2 rounded-full transition-all", i === currentIndex ? "w-6 bg-royal" : "bg-white/20")} />
               ))}
             </div>
             <div className="flex gap-4">
                <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-xl"><ArrowLeft size={18} /></button>
                <button onClick={handleNext} className="w-10 h-10 rounded-full bg-royal flex items-center justify-center shadow-xl shadow-royal/20"><ArrowRight size={18} /></button>
             </div>
          </div>
        </div>

        {/* === Right: Text Content === */}
        <div className="w-full lg:w-7/12 flex flex-col items-start lg:pl-12 text-start">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[2px] bg-royal" />
              <p className="text-royal font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs leading-none">{title}</p>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {activeReview.name}
                </h3>
                <p className="text-white/40 text-xs sm:text-sm font-black uppercase tracking-[0.4em] leading-none mb-10">
                  {activeReview.affiliation}
                </p>
                
                <blockquote className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-blue-100/60 border-l-4 sm:border-l-8 border-royal/20 pl-6 sm:pl-10 italic py-2">
                  "{activeReview.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Navigation & Meta */}
          <div className="lg:flex hidden items-center justify-between w-full mt-12 pt-12 border-t border-white/5">
             <div className="flex gap-12">
               <div>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-3">Principal</p>
                  <p className="text-sm font-black text-white uppercase tracking-widest leading-none">Desk 0{currentIndex + 1}</p>
               </div>
               <div className="flex gap-3">
                 {thumbnailReviews.map((review) => {
                    const originalIndex = reviews.findIndex((r) => r.id === review.id);
                    return (
                      <button
                        key={review.id}
                        onClick={() => handleThumbnailClick(originalIndex)}
                        className="w-12 h-12 rounded-xl border border-white/5 opacity-40 hover:opacity-100 transition-all overflow-hidden"
                      >
                        <img src={review.thumbnailSrc} className="w-full h-full object-cover grayscale hover:grayscale-0" />
                      </button>
                    )
                 })}
               </div>
             </div>

             <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-16 h-16 rounded-[1.5rem]" onClick={handlePrev}><ArrowLeft size={24} /></Button>
                <Button variant="default" size="icon" className="w-16 h-16 rounded-[1.5rem]" onClick={handleNext}><ArrowRight size={24} /></Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
