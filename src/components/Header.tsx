import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import AdmissionModal from "./AdmissionModal";

const navMenu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "#",
    items: [
      {
        title: "About Adarsh",
        description: "Vision, Mission and School Overview",
        url: "/why-adarsh",
      },
      {
        title: "Faculty Members",
        description: "Meet Our Expert Teaching Staff",
        url: "/faculty",
      },
      {
        title: "Student Council",
        description: "Student Leadership and Activities",
        url: "/contact",
      },
      {
        title: "Contact Desk",
        url: "/contact",
      },
    ],
  },
  {
    title: "Academics",
    url: "#",
    items: [
      { title: "Courses Offered", url: "/academics" },
      { title: "Curriculum", url: "/academics#curriculum" },
      { title: "Academic Calendar", url: "/academics#calendar" },
      { title: "Examination Rules", url: "/academics#exam" },
      { title: "Library Resources", url: "/academics#library" },
    ],
  },
  {
    title: "Admissions",
    url: "#",
    items: [
      {
        title: "Admissions 2026",
        description: "Apply for Upcoming Session",
        url: "/admissions",
      },
      {
        title: "Eligibility & Process",
        url: "/admissions#process",
      },
      {
        title: "Fee Structure",
        url: "/admissions#fees",
      },
      {
        title: "Get Admission Help",
        url: "/contact",
      },
    ],
  },
  {
    title: "Campus",
    url: "#",
    items: [
      { title: "Campus Life", url: "/campus" },
      { title: "Infrastructure & Disclosure", url: "/campus#infrastructure" },
      { title: "Campus Gallery", url: "/campus#gallery" },
      { title: "Rules & Regulations", url: "/campus#rules" },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileTab, setExpandedMobileTab] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Handle route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileTab(null);
  }, [location.pathname]);

  const currentPath = location.pathname;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 inset-x-0 w-full z-[100] transition-all duration-300 py-4 sm:py-5 border-b",
          isScrolled 
            ? "bg-navy/95 backdrop-blur-md border-white/5 shadow-2xl" 
            : "bg-navy border-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-royal/10 border border-royal/20 rounded-xl flex items-center justify-center text-royal transition-transform group-hover:rotate-12">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
              Adarsh <span className="text-royal">Public</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navMenu.map((item) => {
              const hasItems = item.items && item.items.length > 0;
              const isActive = currentPath === item.url || (hasItems && item.items?.some(sub => currentPath === sub.url.split('#')[0]));

              return (
                <div 
                  key={item.title}
                  className="relative h-full py-2"
                  onMouseEnter={() => hasItems && setHoveredTab(item.title)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <Link
                    to={item.url === "#" ? location.pathname : item.url}
                    className={cn(
                      "flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest transition-colors duration-200",
                      isActive ? "text-royal" : "text-white hover:text-[#cccccc]"
                    )}
                  >
                    {item.title}
                    {hasItems && (
                      <ChevronDown 
                        size={14} 
                        className={cn("transition-transform duration-300", hoveredTab === item.title && "rotate-180")} 
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {hasItems && hoveredTab === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 pt-4"
                      >
                        <ul className="w-72 bg-navy backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                          {item.items!.map((sub) => (
                            <li key={sub.title}>
                              <Link
                                to={sub.url}
                                className="block p-4 rounded-xl hover:bg-white/5 transition-all group"
                              >
                                <div className="text-[12px] font-bold text-white uppercase tracking-widest leading-none mb-1 group-hover:text-royal">
                                  {sub.title}
                                </div>
                                {sub.description && (
                                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-medium leading-tight">
                                    {sub.description}
                                  </div>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
             <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex px-6 py-2.5 bg-royal text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-royal/80 transition-all shadow-xl shadow-royal/20"
            >
              Apply Now
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-navy backdrop-blur-3xl lg:hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-6 border-b border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                <GraduationCap size={24} className="text-royal" />
                <span className="text-sm font-black uppercase tracking-widest text-white leading-none">APS Menu</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-white/5 rounded-xl text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Accordion Content */}
            <div className="flex-grow overflow-y-auto no-scrollbar py-8">
              <nav className="px-6 space-y-4">
                {navMenu.map((item) => {
                  const hasItems = item.items && item.items.length > 0;
                  const isExpanded = expandedMobileTab === item.title;
                  const isActive = currentPath === item.url;

                  return (
                    <div key={item.title} className="border-b border-white/5 pb-4 last:border-0">
                      <div 
                        className="flex items-center justify-between py-2 cursor-pointer"
                        onClick={() => {
                          if (hasItems) {
                            setExpandedMobileTab(isExpanded ? null : item.title);
                          } else {
                            window.location.href = item.url;
                          }
                        }}
                      >
                        <span className={cn(
                          "text-2xl font-black uppercase tracking-tighter transition-colors",
                          (isExpanded || isActive) ? "text-royal" : "text-white"
                        )}>
                          {item.title}
                        </span>
                        {hasItems && (
                          <ChevronDown 
                            size={20} 
                            className={cn("transition-transform duration-300 text-royal", isExpanded && "rotate-180")} 
                          />
                        )}
                      </div>

                      <AnimatePresence>
                        {hasItems && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-4 pt-6 pl-4 border-l border-royal/20 mt-2">
                              {item.items!.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.url}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="group"
                                >
                                  <div className="text-sm font-bold text-white/70 group-hover:text-royal transition-colors uppercase tracking-widest leading-none mb-1">
                                    {sub.title}
                                  </div>
                                  {sub.description && (
                                    <div className="text-[10px] text-white/20 uppercase tracking-widest font-medium leading-tight">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-8 bg-royal/5 border-t border-white/5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full h-16 bg-royal rounded-2xl text-white font-black uppercase tracking-[0.4em] text-sm shadow-2xl active:scale-95 transition-transform"
              >
                Apply for Admission
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
