import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Share2, 
  Clock,
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';

const BLOG_CONTENT = {
  'best-school-murliganj': {
    title: 'Why Adarsh Public is the Best English Medium School in Murliganj',
    subtitle: 'Excellence in Bihar Education',
    date: 'March 20, 2026',
    author: 'Principal Desk',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    readTime: '6 min read',
    content: `
      <h2>Setting the Standard in Murliganj</h2>
      <p>Choosing the right school is the most critical decision for any parent. In the heart of Murliganj, Madhepura, Adarsh Public School (APS) has stood as a beacon of academic excellence for over 25 years. But what specifically makes us the <strong>best school in Murliganj</strong>?</p>
      
      <h3>1. Holistic CBSE Curriculum</h3>
      <p>As the premier <strong>CBSE school in Murliganj</strong>, our curriculum doesn't just focus on rote learning. We integrate modern pedagogical techniques that encourage critical thinking. Our students consistently achieve 100% board results, a testament to our dedicated faculty.</p>
      
      <h3>2. Infrastructure That Inspires</h3>
      <p>We believe that environment dictates the quality of learning. From our high-speed satellite-enabled labs to our lush green sports grounds, every corner of APS is designed to nurture the mind and body. This makes us the top choice for parents seeking an <strong>english medium school in Murliganj</strong>.</p>
      
      <h3>3. Character Building</h3>
      <p>Education at APS goes beyond books. We emphasize moral values, discipline, and leadership skills, ensuring our students are ready to lead the future of Bihar and India.</p>
    `
  },
  'cbse-admission-tips': {
    title: 'CBSE School Admission in Murliganj: A Complete Guide for Parents',
    subtitle: 'Enrolling for 2026-27',
    date: 'March 18, 2026',
    author: 'Admissions Desk',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop',
    readTime: '5 min read',
    content: `
      <h2>Your Roadmap to APS Admission</h2>
      <p>Are you looking for <strong>admission open in Murliganj school</strong>? The 2026-27 session at Adarsh Public School is now accepting applications. Here is everything you need to know to secure your child's future at the <strong>best school in Murliganj</strong>.</p>
      
      <h3>Key Dates & Deadlines</h3>
      <p>Admissions for Play Group to Class 12 are currently open. We recommend early registration to avoid the last-minute rush, as we maintain a strict student-to-teacher ratio for quality assurance.</p>
      
      <h3>Required Documentation</h3>
      <p>To ensure a smooth process, please have the following ready:</p>
      <ul>
        <li>Birth Certificate of the student.</li>
        <li>Previous School Transfer Certificate (TC).</li>
        <li>Passport-sized photographs.</li>
        <li>Aadhar card of parents and student.</li>
      </ul>
      
      <h3>The Evaluation Process</h3>
      <p>Admission is based on a merit-based evaluation and a personal interaction. Our goal is to understand each child's unique potential rather than just their academic history.</p>
    `
  },
  'digital-learning-bihor': {
    title: 'How Smart Classes Are Changing Education in Rural Bihar',
    subtitle: 'Innovation at APS Murliganj',
    date: 'March 15, 2026',
    author: 'Tech Faculty',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    readTime: '4 min read',
    content: `
      <h2>Bridging the Digital Divide</h2>
      <p>In the evolving landscape of 21st-century education, digital literacy is no longer an option—it's a necessity. Adarsh Public School is leading the way by integrating advanced smart class technology in the heart of Murliganj.</p>
      
      <h3>Visualizing Complex Concepts</h3>
      <p>Our multimedia-equipped classrooms allow students to visualize abstract scientific theories and historical events. This interactive approach significantly improves retention and interest compared to traditional chalkboard methods.</p>
      
      <h3>STEM and Innovation Labs</h3>
      <p>Beyond classrooms, our <strong>computer lab in Murliganj</strong> campus provides hands-on coding and robotics training, preparing our students for global careers from a local foundation.</p>
    `
  },
  'extracurricular-growth': {
    title: 'Beyond Books: Developing Future Leaders in Murliganj Through Sports',
    subtitle: 'The APS Athletic Legacy',
    date: 'March 12, 2026',
    author: 'Admin Desk',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    readTime: '5 min read',
    content: `
      <h2>Physical Excellence Meets Academic Rigor</h2>
      <p>At Adarsh Public School, we believe a healthy mind resides in a healthy body. Our sports program is a cornerstone of our identity as the <strong>best school in Murliganj</strong>.</p>
      
      <h3>Professional Coaching</h3>
      <p>With 25+ years of excellence, we have developed one of the finest sports infrastructures in Madhepura district. Our students receive professional training in Cricket, Football, Volleyball, and Athletics.</p>
      
      <h3>The Team Spirit</h3>
      <p>Sports at APS aren't just about winning medals; they're about learning teamwork, resilience, and the humility of victory and defeat. These are the qualities that build true leaders.</p>
    `
  },
  'scholarships-murliganj': {
    title: 'Scholarship Opportunities for Local Students in Madhepura District',
    subtitle: 'Nurturing Local Talent',
    date: 'March 10, 2026',
    author: 'Scholarship Board',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0fc642?q=80&w=2070&auto=format&fit=crop',
    readTime: '6 min read',
    content: `
      <h2>APS Merit Scholarship Program</h2>
      <p>Adarsh Public School is committed to ensuring that financial constraints never hinder a bright child's future. Our scholarship program is specifically designed to support the talented youth of Murliganj and Madhepura.</p>
      
      <h3>Merit-Based Awards</h3>
      <p>We offer up to 100% tuition fee waivers for students who demonstrate exceptional academic or athletic prowess. Our annual entrance exam determines eligibility for these prestigious awards.</p>
      
      <h3>Empowering Local Communities</h3>
      <p>Our focus remains on the local residents of Murliganj, empowering the next generation of Bihar's leaders with world-class education at an accessible foundation.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_CONTENT[id as keyof typeof BLOG_CONTENT];

  if (!post) {
      return (
        <div className="min-h-screen bg-navy flex items-center justify-center pt-[100px] gap-8 flex-col">
            <h1 className="text-4xl font-black text-white/20 uppercase tracking-widest leading-none">Post Not Found</h1>
            <Link to="/blog" className="text-royal font-bold uppercase tracking-widest text-xs hover:underline">Back to Insights</Link>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-navy pt-[120px] pb-32 text-white">
      {/* Article Hero */}
      <section className="relative px-6">
        <div className="container mx-auto">
          <Link 
            to="/blog"
            className="group inline-flex items-center gap-4 text-royal font-black uppercase tracking-widest text-xs mb-16 hover:bg-white/5 py-4 px-8 rounded-full transition-all border border-royal/10"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl"
          >
            <div className="flex flex-wrap items-center gap-8 mb-10 text-[10px] sm:text-xs font-black text-white/30 uppercase tracking-[0.3em]">
               <span className="flex items-center gap-3"><Calendar size={14} className="text-royal" /> {post.date}</span>
               <span className="flex items-center gap-3"><User size={14} className="text-royal" /> {post.author}</span>
               <span className="flex items-center gap-3"><Clock size={14} className="text-royal" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
               {post.title.split(':').map((s, i) => (
                 <span key={i} className={i === 1 ? 'text-royal block mt-4' : ''}>{s}</span>
               ))}
            </h1>
            
            <p className="text-xl sm:text-2xl text-royal font-medium uppercase tracking-widest border-l-4 border-royal/20 pl-10 mb-20 italic">
               "{post.subtitle}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             className="relative aspect-[21/9] w-full rounded-[4.5rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-x-1"
           >
              <img src={post.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-navy to-transparent">
                  <p className="text-white/20 font-black uppercase tracking-[0.5em] text-xs">Adarsh Public School Murliganj · Official Feed</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 relative">
         <div className="container mx-auto flex flex-col lg:flex-row gap-24">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="flex-grow max-w-4xl prose prose-invert prose-royal prose-xl"
            >
               <div 
                 dangerouslySetInnerHTML={{ __html: post.content }} 
                 className="blog-content-container text-blue-100/40 font-medium leading-[1.8] space-y-12"
               />
               
               <div className="mt-32 pt-20 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-10">
                  <div className="flex gap-4">
                     <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white/40 hover:text-royal hover:border-royal transition-all group">
                        <Share2 size={18} className="group-hover:rotate-12 transition-transform" /> Share Insights
                     </button>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-royal">
                        <Award size={24} />
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Verified Institutional Authority</p>
                  </div>
               </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="lg:w-96 space-y-12 h-fit md:sticky md:top-40">
               <div className="p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] group">
                  <h4 className="text-xs font-black text-royal uppercase tracking-widest mb-10 flex items-center gap-4">
                     <Sparkles size={16} /> Fast Access
                  </h4>
                  <div className="space-y-4">
                     {[
                       { name: 'Apply Now', path: '/admissions' },
                       { name: 'Fee Structure', path: '/admissions#fees' },
                       { name: 'Campus Tour', path: '/campus#gallery' },
                       { name: 'Contact Us', path: '/contact' }
                     ].map(link => (
                       <Link 
                         key={link.name} 
                         to={link.path}
                         className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-royal group/item transition-all"
                       >
                          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group-hover/item:text-white">{link.name}</span>
                          <ArrowRight size={14} className="text-royal group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                       </Link>
                     ))}
                  </div>
               </div>

               <div className="p-10 bg-[#030712] rounded-[3rem] border border-royal/10 relative overflow-hidden text-center">
                  <div className="relative z-10">
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4 leading-none text-left">Enroll 2026-27</h4>
                    <p className="text-blue-100/20 text-[10px] font-bold uppercase tracking-widest text-left mb-8">Priority evaluation for all online inquiries during this month.</p>
                    <Link to="/admissions" className="w-full bg-royal text-white py-4 rounded-xl font-black uppercase tracking-widest text-[9px] block hover:scale-[1.05] transition-transform shadow-xl shadow-royal/20">Apply Now</Link>
                  </div>
               </div>
            </aside>
         </div>
      </section>
    </div>
  );
};

export default BlogPost;
