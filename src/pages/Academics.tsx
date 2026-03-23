
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Sparkles,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const Academics = () => {
  return (
    <div className="min-h-screen bg-navy pt-[100px] text-white">
      {/* Page Hero */}
      <section className="relative h-[60vh] sm:h-[80vh] flex flex-col justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" 
            alt="Academics" 
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
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-royal mb-4">Mind in Motion</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">
              The <br />
              <span className="text-royal underline decoration-4 decoration-royal/10 tracking-tight self-start">Academics</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/40 font-normal leading-[1.6] max-w-2xl mt-10 border-l-4 border-royal/20 pl-6">
                Redefining the standard of holistic learning in the 21st century.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. CURRICULUM SECTION */}
      <section id="curriculum" className="py-24 sm:py-32 bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Core Pedagogy</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">Future <br /><span className="text-royal underline decoration-4 decoration-royal/10">Curriculum</span></h2>
                <p className="text-base sm:text-lg text-blue-100/40 font-normal leading-[1.6] border-l-4 border-royal/10 pl-6 mb-16">
                  "Our curriculum is designed to challenge the intellect and ignite the curiosities of every learner."
                </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {siteConfig.learningPillars.map((pillar, idx) => (
                      <div key={idx} className="flex flex-col gap-4 p-8 sm:p-10 bg-white/5 border border-white/5 rounded-[2.5rem] sm:rounded-[3rem] group hover:bg-white/10 transition-all border-b-8 border-b-royal">
                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:scale-110 transition-transform">
                            <Sparkles size={24} />
                        </div>
                        <span className="text-sm font-semibold text-white uppercase tracking-widest leading-none">{pillar}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="relative rounded-[5rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                  alt="Students" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-navy to-transparent">
                    <p className="text-white font-medium uppercase tracking-[0.4em] text-sm opacity-40">World-class pedagogy</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {siteConfig.curriculum.map((level, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/5 group hover:bg-white/10 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-125 transition-transform" />
                  <p className="text-royal font-bold uppercase tracking-[0.4em] text-sm mb-4">{level.level}</p>
                  <h3 className="text-3xl font-black text-white mb-8 tracking-tighter leading-none uppercase">{level.level}</h3>
                  <div className="w-12 h-1 bg-royal/10 rounded-full mb-10 group-hover:w-full transition-all" />
                  <p className="text-blue-100/40 text-sm font-medium uppercase tracking-widest mb-10 leading-relaxed italic">"{level.focus}"</p>
                  <div className="flex flex-wrap gap-3">
                    {level.subjects.map(sub => (
                      <span key={sub} className="px-5 py-2.5 bg-white/5 rounded-xl text-white/40 font-semibold text-sm uppercase tracking-widest leading-none border border-white/5 group-hover:bg-royal/10 group-hover:text-royal transition-all">{sub}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACADEMIC CALENDAR SECTION */}
      <section id="calendar" className="py-24 sm:py-32 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Chronology of Growth</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">Academic <br /><span className="text-royal">Calendar</span></h2>
              <p className="text-blue-100/40 text-lg font-medium uppercase tracking-[0.2em] leading-relaxed">Session {siteConfig.school.admissionYear} Roadmap</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteConfig.academicCalendar.map((item, idx) => (
              <div key={idx} className="group relative bg-white/[0.03] p-12 rounded-[4rem] border border-white/5 hover:bg-white/10 transition-all shadow-2xl shadow-navy/40">
                <div className="flex items-center justify-between mb-10">
                  <p className="text-royal font-bold uppercase tracking-[0.4em] text-sm tabular-nums leading-none">{item.month}</p>
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/20 border border-white/10 group-hover:bg-royal group-hover:text-white transition-all">
                      <Calendar size={18} />
                  </div>
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tighter leading-none uppercase">{item.event}</h4>
                <p className="text-blue-100/20 font-medium uppercase tracking-[0.2em] text-sm leading-none mb-10">{item.date}</p>
                <div className="flex items-center gap-3 text-royal font-bold text-sm uppercase tracking-widest leading-none opacity-0 group-hover:opacity-100 transition-opacity">
                    Schedule Details <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RULES & REGULATIONS SECTION */}
      <section id="rules" className="py-24 sm:py-32 bg-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mb-24">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Conduct & Ethics</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight leading-[1.1] uppercase">Rules & <br /><span className="text-royal underline decoration-4 decoration-royal/10">Regulations</span></h2>
              <p className="text-lg text-blue-100/40 font-normal uppercase tracking-[0.2em] border-l-4 border-royal/10 pl-6 max-w-2xl">"Discipline is the bridge between goals and accomplishment."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             {[
                 { 
                  title: "General Conduct", 
                  rules: ["Punctuality is mandatory.", "School uniform must be worn as prescribed.", "Identity cards must be visible at all times.", "Politeness towards faculty and peers is expected."] 
                 },
                 { 
                  title: "Attendance Policy", 
                  rules: ["85% attendance is required for term exams.", "Leave must be authorized by parents/guardians.", "Medical leave requires a certified doctor's note.", "Absence for 10 days without notice leads to removal."] 
                 },
                 { 
                  title: "Campus Safety", 
                  rules: ["CCTV monitored facility for student safety.", "Mobile phones are strictly prohibited for students.", "Damage to school property is liable for heavy fines.", "Outsiders are not allowed without valid ID."] 
                 },
                 { 
                  title: "Ethical Standards", 
                  rules: ["Full academic honesty in all submissions.", "Zero-tolerance for bullying or ragging.", "Eco-friendly campus with no plastic policy.", "Respect for all cultures and traditions."] 
                 }
             ].map((cat, i) => (
                  <div key={i} className="bg-white/[0.03] p-12 rounded-[4rem] border border-white/5 relative group hover:bg-white/10 transition-all">
                       <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 mb-10 group-hover:rotate-12 transition-transform">
                          <AlertCircle size={28} />
                       </div>
                       <h4 className="text-2xl sm:text-3xl font-black text-white mb-10 uppercase tracking-tighter">{cat.title}</h4>
                       <ul className="space-y-6 px-2 sm:px-4">
                          {cat.rules.map((rule, idx) => (
                              <li key={idx} className="flex gap-4 text-blue-100/40 font-medium text-base sm:text-lg border-b border-white/5 pb-4 last:border-0">
                                  <CheckCircle2 size={24} className="text-royal shrink-0" />
                                  {rule}
                              </li>
                          ))}
                       </ul>
                  </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. EXAMINATION RULES SECTION */}
      <section id="exam" className="py-32 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-24">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Assessment Path</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight leading-[1.1] uppercase">Examination <br /><span className="text-royal underline decoration-4 decoration-royal/10">Rules</span></h2>
              <p className="text-lg text-blue-100/40 font-normal uppercase tracking-[0.2em] border-l-4 border-royal/10 pl-6 max-w-2xl">"Excellence is not a skill, it is an attitude in assessment."</p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <div className="bg-white/[0.03] rounded-[5rem] border border-white/5 p-12 md:p-24 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-110 transition-transform duration-1000" />
                <div className="space-y-20 relative z-10">
                  <div className="space-y-10">
                      <div className="flex items-center gap-6">
                          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-royal">
                              <Star size={28} />
                          </div>
                          <h4 className="text-3xl font-black text-white tracking-widest leading-none uppercase">Grading & Promotion</h4>
                      </div>
                      <div className="pl-20">
                          <p className="text-blue-100/50 font-medium text-lg italic leading-relaxed">
                              {siteConfig.examination.promotionMinMarks}
                          </p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
