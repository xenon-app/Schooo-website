
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

      {/* About Section - APS Legacy */}
      <section className="py-40 bg-navy relative overflow-hidden">
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
                  src="/SCHOOL IMAFW.png"
                  alt="School"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">The APS Legacy</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight uppercase leading-[1.1]">
                In the Heart <br /><span className="text-royal underline decoration-4 decoration-royal/10">of Bihar</span>
              </h2>
              <p className="text-lg text-blue-100/40 mb-12 leading-[1.6] font-normal border-l-4 border-royal/10 pl-8">
                {siteConfig.school.aboutShort}
              </p>

              <div className="grid sm:grid-cols-2 gap-10 mb-16">
                {[
                  { title: 'Modern Labs', icon: Monitor, desc: 'Digital excellence.' },
                  { title: 'Expert Faculty', icon: Users, desc: 'Mentorship first.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:bg-royal group-hover:text-white transition-all hover:scale-110">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-blue-100/40 text-[10px] font-bold uppercase tracking-widest">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="group relative flex items-center gap-4 bg-white/5 border border-white/10 text-white px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-royal transition-all">
                Full Story
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-navy py-40 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {siteConfig.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] text-center group hover:bg-white/10 transition-all border-b-8 border-b-royal"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-royal mx-auto mb-8 border border-white/10 group-hover:bg-royal group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums tracking-tight leading-none">{stat.value}</h3>
                  <p className="text-[10px] font-bold text-blue-100/30 uppercase tracking-[0.2em]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Class Facilities Section */}
      <section className="py-40 bg-navy relative overflow-hidden">
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
        className="py-60 bg-navy relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
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

        <div className="relative z-10 text-center pointer-events-none">
          <p className="text-royal font-bold uppercase tracking-[0.4em] text-sm mb-6">Visual Journey</p>
          <h2 className="text-7xl md:text-[10rem] font-bold text-white tracking-widest uppercase leading-none opacity-10">
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
