import { useState } from 'react';
import type { FormEvent, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ApiResponse } from '../types/api.ts';
import { X, Send, GraduationCap, CheckCircle2, Upload, User, Phone, Mail, MapPin, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdmissionModal: FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');

  const handleSubmit = async (e: FormEvent) => {
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
          formType: 'admission-modal',
          timestamp: new Date().toISOString(),
          fileAttachment,
          fileName,
          mimeType,
          ...data,
        }),
      });

      const result: ApiResponse = await response.json();

      if (result.success) {
        setStep(2);
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/95 backdrop-blur-3xl z-[300]"
          />

          <div className="fixed inset-0 flex items-center justify-center p-4 z-[310] pointer-events-none">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-[#030712] w-full h-full sm:h-auto sm:max-w-3xl sm:rounded-[3rem] overflow-hidden shadow-[0_100px_200px_-50px_rgba(3,7,18,1)] pointer-events-auto relative border-t sm:border border-white/10"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 sm:p-2 bg-white/5 hover:bg-royal hover:text-white rounded-xl transition-all z-[130] group border border-white/10"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform opacity-40 group-hover:opacity-100 sm:w-5 sm:h-5" />
              </button>

              {step === 1 ? (
                <div className="p-6 sm:p-8 md:p-12 relative overflow-hidden h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto no-scrollbar">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-royal opacity-[0.03] rounded-bl-full animate-pulse blur-[80px]" />
                  
                  <div className="flex items-center gap-6 mb-8 sm:mb-10 relative z-10 pr-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-royal shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-royal opacity-0 group-hover:opacity-20 transition-opacity" />
                      <GraduationCap size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <p className="text-royal font-black uppercase tracking-[0.4em] text-[10px] mb-1 leading-none opacity-60">Admission Desk</p>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase leading-none">Inquiry Form</h3>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-6 text-red-100/80">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Student Name *</label>
                        <div className="relative group">
                          <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input name="studentName" required type="text" placeholder="Full name" className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-6 py-4 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Parent Name *</label>
                        <div className="relative group">
                          <Briefcase size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input name="parentName" required type="text" placeholder="Guardian name" className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-6 py-4 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Phone Number *</label>
                        <div className="relative group">
                          <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input name="phone" required type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-6 py-4 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg tabular-nums" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Email ID *</label>
                        <div className="relative group">
                          <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                          <input name="email" required type="email" placeholder="example@mail.com" className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-6 py-4 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                      <div className="space-y-4 md:col-span-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-100/20 ml-2">Seeking Class *</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                          {['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((grade) => {
                            const isSelected = selectedGrade === grade;
                            return (
                              <button
                                key={grade}
                                type="button"
                                onClick={() => setSelectedGrade(grade)}
                                className={cn(
                                  "py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border",
                                  isSelected 
                                    ? "bg-royal border-royal text-primary shadow-[0_10px_20px_rgba(37,99,235,0.3)]" 
                                    : "bg-white/5 border-white/5 text-white/40 hover:border-white/20 hover:bg-white/10"
                                )}
                              >
                                {grade}
                              </button>
                            );
                          })}
                        </div>
                        <input type="hidden" name="grade" value={selectedGrade} required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Documents (Optional)</label>
                        <div className="relative group/up cursor-pointer">
                          <input type="file" name="files" className="absolute inset-0 opacity-0 cursor-pointer z-20" />
                          <div className="w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-5 py-4 flex items-center justify-center gap-3 group-hover/up:border-royal group-hover/up:bg-white/10 transition-all">
                            <Upload size={16} className="text-royal/40 group-hover/up:text-royal" />
                            <span className="text-[10px] font-bold text-blue-100/20 group-hover/up:text-white uppercase tracking-widest">Attach Files</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/20 ml-2">Residential Address *</label>
                      <div className="relative group">
                        <MapPin size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-100/20 group-focus-within:text-royal transition-colors" />
                        <textarea name="address" required rows={2} placeholder="Full communication address" className="w-full bg-white/5 border border-white/5 rounded-xl pl-12 pr-6 py-4 placeholder:text-blue-100/10 focus:outline-none focus:border-royal focus:bg-white/10 transition-all text-white text-base md:text-lg resize-none" />
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
                </div>
              ) : step === 2 ? (
                <div className="p-12 text-center py-20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/[0.01] bg-[size:20px_20px] opacity-40" />
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 10 }}
                    className="w-24 h-24 bg-green-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/20 relative z-10"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase leading-none relative z-10">Application Sent</h3>
                  <p className="text-blue-100/30 text-base font-medium leading-relaxed max-w-xs mx-auto mb-12 italic border-l-4 border-royal/10 pl-5 relative z-10">
                    "Our counseling desk will reach out within 24 business hours."
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-white/5 border border-white/10 text-white px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-royal transition-all shadow-2xl relative z-10"
                  >
                    Close Window
                  </button>
                </div>
              ) : null}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
