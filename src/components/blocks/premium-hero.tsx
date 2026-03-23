import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Users,
  Trophy,
  Star
} from 'lucide-react';

interface PremiumHeroProps {
  onApply?: () => void;
  onContact?: () => void;
}

const PremiumHero = ({ onApply, onContact }: PremiumHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  const trustElements = [
    { icon: ShieldCheck, label: "CBSE Affiliated", color: "text-blue-400" },
    { icon: Users, label: "10,000+ Students", color: "text-emerald-400" },
    { icon: Trophy, label: "25+ Years Excellence", color: "text-amber-400" }
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#030712]"
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
          />
        </div>

        {/* Floating Blurred Orbs */}
        <motion.div
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-royal/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            x: -mousePos.x * 3,
            y: -mousePos.y * 3
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
        />

        {/* Subtle Parallax Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                Admissions Open 2025–26
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05] uppercase relative">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Adarsh
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block bg-gradient-to-r from-royal to-blue-400 bg-clip-text text-transparent"
                >
                  Public
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  School
                </motion.span>
              </span>
              {/* Soft Glow */}
              <div className="absolute -inset-10 bg-royal/10 blur-[60px] rounded-full -z-10 opacity-50" />
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl leading-relaxed font-normal"
            >
              Shaping future leaders with world-class education, innovation, and values.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
            >
              <button
                onClick={onApply}
                className="group relative h-16 px-10 bg-royal rounded-full text-white font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={onContact}
                className="group h-16 px-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-white/10 hover:border-royal/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Contact Us <MessageCircle size={18} className="group-hover:scale-110 transition-all opacity-80 group-hover:opacity-100" />
                </span>
              </button>
            </motion.div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10">
              {trustElements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-3 text-white/40 group hover:text-white transition-colors"
                >
                  <item.icon size={20} className={item.color} />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT CONTENT (MASSIVELY UPGRADED) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex-1 w-full relative group"
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: mousePos.y * 0.2,
                rotateY: -mousePos.x * 0.2
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateX: { type: "spring", stiffness: 100 },
                rotateY: { type: "spring", stiffness: 100 }
              }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[5rem] overflow-hidden border-[15px] border-white/5 shadow-[0_100px_200px_-50px_rgba(0,0,0,1)]"
            >
              <img
                src="/school_campus.jpg"
                alt="Adarsh Public School Students"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* Overlay Glass Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-white/10 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs uppercase font-bold tracking-widest text-white/60">Join 10k+ Alumni</div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tighter">Academic Excellence</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">Global Standards</p>
                  </div>
                  <div className="w-12 h-12 bg-royal rounded-full flex items-center justify-center">
                    <Star size={20} fill="white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10"
            />
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-60 h-60 bg-royal/10 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
