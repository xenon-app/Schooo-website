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
  title = "Leadership"
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

  const textVariants: Variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[600px] sm:min-h-[700px] overflow-hidden bg-navy text-white p-8 sm:p-20 md:p-32 border-y border-white/5",
        className
      )}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-royal opacity-[0.03] rounded-full blur-[140px] z-0" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-40 h-40 bg-white opacity-[0.02] blur-[100px] z-0" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 h-full relative z-10">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between items-start">
          <div className="flex flex-col space-y-8">
            {/* Pagination */}
            <span className="text-sm text-royal font-bold uppercase tracking-widest leading-none">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            {/* Vertical "Reviews" Text */}
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block opacity-20 whitespace-nowrap">
              {title}
            </h2>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-4 mt-8 md:mt-0 overflow-x-auto no-scrollbar pb-4 md:pb-0 w-full">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex((r) => r.id === review.id);
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-2xl w-16 h-20 md:w-24 md:h-32 opacity-20 grayscale border-2 border-transparent hover:border-royal/50 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div className="md:col-span-4 relative h-full min-h-[400px] md:min-h-[600px]">
           <Quote size={120} className="absolute -top-16 -left-16 text-white/5 rotate-[-12deg] z-0" />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
               key={currentIndex}
               custom={direction}
               variants={imageVariants}
               initial="enter"
               animate="center"
               exit="exit"
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="absolute inset-0 w-full h-full rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl"
            >
              <img
                src={activeReview.imageSrc}
                alt={activeReview.name}
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-5 flex flex-col justify-center gap-8 md:gap-12 md:pl-16 relative">
          {/* Text Content */}
          <div className="relative overflow-hidden pt-8 md:pt-0 min-h-[400px] sm:min-h-[350px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12"
              >
                <div>
                    <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Leadership Desk</p>
                    <h3 className="text-4xl font-bold text-white uppercase tracking-tight leading-none mb-4">
                      {activeReview.name}
                    </h3>
                    <p className="text-blue-100/40 text-xs font-bold uppercase tracking-[0.4em] leading-none mb-12">
                      {activeReview.affiliation}
                    </p>
                </div>
                
                <blockquote className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.2] sm:leading-[1.1] tracking-tighter text-blue-100/60 border-l-[6px] sm:border-l-[12px] border-royal/10 pl-6 sm:pl-12 py-4 italic">
                  "{activeReview.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              className="w-16 h-16"
              onClick={handlePrev}
            >
              <ArrowLeft size={24} />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="w-16 h-16"
              onClick={handleNext}
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
