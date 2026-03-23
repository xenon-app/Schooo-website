import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight,
  X,
  Mail,
  Linkedin
} from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

const facultyMembers = siteConfig.faculty;

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<typeof facultyMembers[0] | null>(null);

  return (
    <div className="min-h-screen bg-navy pt-[100px] text-white">
      {/* Page Hero - High Contrast Midnight */}
      <section className="relative h-[50vh] sm:h-[65vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Faculty" 
            className="w-full h-full object-cover opacity-10 grayscale translate-y-[-10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-10"></div>
          {/* Decorative blurs */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-royal opacity-[0.05] rounded-full blur-[140px] -mr-64 -mb-64" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-royal mb-4">The Educators</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">
              Expert <br />
              <span className="text-royal underline decoration-4 decoration-royal/10 tracking-tight self-start">Faculty</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/40 font-normal leading-[1.6] max-w-2xl mt-10 border-l-4 border-royal/20 pl-6">
                Discover the visionaries and subject experts dedicated to your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid - Midnight Grit Style */}
      <section className="py-24 sm:py-40 relative overflow-hidden bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {facultyMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedFaculty(member)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 border-8 border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] group-hover:shadow-royal/10 group-hover:-translate-y-4 transition-all duration-1000 grayscale group-hover:grayscale-0">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-navy/20" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy to-transparent p-12 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="flex items-center gap-4 text-white font-black text-sm uppercase tracking-widest leading-none">
                        View Profile <ArrowUpRight size={18} className="text-royal" />
                     </div>
                  </div>
                  <div className="absolute top-10 right-10">
                    <div className="bg-navy/80 backdrop-blur-3xl text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-[0.4em] border border-white/10 shadow-2xl">
                      {member.subject}
                    </div>
                  </div>
                </div>
                <div className="text-center px-6">
                  <h3 className="text-4xl font-black text-white tracking-tighter leading-none group-hover:text-royal transition-colors mb-4 uppercase">{member.name}</h3>
                  <div className="flex items-center justify-center gap-3 text-blue-100/30 font-black uppercase tracking-[0.3em] text-sm leading-none">
                      {member.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Breakdown - Full Contrast */}
      <section className="bg-navy py-24 sm:py-40 relative">
        <div className="absolute inset-0 bg-white/[0.01] bg-[size:30px_30px] opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
              <div className="max-w-2xl">
                 <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-6">Audit Strong</p>
                 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">High <br /><span className="text-royal underline decoration-4 decoration-royal/10">Impact</span> Expertise</h2>
                 <p className="text-base sm:text-lg text-blue-100/40 leading-[1.6] font-normal mb-16 border-l-4 border-royal/10 pl-10">
                    "Our faculty consists of 50+ subject experts and B.Ed/M.Ed professionals, all committed to a holistic teaching approach."
                 </p>
                 <div className="grid grid-cols-2 gap-12">
                    <div className="p-12 bg-white/5 border border-white/5 rounded-[4rem] group hover:bg-white/10 transition-all border-l-8 border-l-royal">
                       <p className="text-4xl md:text-6xl font-black text-white mb-4 tabular-nums italic">100%</p>
                       <p className="text-blue-100/20 font-black uppercase text-sm tracking-[0.4em] leading-none w-fit">B.Ed Qualified</p>
                    </div>
                    <div className="p-12 bg-white/5 border border-white/5 rounded-[4rem] group hover:bg-white/10 transition-all border-l-8 border-l-cta">
                       <p className="text-4xl md:text-6xl font-black text-white mb-4 tabular-nums italic">12 Yrs</p>
                       <p className="text-blue-100/20 font-black uppercase text-sm tracking-[0.4em] leading-none w-fit">Avg Experience</p>
                    </div>
                 </div>
              </div>
              
              <div className="lg:w-1/3 aspect-square bg-navy rounded-full relative p-2 group shadow-[0_100px_200px_-50px_rgba(37,99,235,0.2)]">
                 <div className="absolute inset-0 bg-royal rounded-full opacity-20 group-hover:scale-110 transition-transform duration-1000 animate-pulse" />
                 <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" 
                  alt="Faculty Group" 
                  className="w-full h-full object-cover rounded-full border-[15px] border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Recruitment CTA - Full Midnight Style */}
      <section className="py-24 sm:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="bg-navy border border-white/5 rounded-[5rem] md:rounded-[8rem] p-12 lg:p-32 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal opacity-[0.02] rounded-bl-full" />
            <div className="relative z-10">
               <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-6">Opportunities</p>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">Join the <br />Mission</h2>
               <p className="text-base sm:text-lg text-blue-100/40 font-normal max-w-xl border-l-4 border-royal/10 pl-6">
                 "If you're a subject expert with a heart for teaching, our doorstep is open for you."
               </p>
            </div>
            <button className="relative z-10 bg-royal text-primary px-10 sm:px-20 py-6 sm:py-10 rounded-full font-black uppercase tracking-[0.4em] text-xl sm:text-2xl hover:scale-105 sm:hover:scale-110 transition-all shadow-2xl shadow-royal/40 group/btn">
              Apply Now <ArrowUpRight size={24} className="group-hover/btn:translate-x-3 group-hover/btn:-translate-y-3 transition-transform opacity-30 group-hover/btn:opacity-100 sm:w-10 sm:h-10" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Profile - Dark Glassmorphism */}
      <AnimatePresence>
        {selectedFaculty && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFaculty(null)}
              className="fixed inset-0 bg-navy/95 backdrop-blur-3xl z-[200]"
            />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="fixed inset-0 m-auto w-[90%] sm:w-full max-w-5xl h-fit max-h-[90vh] overflow-y-auto no-scrollbar bg-navy border border-white/10 rounded-[2rem] sm:rounded-[4rem] shadow-[0_100px_200px_-50px_rgba(0,0,0,1)] pointer-events-auto z-[210] flex flex-col md:flex-row"
              >
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-12 right-12 p-6 bg-white/5 hover:bg-royal hover:text-white rounded-full transition-all z-[220] group border border-white/10"
              >
                <X size={32} className="group-hover:rotate-90 transition-transform opacity-40 group-hover:opacity-100" />
              </button>

              <div className="w-full md:w-5/12 aspect-square md:aspect-auto border-r border-white/5">
                <img src={selectedFaculty.img} alt={selectedFaculty.name} className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-all" />
              </div>
              
              <div className="flex-1 p-16 md:p-24 flex flex-col justify-center">
                  <div className="inline-block bg-white/5 text-royal px-6 sm:px-8 py-2 sm:py-3 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-[0.5em] mb-6 sm:mb-12 border border-white/5 w-fit leading-none">
                    {selectedFaculty.subject}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tighter leading-[0.85] uppercase self-baseline">{selectedFaculty.name}</h2>
                  <p className="text-blue-100/40 font-black uppercase tracking-[0.4em] text-[10px] sm:text-sm mb-10 sm:mb-16 leading-none">{selectedFaculty.role}</p>
                 
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mb-12 sm:mb-20 px-2 sm:px-4">
                     <div className="flex flex-col gap-3 sm:gap-4 border-l-4 border-royal/20 pl-6 sm:pl-8">
                         <p className="text-[10px] sm:text-sm uppercase font-black text-blue-100/20 tracking-[0.4em] leading-none mb-1">Education</p>
                         <p className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tabular-nums">{selectedFaculty.edu}</p>
                     </div>
                     <div className="flex flex-col gap-3 sm:gap-4 border-l-4 border-cta/20 pl-6 sm:pl-8">
                         <p className="text-[10px] sm:text-sm uppercase font-black text-blue-100/20 tracking-[0.4em] leading-none mb-1">Experience</p>
                         <p className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tabular-nums">{selectedFaculty.exp} Teaching</p>
                     </div>
                  </div>

                 <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="w-full bg-royal text-primary py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-base hover:bg-cta-hover transition-all flex items-center justify-center gap-6 group/btn">
                       <Mail size={24} className="group-hover/btn:scale-125 transition-transform opacity-30 group-hover/btn:opacity-100" /> Send Message
                    </button>
                    <button className="w-full border border-white/10 text-white/30 py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-base hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-6">
                       <Linkedin size={24} /> Profile
                    </button>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faculty;
