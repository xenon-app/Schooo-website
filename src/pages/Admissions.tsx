
import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Banknote,
  CheckCircle2,
  Calendar,
  CreditCard,
  Send,
  Star,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Upload,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

const Admissions = () => {
  const [isSubmitting, setIsSubmitting ] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleApplySubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Handle file attachment
      const file = formData.get('files') as File;
      let fileAttachment = null;
      let fileName = null;
      let mimeType = null;
      
      if (file && file.size > 0) {
        fileAttachment = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            // Get base64 part only
            resolve(result.split(',')[1]);
          };
          reader.onerror = () => reject('File read error');
          reader.readAsDataURL(file);
        });
        fileName = file.name;
        mimeType = file.type;
      }

      // Remove the file from formData visualization since we send it properly
      delete data.files;

      const API_URL = import.meta.env.PROD ? '/api/email' : 'http://localhost:5000/api/email';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'admissions-page',
          timestamp: new Date().toISOString(),
          fileAttachment,
          fileName,
          mimeType,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setErrorMsg(result.message || 'Submission failed');
      }
    } catch {
      setErrorMsg('Network error. Check backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white pt-[100px]">
      {/* Page Hero */}
      <section className="relative h-[60vh] sm:h-[80vh] flex flex-col justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
            alt="Admissions"
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
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-royal mb-4">Central Enrollment</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] uppercase">
              The <br />
              <span className="text-royal underline decoration-4 decoration-royal/10 tracking-tight self-start">Admissions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/40 font-normal leading-[1.6] max-w-2xl mt-10 border-l-4 border-royal/20 pl-6">
              Your pathway to educational excellence starts here. Session {siteConfig.school.admissionYear} now open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. ELIGIBILITY & PROCESS SECTION */}
      <section id="process" className="py-24 sm:py-32 bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="md:sticky md:top-[120px]">
                 <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Session {siteConfig.school.admissionYear}</p>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight uppercase leading-[1.1]">Admission <br /><span className="text-royal underline decoration-4 decoration-royal/10">Process</span></h2>
                <div className="space-y-12 pl-6 border-l-4 border-royal/10">
                   {siteConfig.admissionSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 group">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/[0.03] border border-white/5 text-royal rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl group-hover:bg-royal group-hover:text-white transition-all shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">{step.title}</h4>
                        <p className="text-blue-100/30 text-base sm:text-lg leading-relaxed font-medium mb-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
               <div className="bg-white/[0.03] p-8 sm:p-16 rounded-[3rem] sm:rounded-[4.5rem] border border-white/5 group hover:bg-white/10 transition-all">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-3xl flex items-center justify-center text-royal border border-white/10 mb-8 sm:mb-12 shadow-2xl group-hover:rotate-12 transition-transform">
                  <Calendar size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-8 sm:mb-10 tracking-tighter uppercase leading-none">Eligibility Criteria</h3>
                <div className="space-y-6">
                  {siteConfig.admissionEligibility.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 p-8 rounded-[2rem] border border-white/5 group/row hover:bg-royal transition-all">
                      <span className="text-blue-100/60 font-semibold text-xl group-hover/row:text-white transition-colors uppercase tracking-widest">{item.class}</span>
                      <span className="text-royal font-black text-xl group-hover/row:text-white transition-colors tabular-nums tracking-widest">{item.age}</span>
                    </div>
                  ))}
                </div>
              </div>

               <div className="bg-white/[0.03] p-8 sm:p-16 rounded-[3rem] sm:rounded-[4.5rem] border border-white/5 group hover:bg-white/10 transition-all border-b-8 border-b-royal">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-3xl flex items-center justify-center text-royal border border-white/10 mb-8 sm:mb-12 shadow-2xl group-hover:rotate-[-12deg] transition-transform">
                  <ClipboardCheck size={32} className="sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-8 sm:mb-10 tracking-tighter uppercase leading-none">Required Documents</h3>
                <ul className="space-y-8 pl-10 border-l-4 border-royal/10">
                  {siteConfig.admissionDocuments.map((doc, idx) => (
                    <li key={idx} className="text-blue-100/40 font-medium text-lg flex items-center gap-4 italic border-b border-white/5 pb-6 last:border-0 leading-none">
                      <CheckCircle2 size={24} className="text-royal shrink-0" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEE STRUCTURE SECTION */}
      <section id="fees" className="py-24 sm:py-32 bg-[#030712]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-4xl">
               <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Financial Transparency</p>
               <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight uppercase leading-[1.1]">Fee <br /><span className="text-royal underline decoration-4 decoration-royal/10">Structure</span></h3>
              <p className="text-blue-100/40 text-xl font-medium uppercase tracking-widest pl-6 border-l-4 border-royal/10 mb-1">Session {siteConfig.school.admissionYear} Official Scale</p>
            </div>
            <div className="flex items-center gap-4 px-10 py-6 bg-white/[0.03] border border-white/5 rounded-full text-white font-semibold text-base uppercase tracking-widest leading-none">
              <Banknote size={24} className="text-royal" /> Updated Policies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {siteConfig.fees.map((fee, idx) => (
              <div key={idx} className="group relative bg-white/[0.03] p-12 rounded-[3.5rem] border border-white/5 hover:bg-white/10 transition-all shadow-2xl shadow-navy/60 overflow-hidden text-center flex flex-col items-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-royal opacity-[0.05] rounded-bl-full group-hover:scale-110 transition-transform" />
                <p className="text-royal font-bold uppercase tracking-[0.4em] text-sm mb-8 leading-none tracking-widest">{fee.group}</p>
                <h4 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter leading-none border-b border-white/5 pb-6 w-full italic">Annual Fee Schedule</h4>
                <div className="space-y-6 w-full">
                  {Object.entries(fee).filter(([k]) => k !== 'category' && k !== 'group' && k !== 'age').map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center bg-white/5 px-6 py-4 rounded-2xl group-hover:bg-royal transition-all">
                      <span className="text-sm font-semibold uppercase tracking-widest text-blue-100/20 group-hover:text-white/60">{label.replace(/Total.*|Monthly.*/, '')}</span>
                      <span className="text-xl font-bold text-white tabular-nums leading-none tracking-widest">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-navy p-12 md:p-24 rounded-[5rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/[0.01] bg-[size:30px_30px] opacity-40 group-hover:scale-105 transition-transform" />
              <div className="relative z-10">
                <h4 className="font-black text-white text-3xl mb-12 tracking-tighter uppercase leading-none opacity-40 group-hover:opacity-100 transition-opacity italic">Important Notes</h4>
                <ul className="space-y-10 pl-6 border-l-4 border-royal/10">
                  {siteConfig.feeNotes.map((note, idx) => (
                    <li key={idx} className="text-blue-100/40 font-medium text-lg leading-relaxed italic border-b border-white/5 pb-6 last:border-0">{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-3xl p-12 md:p-24 rounded-[5rem] border border-white/5 relative group hover:bg-white/10 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-royal opacity-[0.02] rounded-bl-full group-hover:scale-110 transition-transform duration-1000" />
              <h4 className="font-black text-white text-3xl mb-12 tracking-tighter uppercase leading-none opacity-40 group-hover:opacity-100 transition-opacity italic">Bank Account</h4>
              <div className="space-y-8 relative z-10">
                {Object.entries(siteConfig.bankDetails).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-white/5 pb-6">
                    <span className="text-sm font-bold uppercase tracking-[0.4em] text-blue-100/30 w-32 shrink-0">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-xl font-semibold text-white tracking-widest text-right tabular-nums">{val}</span>
                  </div>
                ))}
                <div className="pt-10">
                  <button className="w-full bg-white/5 border border-white/10 py-6 rounded-3xl font-bold uppercase tracking-widest text-base hover:bg-royal hover:text-white transition-all group/btn flex items-center justify-center gap-4 group-hover:scale-105 transition-all">
                    Scan to Pay <CreditCard size={18} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATION INQUIRY SECTION */}
      <section id="apply" className="py-24 sm:py-32 bg-navy">
        <div className="container mx-auto px-6">
           <div className="bg-[#030712] p-8 sm:p-20 rounded-[3rem] sm:rounded-[5rem] border border-white/5 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-royal opacity-[0.02] rounded-bl-full blur-[100px]" />

            <div className="flex flex-col md:flex-row gap-16 items-start">
              {/* Form Left Side: Information */}
              <div className="max-w-md space-y-8">
                <div>
                   <p className="text-royal font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Admission Desk</p>
                   <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase leading-[1.1]">Inquiry <br /><span className="text-royal underline decoration-4 decoration-royal/10">Form</span></h3>
                  <p className="text-blue-100/30 text-lg font-medium leading-relaxed italic border-l-4 border-royal/10 pl-6">
                    "Submit your details for a priority evaluation. Our admissions team handles every inquiry with academic precision."
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/40 text-sm font-semibold uppercase tracking-widest">
                    <CheckCircle2 size={18} className="text-royal" /> Multi-Step Evaluation
                  </div>
                  <div className="flex items-center gap-4 text-white/40 text-sm font-semibold uppercase tracking-widest">
                    <CheckCircle2 size={18} className="text-royal" /> Priority Callback
                  </div>
                </div>
              </div>

              {/* Form Right Side: The Form */}
              <div className="flex-1 w-full relative">
                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/5 border border-white/10 rounded-[3rem] p-12 py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                      <CheckCircle2 size={48} className="text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Inquiry Received</h4>
                    <p className="text-blue-100/20 max-w-xs mx-auto mb-8 font-medium">Thank you for your interest. We will contact you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-royal font-black uppercase tracking-widest text-xs hover:underline">Send another inquiry</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    {errorMsg && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4 text-red-100/80 font-medium">
                        {errorMsg}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Student Name *</label>
                        <div className="relative group">
                          <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input required type="text" placeholder="Full name" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Parent Name *</label>
                        <div className="relative group">
                          <Briefcase size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input required type="text" placeholder="Guardian name" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Phone *</label>
                        <div className="relative group">
                          <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input required type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg tabular-nums" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Email *</label>
                        <div className="relative group">
                          <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input required type="email" placeholder="mail@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Seeking Grade *</label>
                        <div className="relative group">
                          <Star size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors pointer-events-none" />
                          <select required className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-10 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg appearance-none bg-[#030712] cursor-pointer">
                            <option value="" className="bg-[#030712]">Select</option>
                            {siteConfig.admissionClasses.map(c => <option key={c} value={c} className="bg-[#030712]">{c}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Upload Docs (Optional)</label>
                        <div className="relative group/up cursor-pointer">
                          <input name="files" type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                          <div className="w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-5 py-4 flex items-center justify-center gap-3 group-hover/up:border-royal group-hover/up:bg-white/10 transition-all">
                            <Upload size={16} className="text-royal/40 group-hover/up:text-royal" />
                            <span className="text-[10px] font-bold text-blue-100/20 group-hover/up:text-white uppercase tracking-widest">Attach Files</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Address *</label>
                      <div className="relative group">
                        <MapPin size={16} className="absolute left-5 top-5 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                        <textarea required rows={2} placeholder="Communication address" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg resize-none" />
                      </div>
                    </div>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-royal text-primary py-5 rounded-2xl font-black text-xl uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-cta-hover transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] group disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                      {!isSubmitting && <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-all opacity-40 group-hover:opacity-100" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

