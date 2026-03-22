import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Info, 
  Wifi, 
  TreePine, 
  Maximize2,
  X,
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-navy text-white pt-[100px]">
      {/* Page Hero */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" 
            alt="Campus" 
            className="w-full h-full object-cover opacity-10 grayscale translate-y-[-10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-10"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-royal opacity-[0.05] rounded-full blur-[140px] -mr-64 -mb-64" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-royal mb-4">Space and Matter</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">
              The <br />
              <span className="text-royal underline decoration-4 decoration-royal/10 tracking-tight self-start">Campus</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/40 font-normal leading-[1.6] max-w-3xl mt-10 border-l-4 border-royal/20 pl-6">
                Redefining the standard of physical learning spaces in rural education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. CAMPUS LIFE SECTION */}
      <section id="life" className="py-32 bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div>
                 <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Student Experience</p>
                 <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase self-start">Campus <br /><span className="text-royal underline decoration-4 decoration-royal/10">Life</span></h2>
                 <p className="text-lg text-blue-100/40 font-normal leading-[1.6] border-l-4 border-royal/10 pl-6">
                    "A thriving community where academic excellence meets personal development, creativity, and lifelong friendships."
                 </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: TreePine, label: 'Lush Green Campus', color: 'text-emerald-500', bg: 'bg-emerald-950/40' },
                  { icon: Wifi, label: 'High-speed Internet', color: 'text-blue-500', bg: 'bg-blue-950/40' },
                  { icon: ShieldCheck, label: 'Safe & Secure', color: 'text-orange-500', bg: 'bg-orange-950/40' },
                  { icon: Zap, label: 'Modern Amenities', color: 'text-purple-500', bg: 'bg-purple-950/40' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-8 bg-white/5 rounded-[3rem] border border-white/5 shadow-2xl group hover:bg-white/10 transition-all">
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                      <item.icon size={28} />
                    </div>
                    <span className="text-sm font-black text-white uppercase tracking-[0.3em] leading-none">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[5rem] overflow-hidden border-[15px] border-white/5 shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-1000">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" 
                    alt="Campus Life" 
                    className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-navy to-transparent">
                      <div className="flex items-center gap-4 text-white/40 font-black uppercase tracking-[0.4em] text-sm">
                          <Maximize2 size={14} className="text-royal" /> Student Life View
                      </div>
                  </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-navy p-12 rounded-[4rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] hidden lg:block group hover:-translate-y-4 transition-all">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:bg-royal group-hover:text-white transition-all">
                    <Maximize2 size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100/20 uppercase font-black tracking-[0.4em] mb-2 leading-none">Global Campus Footprint</p>
                    <p className="text-4xl font-black text-white tracking-widest tabular-nums uppercase leading-none">{siteConfig.totalArea}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE & DISCLOSURE SECTION */}
      <section id="infrastructure" className="py-32 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
               <div className="max-w-4xl">
                   <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">World-Class Facility</p>
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">Modern <br /><span className="text-royal underline decoration-4 decoration-royal/10">Infrastructure</span></h2>
                   <p className="text-lg text-blue-100/40 font-medium uppercase tracking-[0.2em] pl-6 border-l-4 border-royal/10">"Spread across a lush green campus, providing a safe, inclusive, and stimulating environment."</p>
               </div>
              <div className="flex items-center gap-4 px-10 py-6 bg-white/5 border border-white/5 rounded-full text-white font-black text-base uppercase tracking-widest leading-none">
                  <Info size={18} className="text-royal" /> {siteConfig.school.admissionYear} Audit
              </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[6rem] border border-white/5 overflow-hidden shadow-2xl relative group">
              <div className="overflow-x-auto no-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/5">
                      <th className="px-16 py-12 font-black uppercase tracking-[0.4em] text-sm text-royal">Information Pillar</th>
                      <th className="px-16 py-12 font-black uppercase tracking-[0.4em] text-sm text-royal text-right">Specific Audit Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {siteConfig.infrastructure.map((row, idx) => (
                      <tr key={idx} className="hover:bg-royal/5 transition-all group/row">
                        <td className="px-16 py-10 font-black text-2xl text-white tracking-tighter uppercase leading-none opacity-40 group-hover/row:opacity-100 transition-opacity">{row.info}</td>
                        <td className="px-16 py-10 text-right">
                             <span className="inline-flex h-12 items-center px-10 bg-white/5 rounded-full text-white/50 font-black text-sm group-hover/row:bg-royal group-hover/row:text-white transition-all tabular-nums uppercase tracking-widest leading-none">
                               {row.detail}
                             </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS GALLERY SECTION */}
      <section id="gallery" className="py-32 bg-navy">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            <div className="text-center max-w-4xl mx-auto">
                <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Candid Captures</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">Campus <br /><span className="text-royal">Showcase</span></h2>
                <p className="text-blue-100/40 text-lg font-medium uppercase tracking-[0.2em] leading-relaxed">"High-precision tour of our facilities and life."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[1200px]">
              {siteConfig.gallery.map((img, idx) => {
                const spans = [
                  "md:col-span-8 md:row-span-2",
                  "md:col-span-4 md:row-span-1",
                  "md:col-span-4 md:row-span-1",
                  "md:col-span-4 md:row-span-2",
                  "md:col-span-8 md:row-span-1",
                  "md:col-span-4 md:row-span-1",
                  "md:col-span-4 md:row-span-1",
                  "md:col-span-4 md:row-span-1"
                ];
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedImage(img.url)}
                    className={cn(
                      "relative rounded-[3rem] overflow-hidden cursor-pointer group shadow-2xl transition-all duration-1000 border border-white/5",
                      spans[idx % spans.length]
                    )}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-royal/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none blur-3xl rounded-full" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                        <p className="text-white font-bold text-xl tracking-tight uppercase leading-none mb-2">{img.title}</p>
                        <div className="flex items-center gap-2 text-royal font-bold text-xs uppercase tracking-widest leading-none">
                            Enlarge Story <ChevronRight size={12} />
                        </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[200] bg-navy/95 backdrop-blur-2xl flex items-center justify-center p-8 md:p-32"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.button 
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    className="absolute top-12 right-12 text-white/40 hover:text-white transition-all bg-white/5 p-6 rounded-full border border-white/10"
                  >
                    <X size={48} />
                  </motion.button>
                  <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    className="relative max-w-7xl max-h-full border-[15px] border-white/5 rounded-[5rem] overflow-hidden shadow-[0_100px_200px_-50px_rgba(0,0,0,1)]"
                  >
                    <img src={selectedImage} className="max-w-full max-h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute top-10 left-10 p-6 bg-navy/80 backdrop-blur-2xl border border-white/10 rounded-3xl">
                        <p className="text-white font-black uppercase tracking-[0.5em] text-sm leading-none">Adarsh Public School · Sitamarhi</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. RULES & REGULATIONS */}
      <section id="rules" className="py-32 bg-[#030712]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-navy rounded-[6rem] p-20 md:p-32 border border-white/5 relative overflow-hidden text-center"
          >
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-royal opacity-[0.05] rounded-full blur-[180px]" />
             <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-8">Full Institutional Reveal</p>
             <h2 className="text-6xl md:text-9xl font-bold text-white mb-16 tracking-tighter leading-[0.8] uppercase">The <br /><span className="text-royal transition-all duration-1000 hover:tracking-widest cursor-default">Future</span> <br /> Ground</h2>
             <div className="grid md:grid-cols-3 gap-16 mt-24">
                {[
                  { label: "Digital Saturation", val: "100%", desc: "Smart classroom penetration" },
                  { label: "Carbon Footprint", val: "-40%", desc: "Renewable energy offset" },
                  { label: "Student-Teacher Ratio", val: "20:1", desc: "Global benchmark accuracy" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-4xl font-bold text-white uppercase tracking-tighter pt-10">{stat.val}</p>
                    <p className="text-xs font-bold text-royal uppercase tracking-widest">{stat.label}</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-widest leading-relaxed mt-4">{stat.desc}</p>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* 5. LOCATION MAP SECTION */}
      <section id="location" className="py-32 bg-navy">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-4xl">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Location Integrity</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight uppercase">Visit Our <br /><span className="text-royal">Footprint</span></h2>
              <p className="text-lg text-blue-100/40 font-medium uppercase tracking-[0.2em] pl-6 border-l-4 border-royal/10">Strategic location in the heart of Sitamarhi</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10">
                 <Zap size={24} />
               </div>
               <p className="text-blue-100/40 text-xs font-bold uppercase tracking-widest">Global Node Access</p>
            </div>
          </div>
          
          <div className="aspect-[21/9] w-full rounded-[6rem] overflow-hidden border border-white/5 relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60 z-10 pointer-events-none" />
            <iframe 
               src={siteConfig.contact.mapEmbed}
               className="w-full h-full grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-10 transition-all duration-1000"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:opacity-0 transition-opacity">
                <div className="bg-navy/80 backdrop-blur-3xl px-16 py-8 rounded-[4rem] border border-white/10 shadow-2xl">
                    <p className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-4">
                       <ShieldCheck className="text-royal" /> Secured Institutional Zone
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campus;
