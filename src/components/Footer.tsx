import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ChevronRight,
  Send,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy pt-24 sm:pt-40 pb-12 overflow-hidden border-t border-white/5">
      <FooterBackgroundGradient />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-12 pb-20 md:pb-32 border-b border-white/5">
          
          {/* Column 1: School Identity */}
          <div className="space-y-12">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-royal border border-white/10 group-hover:border-royal/50 transition-all shadow-2xl">
                <GraduationCap size={28} className="group-hover:scale-110 transition-transform md:hidden" />
                <GraduationCap size={36} className="group-hover:scale-110 transition-transform hidden md:block" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-widest leading-none uppercase">
                   Adarsh <br /><span className="text-royal">Public</span> School
                </h2>
                <p className="text-[10px] font-bold text-blue-100/30 uppercase tracking-[0.4em] mt-3">
                  Enlightening Minds
                </p>
              </div>
            </Link>
            <p className="text-blue-100/40 text-sm leading-relaxed border-l-4 border-royal/10 pl-8 max-w-sm italic font-medium">
              "Providing a world-class educational foundation in the heart of Bihar since {siteConfig.school.founded}."
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, url: siteConfig.social.facebook },
                { icon: Instagram, url: siteConfig.social.instagram },
                { icon: Twitter, url: siteConfig.social.twitter },
                { icon: Youtube, url: siteConfig.social.youtube }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-royal transition-all border border-white/5 group"
                >
                  <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-royal font-bold uppercase tracking-[0.4em] text-[10px] mb-8 md:mb-12 opacity-60">Global Portals</h4>
            <ul className="space-y-6">
              {[
                { name: 'About Adarsh', path: '/about' },
                { name: 'Courses Offered', path: '/courses' },
                { name: 'Admissions 2025', path: '/admissions' },
                { name: 'Faculty Members', path: '/faculty' },
                { name: 'Campus Life', path: '/campus' },
                { name: 'Contact Desk', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-blue-100/30 hover:text-royal text-sm font-bold uppercase tracking-widest flex items-center gap-3 group transition-all"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-royal" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-12">
            <h4 className="text-royal font-bold uppercase tracking-[0.4em] text-[10px] mb-8 md:mb-12 opacity-60">Reach Us</h4>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/5 group-hover:bg-royal group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <p className="text-blue-100/40 text-sm leading-relaxed max-w-[200px] italic">
                   {siteConfig.contact.address}
                </p>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-royal border border-white/5 group-hover:bg-royal group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                   {siteConfig.contact.phone.map(p => (
                     <a key={p} href={`tel:${p}`} className="block text-blue-100/30 hover:text-white text-sm font-bold tabular-nums tracking-widest mb-1 transition-colors">
                       {p}
                     </a>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter/Updates */}
          <div className="space-y-12">
             <h4 className="text-royal font-bold uppercase tracking-[0.4em] text-[10px] mb-8 md:mb-12 opacity-60">Admission Help</h4>
             <div className="p-10 bg-white/5 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-royal/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white text-lg font-bold uppercase tracking-tighter mb-6 leading-none">Need Support?</p>
                <Link to="/contact">
                  <button className="w-full py-5 bg-royal text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-royal/20">
                    Get in Touch <Send size={14} />
                  </button>
                </Link>
             </div>
             <p className="text-[10px] text-blue-100/20 uppercase tracking-[0.3em] font-bold leading-relaxed">Response within 24 working hours.</p>
          </div>
        </div>

        {/* Big Hover Brand Text */}
        <div className="py-20 flex flex-col items-center">
           <div className="w-full max-w-6xl">
              <TextHoverEffect text="ADARSH" className="h-24 sm:h-40 md:h-80" />
           </div>
           
           <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 mt-20 pt-12 border-t border-white/5">
               <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <p className="text-[10px] sm:text-xs font-bold text-blue-100/20 uppercase tracking-[0.4em]">© {currentYear} Adarsh Public School</p>
                <div className="h-4 w-px bg-white/5 hidden sm:block" />
                <div className="flex items-center gap-4 sm:gap-8">
                  <Link to="/academics" className="text-[10px] sm:text-xs font-bold text-blue-100/20 hover:text-royal uppercase tracking-widest transition-colors">Privacy Policy</Link>
                  <Link to="/academics" className="text-[10px] sm:text-xs font-bold text-blue-100/20 hover:text-royal uppercase tracking-widest transition-colors">Disclaimer</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <p className="text-[10px] font-bold text-blue-100/10 uppercase tracking-[0.5em] flex items-center gap-2">
                    Verified CBSE Institutional Node <ExternalLink size={10} />
                 </p>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
