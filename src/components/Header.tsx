import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import AdmissionModal from "./AdmissionModal";

const menu = [
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
        description: "Vision, mission and school overview",
        url: "/why-adarsh",
      },
      {
        title: "Faculty Members",
        description: "Meet our expert teaching staff",
        url: "/faculty",
      },
      {
        title: "Student Council",
        description: "Student leadership and activities",
        url: "/contact",
      },
      {
        title: "Contact Desk",
        description: "Get in touch with administration",
        url: "/contact",
      },
    ],
  },
  {
    title: "Academics",
    url: "#",
    items: [
      {
        title: "Courses Offered",
        description: "All programs and streams available",
        url: "/academics",
      },
      {
        title: "Curriculum",
        description: "Detailed syllabus structure",
        url: "/academics#curriculum",
      },
      {
        title: "Academic Calendar",
        description: "Yearly academic schedule",
        url: "/academics#calendar",
      },
      {
        title: "Examination Rules",
        description: "Exam guidelines and policies",
        url: "/academics#exam",
      },
      {
        title: "Library Resources",
        description: "Digital and physical resources",
        url: "/library",
      },
    ],
  },
  {
    title: "Admissions",
    url: "#",
    items: [
      {
        title: "Admissions 2026",
        description: "Apply for upcoming session",
        url: "/admissions",
      },
      {
        title: "Eligibility & Process",
        description: "Admission criteria & steps",
        url: "/admissions#process",
      },
      {
        title: "Fee Structure",
        description: "Complete fee breakdown",
        url: "/admissions#fees",
      },
      {
        title: "Get Admission Help",
        description: "Talk to counselor instantly",
        url: "/contact",
      },
    ],
  },
  {
    title: "Campus",
    url: "#",
    items: [
      {
        title: "Campus Life",
        description: "Student life & activities",
        url: "/campus",
      },
      {
        title: "Infrastructure & Disclosure",
        description: "Facilities and transparency",
        url: "/campus#infrastructure",
      },
      {
        title: "Campus Gallery",
        description: "Photos & media of campus",
        url: "/campus#gallery",
      },
      {
        title: "Rules & Regulations",
        description: "Code of conduct",
        url: "/campus#rules",
      },
    ],
  },
];


const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derive active tab from current pathname — checks top-level then sub-items
  const currentPath = location.pathname;
  const activeTab = (() => {
    // 1. Exact match on a top-level item
    const topMatch = menu.find(item => item.url !== "#" && item.url === currentPath);
    if (topMatch) return topMatch.title;

    // 2. Check if the path matches any sub-item URL (strip hash for comparison)
    for (const item of menu) {
      if (item.items) {
        const subMatch = item.items.find(sub => {
          const subPath = sub.url.split("#")[0];
          return subPath === currentPath;
        });
        if (subMatch) return item.title;
      }
    }

    // 3. Fallback: match by path prefix (e.g. /academics/... → Academics)
    for (const item of menu) {
      if (item.url !== "#" && item.url !== "/" && currentPath.startsWith(item.url)) {
        return item.title;
      }
    }

    return "Home";
  })();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500 py-4",
        isScrolled 
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* ── LOGO (Left) ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:border-royal/50 transition-all shadow-xl">
            <GraduationCap size={24} className="group-hover:scale-110 transition-transform md:hidden" />
            <GraduationCap size={28} className="group-hover:scale-110 transition-transform hidden md:block" />
          </div>
          <div>
            <h2 className="text-sm md:text-xl font-bold text-white tracking-widest leading-tight uppercase">
              Adarsh <br className="md:hidden" /><span className="text-royal">Public</span> School
            </h2>
          </div>
        </Link>

        {/* ── MENU (Center) ── */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-3xl py-1.5 px-2 rounded-full shadow-lg relative">
          {menu.map((item) => {
            const isActive = activeTab === item.title;
            const hasItems = item.items && item.items.length > 0;

            return (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => setHoveredTab(item.title)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <Link
                  to={item.url === "#" ? location.pathname : item.url}
                  className={cn(
                    "relative cursor-pointer text-[11px] font-bold px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2",
                    "text-white/50 hover:text-white uppercase tracking-widest",
                    (isActive || hoveredTab === item.title) && "text-white"
                  )}
                >
                  <span className="relative z-10">{item.title}</span>
                  {hasItems && (
                    <ChevronDown 
                      size={12} 
                      className={cn(
                        "transition-transform duration-300",
                        hoveredTab === item.title && "rotate-180"
                      )} 
                    />
                  )}
                  
                  {/* Underline Animation & Active Glow */}
                  <AnimatePresence>
                    {(isActive || hoveredTab === item.title) && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 w-full bg-white/10 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-royal rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hasItems && hoveredTab === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <ul className="w-80 p-3 bg-navy/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 grid gap-1">
                        {item.items!.map((sub) => (
                          <li key={sub.title}>
                            <Link
                              to={sub.url}
                              className="block p-4 rounded-2xl hover:bg-white/5 transition-all group"
                            >
                              <div className="text-[12px] font-bold text-white uppercase tracking-widest mb-1 group-hover:text-royal transition-colors">
                                {sub.title}
                              </div>
                              <div className="text-[10px] text-white/40 leading-relaxed font-medium">
                                {sub.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>

        {/* ── CTA (Right) ── */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:flex cursor-pointer group relative px-6 py-2.5 bg-royal rounded-full text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(37,99,235,0.2)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* ── MOBILE MENU (Overlay) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[73px] bg-navy/98 backdrop-blur-2xl z-50 lg:hidden overflow-y-auto"
          >
            <nav className="p-8 space-y-10">
              {menu.map((item) => {
                const hasItems = item.items && item.items.length > 0;
                return (
                  <div key={item.title} className="space-y-6">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.url === "#" ? "#" : item.url}
                        className="text-2xl font-bold text-white uppercase tracking-tighter hover:text-royal transition-colors"
                      >
                        {item.title}
                      </Link>
                    </div>
                    {hasItems && (
                      <div className="grid grid-cols-1 gap-4 pl-4 border-l border-white/5">
                        {item.items!.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.url}
                            className="group"
                          >
                            <div className="text-sm font-bold text-white/60 group-hover:text-royal transition-colors uppercase tracking-widest">
                              {sub.title}
                            </div>
                            <div className="text-[10px] text-white/20 uppercase tracking-widest mt-1">
                              {sub.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-10 border-t border-white/5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full h-16 bg-royal rounded-2xl text-white font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-xl shadow-royal/20"
                >
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.header>
  );
};

export default Header;
