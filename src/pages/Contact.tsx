
import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import type { ApiResponse } from '@/types/api.ts';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  AlertCircle,
  ArrowUpRight,
  User
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    setFormStatus('submitting');
    setErrorMsg('');

    try {
      const API_URL = import.meta.env.PROD ? '/api/email' : 'http://localhost:5000/api/email';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          timestamp: new Date().toISOString(),
          ...data,
        }),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
        setErrorMsg(result.message || 'Submission failed. Try again.');
      }
    } catch {
      setFormStatus('error');
      setErrorMsg('Network error. Check if backend is running.');
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white pt-[100px] overflow-hidden">
      {/* Page Hero - High Contrast Midnight */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-10 grayscale translate-y-[-10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-10"></div>
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
            <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">Constant Support</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">
              Get in <br />
              <span className="text-royal underline decoration-4 decoration-royal/10 self-start">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/40 font-normal leading-[1.6] max-w-2xl mt-10 border-l-4 border-royal/20 pl-6">
                Explore the future of education with us. Our doors are always open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid & Form Section */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-24"
            >
              <div>
                <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-4">The Campus</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-[1.1] uppercase">Visit Our <br />Excellence</h2>
                <p className="text-lg text-blue-100/40 font-normal leading-[1.6] max-w-md border-l-4 border-royal/10 pl-6">
                  "Experience our vibrant learning environment firsthand. Admissions open for current session."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                {[
                  { icon: MapPin, title: 'Location', desc: siteConfig.contact.address },
                  { icon: Phone, title: 'Helpline', desc: siteConfig.contact.phone.join(' · ') },
                  { icon: Mail, title: 'Email Us', desc: siteConfig.contact.email[0] },
                  { icon: Clock, title: 'Office', desc: siteConfig.contact.officeHours }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[4rem] group hover:bg-white/10 transition-all border-b-8 border-b-royal relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-110 transition-transform" />
                    <div className="w-16 h-16 bg-white/5 text-royal rounded-[1.5rem] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-royal group-hover:text-white transition-all">
                       <item.icon size={32} />
                    </div>
                    <h4 className="text-xl font-black text-white mb-3 tracking-widest uppercase leading-none">{item.title}</h4>
                    <p className="text-blue-100/40 font-medium text-sm leading-relaxed overflow-hidden text-ellipsis">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-navy p-10 rounded-[3rem] flex items-start gap-10 border border-white/5 border-l-8 border-l-royal relative group">
                 <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/10 shrink-0 group-hover:rotate-12 transition-transform">
                     <AlertCircle size={28} />
                 </div>
                 <div>
                    <h4 className="font-black text-white text-xl mb-2 tracking-tight uppercase leading-none">Security Notice</h4>
                    <p className="text-blue-100/30 text-lg leading-relaxed italic">"Valid identification required for campus entry. Appointment recommended for campus tours."</p>
                 </div>
              </div>
            </motion.div>

            {/* Premium Message Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] backdrop-blur-2xl p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden hover:bg-white/[0.05] transition-all shadow-[0_100px_200px_-40px_rgba(3,7,18,0.8)]"
            >
              {formStatus === 'success' ? (
                 <div className="text-center py-20">
                    <div className="w-32 h-32 bg-green-500 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-green-500/20 animate-bounce">
                       <CheckCircle size={72} />
                    </div>
                    <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Sent!</h3>
                    <p className="text-xl text-blue-100/40 font-medium mb-16 max-w-xs mx-auto leading-relaxed italic">
                       "Thank you for reaching out. We respond to inquiries within 24 business hours."
                    </p>
                    <button onClick={() => setFormStatus('idle')} className="bg-royal text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all">New Message</button>
                 </div>
              ) : formStatus === 'error' ? (
                 <div className="text-center py-20">
                    <div className="w-32 h-32 bg-red-500 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-red-500/20 animate-bounce">
                       <AlertCircle size={72} />
                    </div>
                    <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Error!</h3>
                    <p className="text-xl text-red-100/80 font-medium mb-16 max-w-xs mx-auto leading-relaxed">
                       {errorMsg}
                    </p>
                    <button onClick={() => setFormStatus('idle')} className="bg-royal text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all">Try Again</button>
                 </div>
              ) : (
                 <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-12 bg-royal"></div>
                      <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs">Direct Enquiry</p>
                    </div>
                    <h3 className="text-5xl font-black text-white mb-16 tracking-tight uppercase leading-[1.1]">
                      Drop Us <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-blue-400">A Line</span>
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid sm:grid-cols-2 gap-8">
                          <div className="space-y-3 group/input">
                             <label className="flex items-center gap-2 text-[10px] uppercase font-black text-blue-100/40 tracking-[0.3em] pl-4 group-focus-within/input:text-royal transition-colors">
                               <User size={14} /> Your Name
                             </label>
                             <div className="relative">
                               <input name="name" required type="text" placeholder="John Doe" className="w-full bg-[#030712]/50 backdrop-blur-md border border-white/10 rounded-[2rem] px-8 py-5 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:ring-4 focus:ring-royal/10 transition-all font-bold text-white text-lg" />
                             </div>
                          </div>
                          <div className="space-y-3 group/input">
                             <label className="flex items-center gap-2 text-[10px] uppercase font-black text-blue-100/40 tracking-[0.3em] pl-4 group-focus-within/input:text-royal transition-colors">
                               <Mail size={14} /> Email ID
                             </label>
                             <div className="relative">
                               <input name="email" required type="email" placeholder="john@aps.edu" className="w-full bg-[#030712]/50 backdrop-blur-md border border-white/10 rounded-[2rem] px-8 py-5 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:ring-4 focus:ring-royal/10 transition-all font-bold text-white text-lg" />
                             </div>
                          </div>
                       </div>
                       <div className="space-y-3 group/input">
                          <label className="flex items-center gap-2 text-[10px] uppercase font-black text-blue-100/40 tracking-[0.3em] pl-4 group-focus-within/input:text-royal transition-colors">
                            <AlertCircle size={14} /> Message Subject
                          </label>
                          <div className="relative">
                             <input name="subject" required type="text" placeholder="Enrollment Query" className="w-full bg-[#030712]/50 backdrop-blur-md border border-white/10 rounded-[2rem] px-8 py-5 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:ring-4 focus:ring-royal/10 transition-all font-bold text-white text-lg" />
                          </div>
                       </div>
                       <div className="space-y-3 group/input">
                          <label className="flex items-center gap-2 text-[10px] uppercase font-black text-blue-100/40 tracking-[0.3em] pl-4 group-focus-within/input:text-royal transition-colors">
                            <MessageCircle size={14} /> Enquiry Content
                          </label>
                          <div className="relative">
                             <textarea name="message" required rows={5} placeholder="How can we help your journey?" className="w-full bg-[#030712]/50 backdrop-blur-md border border-white/10 rounded-[2rem] px-8 py-6 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:ring-4 focus:ring-royal/10 transition-all font-medium text-white text-lg resize-none" />
                          </div>
                       </div>
                       
                       <button type="submit" disabled={formStatus === 'submitting'} className="relative w-full overflow-hidden bg-gradient-to-r from-royal to-blue-600 text-white mt-8 py-6 rounded-full font-black uppercase tracking-[0.4em] text-sm md:text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.5)] flex items-center justify-center group disabled:opacity-70 disabled:hover:scale-100">
                          <span className="relative z-10 flex items-center gap-4">
                            {formStatus === 'submitting' ? 'Processing...' : 'Send Message'} 
                            {formStatus !== 'submitting' && <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                          </span>
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                       </button>
                    </form>
                 </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Map - High Tech Dark Style */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center max-w-4xl mx-auto mb-24">
              <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-6">Interactive Map</p>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight uppercase leading-[1.1]">Find us <span className="text-royal underline decoration-4 decoration-royal/10">Easily</span></h3>
              <p className="text-blue-100/40 text-lg font-medium uppercase tracking-[0.2em] leading-relaxed">Central Campus · Sitamarhi · Bihar</p>
           </div>
           
           <div className="w-full h-[700px] rounded-[5rem] overflow-hidden border-[15px] border-white/5 shadow-2xl relative group bg-navy">
              <iframe 
                src={siteConfig.contact.mapEmbed} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="group-hover:filter-none transition-all duration-1000 blur-[4px] hover:blur-0 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-10 px-10 pointer-events-none">
                 <div className="bg-navy/80 backdrop-blur-3xl p-6 rounded-3xl border border-white/5 inline-flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-sm">
                    <MapPin size={16} className="text-royal" /> Central HQ Campus
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Floating Action */}
      <section className="py-40 bg-white/[0.02] border-t border-white/5">
         <div className="container mx-auto px-6 text-center">
            <p className="text-royal font-bold uppercase tracking-[0.3em] text-xs mb-10">Instant Help</p>
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tight uppercase leading-[1.1]">Need <br />Immediate <br />Assistance?</h3>
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-10 bg-[#25D366] text-white px-20 py-10 rounded-full font-black uppercase tracking-widest text-2xl hover:scale-110 transition-all shadow-[0_50px_100px_-20px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle size={48} className="group-hover:rotate-12 transition-transform opacity-30 group-hover:opacity-100" />
              Chat on WhatsApp
              <ArrowUpRight size={36} className="opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
         </div>
      </section>
    </div>
  );
};

export default Contact;

