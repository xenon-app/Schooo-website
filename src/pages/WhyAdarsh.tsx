import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  CheckCircle,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Zap,
  Star,
  Quote
} from 'lucide-react';
import AdmissionModal from '../components/AdmissionModal';
import { siteConfig } from '@/config/site';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const WhyAdarsh = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] pt-[100px] text-white">
      {/* Hero Section - High-Impact Branding */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] z-10" />
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
            alt="School background"
            className="w-full h-full object-cover opacity-10 grayscale scale-110"
          />
          {/* Decorative Glows */}
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-royal opacity-[0.05] rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-royal opacity-[0.03] rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl"
          >
            <motion.p variants={itemVariants} className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-6">The Institution of Tomorrow</motion.p>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase flex flex-col items-start">
              <span className="block">Why</span>
              <span className="text-royal underline decoration-4 decoration-royal/10 tracking-tight relative">
                Adarsh Public School?
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" as const }}
                  className="absolute bottom-2 left-0 h-[3px] bg-royal/40 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mt-12 sm:mt-20 max-w-5xl">
              <Quote size={80} className="absolute -top-12 -left-16 text-white/[0.03] rotate-12 hidden sm:block" />
              <p className="text-xl sm:text-2xl md:text-5xl text-blue-100/60 font-medium leading-[1.1] tracking-tight border-l-4 sm:border-l-[12px] border-royal/30 pl-6 sm:pl-16 py-4 bg-white/[0.01] rounded-[2rem] sm:rounded-r-[4rem] backdrop-blur-3xl shadow-2xl">
                "A pioneer in student-centric pedagogy in the heart of Bihar. We nurture the next generation of leaders through world-class education, <span className="text-white">holistic development</span>, and strong values."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Statistics Bar */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Years of Legacy", val: siteConfig.school.founded ? (new Date().getFullYear() - parseInt(siteConfig.school.founded)) : '25+' },
              { label: "Student Alumni", val: "5000+" },
              { label: "Expert Faculty", val: "100+" },
              { label: "Awards Won", val: "40+" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-3xl md:text-5xl font-bold text-white mb-2 tabular-nums group-hover:text-royal transition-colors">{stat.val}</p>
                <p className="text-xs font-medium text-blue-100/30 uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Identity Split */}
      <section className="py-24 sm:py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-royal opacity-[0.05] rounded-full blur-[100px] -translate-x-1/2" />
              <div className="relative rounded-[5rem] overflow-hidden border-8 border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
                  alt="Legacy"
                  className="w-full h-[600px] object-cover grayscale brightness-50 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
              </div>
              {/* Float Card */}
              <div className="absolute -bottom-10 -right-10 bg-royal p-10 rounded-[3rem] shadow-2xl hidden md:block border-4 border-white/10">
                <p className="text-4xl font-black text-white italic">Since {siteConfig.school.founded}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mt-2">The Golden Foundation</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Ancestry</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase leading-[1.1] mb-10">A tradition of <br /><span className="text-royal">Elite Learning</span></h2>
                <p className="text-lg text-blue-100/40 font-normal leading-[1.6] border-l-4 border-white/5 pl-8">
                  {siteConfig.school.aboutLong}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Regional Leaders in NEP 2020 Implementation",
                  "State-of-the-art Digital Labs in rural sectors",
                  "Consistent 100% Board Results",
                  "Holistic Mental & Character Development"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/5 group">
                    <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center text-royal border border-royal/20 group-hover:rotate-12 transition-transform">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - The Pillars */}
      <section className="py-24 sm:py-40 relative bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#030712] p-16 md:p-24 rounded-[6rem] border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center text-royal border border-white/10 mx-auto mb-16 group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <Target size={48} />
                </div>
                <h3 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase">Our Mission</h3>
                <p className="text-blue-100/30 text-2xl font-medium leading-relaxed italic border-l-4 border-royal/20 pl-8 text-left">
                  "{siteConfig.school.missionStatement}"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-[#030712] p-16 md:p-24 rounded-[6rem] border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center text-royal mb-16 border border-white/10 mx-auto group-hover:scale-110 group-hover:rotate-[-12deg] transition-all">
                  <Eye size={48} />
                </div>
                <h3 className="text-5xl font-black text-white mb-10 tracking-tighter uppercase">Our Vision</h3>
                <p className="text-blue-100/30 text-2xl font-medium leading-relaxed italic border-l-4 border-royal/20 pl-8 text-left">
                  "{siteConfig.school.visionStatement}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 sm:py-40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-6">The Foundation</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight uppercase">Core <br /><span className="text-royal">Values</span></h2>
            <div className="w-16 h-1 bg-royal/20 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Integrity', icon: ShieldCheck, desc: 'Ethical conduct at the core of learning.' },
              { title: 'Excellence', icon: Star, desc: 'Pursing mastery in every endeavor.' },
              { title: 'Innovation', icon: Zap, desc: 'Embracing change and creativity.' },
              { title: 'Compassion', icon: GraduationCap, desc: 'Developing heart along with the mind.' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center space-y-8"
              >
                <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-royal border border-white/10 group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-500">
                  <value.icon size={36} />
                </div>
                <h4 className="text-2xl font-black text-white tracking-widest leading-none uppercase">{value.title}</h4>
                <p className="text-blue-100/20 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Slider - Strategic Addition */}
      <section className="py-24 sm:py-40 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-4xl">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Academic Guardians</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight uppercase">Meet Our <br /><span className="text-royal">Elite Faculty</span></h2>
              <p className="text-lg text-blue-100/40 font-medium uppercase tracking-[0.2em] pl-6 border-l-4 border-royal/10">The architects of future leaders</p>
            </div>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-10 pb-10">
            {siteConfig.faculty.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[320px] group bg-[#030712] rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl transition-all hover:border-royal/30"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-10 relative">
                  <p className="text-royal font-bold uppercase tracking-widest text-xs mb-2">{member.role}</p>
                  <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">{member.name}</h4>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">{member.subject}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Marquee */}
      <TestimonialsSection
        title="Community Reflections"
        description="Voices of faith, excellence and progress from the Adarsh family."
        testimonials={siteConfig.testimonials.map((t) => ({
          author: {
            name: t.author,
            handle: t.role,
            avatar: t.img || `https://i.pravatar.cc/150?u=${t.author}`
          },
          text: t.quote
        }))}
      />

      {/* Strategic Call to Action */}
      <section className="py-24 sm:py-40 bg-navy relative">
        <div className="container mx-auto px-6">
          <div className="bg-[#030712] border border-white/5 rounded-[3rem] sm:rounded-[6rem] overflow-hidden relative p-8 sm:p-20 md:p-32 text-center group">
            <div className="absolute inset-0 bg-white/[0.01] bg-[size:40px_40px] opacity-40 group-hover:scale-105 transition-transform duration-[10s]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-[0.8] uppercase flex flex-col">
                <span>Experience</span>
                <span className="text-royal italic underline decoration-[10px] sm:decoration-[15px] decoration-royal/10 tracking-tighter">Excellence</span>
              </h2>
              <p className="text-blue-100/40 text-xl font-bold uppercase tracking-[0.3em] mb-20 leading-relaxed border-l-4 border-royal/20 pl-8 mx-auto w-fit">
                Admissions for {siteConfig.school.admissionYear} are now open.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-royal text-primary px-12 sm:px-24 py-6 sm:py-10 rounded-full font-black uppercase tracking-[0.2em] text-lg sm:text-2xl hover:bg-cta-hover transition-all shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 group/btn"
                >
                  Apply Now <ArrowUpRight className="inline ml-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default WhyAdarsh;
