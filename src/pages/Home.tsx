
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Award,
  Monitor,
  Trophy,
  Microscope,
  Truck,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import AdmissionModal from '../components/AdmissionModal';
import PremiumHero from '@/components/blocks/premium-hero';
import { siteConfig } from '@/config/site';
import { TestimonialSlider } from '@/components/ui/testimonial-slider-1';
import { ImageTrail } from '@/components/ui/image-trail';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

// Icon map for stats (order matches siteConfig.stats)
const statIcons = [Users, GraduationCap, Award, Trophy];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Leadership Data
  const leadershipReviews = siteConfig.leadership.map((l, i) => ({
    id: i,
    name: l.name,
    affiliation: l.role,
    quote: l.msg,
    imageSrc: l.img,
    thumbnailSrc: l.img
  }));

  // Testimonial Marquee Data
  const marqueeTestimonials = siteConfig.testimonials.map((t) => ({
    author: {
      name: t.author,
      handle: t.role,
      avatar: t.img || `https://i.pravatar.cc/150?u=${t.author}`
    },
    text: t.quote
  }));

  return (
    <div className="overflow-x-hidden bg-navy min-h-screen">
      <PremiumHero
        onApply={() => setIsModalOpen(true)}
        onContact={() => navigate('/contact')}
      />

      {/* About Section - APS Legacy / Best School in Murliganj SEO */}
      <section className="py-24 sm:py-40 bg-navy relative overflow-hidden" id="about">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[5rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-x-1 hover:skew-x-0 transition-all duration-1000 group">
                <img
                  src="/school_campus.jpg"
                  alt="Best CBSE School in Murliganj - Campus"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Shaping Bright Futures Since {siteConfig.school.founded}</p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase leading-[1]">
                Top English Medium <br /><span className="text-royal underline decoration-4 decoration-royal/10">School in Murliganj</span>
              </h2>
              <p className="text-lg text-blue-100/40 mb-12 leading-[1.6] font-normal border-l-4 border-royal/10 pl-8">
                Adarsh Public School is the premier <strong>CBSE school in Murliganj</strong>, Bihar, offering a 100% CBSE-aligned English medium curriculum from Play School to Class 12. As the <strong>best school in Murliganj</strong>, we nurture young minds with modern education, strong values, and state-of-the-art facilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {[
                  { title: 'CBSE Affiliated', icon: GraduationCap, desc: '100% CBSE Aligned.' },
                  { title: 'Smart Classes', icon: Monitor, desc: 'Digital Excellence.' },
                  { title: 'Mentorship', icon: Users, desc: 'Expert Faculty.' },
                  { title: '100% Results', icon: Award, desc: 'Board Excellence.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:bg-royal group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-blue-100/30 text-[9px] font-bold uppercase tracking-widest leading-none">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative flex items-center gap-4 bg-royal text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-royal/90 transition-all shadow-xl shadow-royal/20"
                >
                  Apply 2026-27
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/admissions')}
                  className="group relative flex items-center gap-4 bg-white/10 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
                >
                  View Fees
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - SEO Optimized */}
      <section className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <p className="text-royal font-black uppercase tracking-[0.4em] text-xs mb-6">Murliganj's Choice</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-10">
              Why Parents Trust the <span className="text-royal">Best School in Murliganj</span>
            </h2>
            <p className="text-xl text-white/30 font-medium leading-relaxed italic border-l-4 border-royal/10 pl-10">
              "We don't just teach subjects; we build character, confidence, and curiosity in the heart of Murliganj."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Smart Classrooms", desc: "Interactive digital learning environments with modern multimedia tools.", icon: Monitor },
              { title: "Expert Faculty", desc: "Mentorship from 50+ experienced teachers dedicated to student success.", icon: Users },
              { title: "100% Board Results", desc: "Our proven track record of academic excellence in CBSE examinations.", icon: Award },
              { title: "Safe Campus", desc: "CCTV-monitored campus with 24/7 security near Murliganj police station.", icon: Trophy },
              { title: "Transport Facility", desc: "GPS-enabled buses serving Murliganj, Madhepura, and nearby areas.", icon: Truck },
              { title: "Innovation Labs", desc: "State-of-the-art STEM and Computer labs for future-ready skills.", icon: Microscope },
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy/50 border border-white/5 p-10 rounded-[3rem] hover:border-royal/50 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-royal mb-8 group-hover:bg-royal group-hover:text-white transition-all shadow-xl">
                  <reason.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4">{reason.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Ultra Premium */}
      <section className="bg-navy py-12 sm:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {siteConfig.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  {/* Outer Glow Effect */}
                  <div className="absolute -inset-1 bg-royal/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative h-full bg-[#030712] border border-white/5 rounded-[3rem] p-8 sm:p-10 text-center flex flex-col items-center justify-center transition-all duration-500 hover:border-royal/30 hover:-translate-y-2 overflow-hidden">
                    {/* Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-royal/10 rounded-tl-[4rem] group-hover:bg-royal/20 transition-all blur-3xl opacity-50" />
                    
                    {/* Icon Bubble */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-royal mb-8 border border-white/10 group-hover:scale-110 transition-transform shadow-2xl relative z-10">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-5xl sm:text-6xl font-black text-white tabular-nums tracking-tighter leading-none mb-3">
                        {stat.value}
                      </h3>
                      <div className="h-1 w-12 bg-royal/20 mx-auto rounded-full mb-4 group-hover:w-16 group-hover:bg-royal/50 transition-all" />
                      <p className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-[0.4em] leading-tight max-w-[15ch] mx-auto group-hover:text-white/60 transition-colors">
                        {stat.label}
                      </p>
                    </div>

                    {/* Bottom Curved Accent */}
                    <div className="absolute -bottom-1 inset-x-12 h-2 bg-gradient-to-r from-transparent via-royal to-transparent blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Class Facilities Section */}
      <section className="py-24 sm:py-40 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Infrastructure</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">World Class <br /><span className="text-royal">Facilities</span></h2>
              <p className="text-lg text-blue-100/40 font-normal leading-[1.6] border-l-4 border-royal/20 pl-8 max-w-xl">
                Our campus is designed to inspire. From advanced science labs to Olympic-standard sports grounds, we provide everything your child needs to excel.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: 'STEM Lab', icon: Microscope, color: 'text-royal' },
                { title: 'Tech Hub', icon: Monitor, color: 'text-royal' },
                { title: 'Sports Ground', icon: Trophy, color: 'text-royal' },
                { title: 'Transport', icon: Truck, color: 'text-royal' }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#030712] p-10 rounded-[3rem] border border-white/5 hover:border-royal/30 transition-all group"
                >
                  <feat.icon size={40} className={`${feat.color} mb-8 group-hover:scale-110 transition-transform`} />
                  <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">{feat.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: Leadership Console (Slider) ── */}
      <section className="bg-navy relative z-10">
        <TestimonialSlider
          reviews={leadershipReviews}
          title="Principal Desk"
        />
      </section>

      {/* ── NEW: Interactive Gallery (Image Trail) ── */}
      <section
        className="py-32 sm:py-60 bg-navy relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] md:min-h-screen"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={galleryRef as any}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <ImageTrail containerRef={galleryRef as any}>
            {siteConfig.gallery.map((img, i) => (
              <div key={i} className="w-24 h-24 md:w-40 md:h-40 relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl skew-x-2">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </ImageTrail>
        </div>

        <div className="relative z-10 text-center pointer-events-none px-6">
          <p className="text-royal font-bold uppercase tracking-[0.4em] text-[10px] sm:text-sm mb-6">Visual Journey</p>
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-bold text-white tracking-widest uppercase leading-none opacity-10">
            Our <br /><span className="text-royal">Memories</span>
          </h2>
          <div className="mt-20 flex items-center justify-center gap-4">
            <Zap className="text-royal animate-pulse" />
            <p className="text-blue-100/30 uppercase tracking-[0.5em] text-xs font-bold leading-none">Move cursor to explore album</p>
          </div>
        </div>
      </section>

      {/* ── NEW: Student Social Hub (Marquee Testimonials) ── */}
      <TestimonialsSection
        title="Trusted by Students Worldwide"
        description="Join thousands of success stories currently being written at Adarsh Public School."
        testimonials={marqueeTestimonials}
      />

      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
