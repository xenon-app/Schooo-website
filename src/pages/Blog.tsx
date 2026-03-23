import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Tag
} from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'best-school-murliganj',
    title: 'Why Adarsh Public is the Best English Medium School in Murliganj',
    excerpt: 'Comprehensive comparison of education standards, facilities, and board results in Madhepura district schools.',
    date: 'March 20, 2026',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
    category: 'Ranking'
  },
  {
    id: 'cbse-admission-tips',
    title: 'CBSE School Admission in Murliganj: A Complete Guide for Parents',
    excerpt: 'Everything you need to know about the admission process for the 2026-27 session at Adarsh Public School.',
    date: 'March 18, 2026',
    author: 'Principal Desk',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop',
    category: 'Admissions'
  },
  {
    id: 'digital-learning-bihor',
    title: 'How Smart Classes Are Changing Education in Rural Bihar',
    excerpt: 'The impact of multimedia labs and interactive learning at APS Murliganj on student engagement.',
    date: 'March 15, 2026',
    author: 'IT Dept',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    category: 'Innovation'
  },
  {
    id: 'extracurricular-growth',
    title: 'Beyond Books: Developing Future Leaders in Murliganj Through Sports',
    excerpt: 'Exploring the 25+ years of excellence in sports and creative arts at the top school in Murliganj.',
    date: 'March 12, 2026',
    author: 'Sports Coach',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    category: 'Holistic'
  },
  {
    id: 'scholarships-murliganj',
    title: 'Scholarship Opportunities for Local Students in Madhepura District',
    excerpt: 'How we support meritorious students from local villages through our scholarship program.',
    date: 'March 10, 2026',
    author: 'Admissions Desk',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0fc642?q=80&w=2070&auto=format&fit=crop',
    category: 'Community'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-navy pt-[120px] pb-32 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-royal/5 opacity-50 blur-[120px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-royal font-black uppercase tracking-[0.4em] text-xs mb-6">School Insights</p>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none mb-10">
              The <span className="text-royal underline decoration-4 decoration-royal/10">APS Blog</span>
            </h1>
            <p className="text-blue-100/40 text-lg uppercase tracking-widest border-l-4 border-royal/20 pl-6 inline-block">
              Latest Updates & Educational Strategies for Murliganj
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="relative mb-24 max-w-2xl mx-auto">
          <Search size={20} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
          <input 
            type="text" 
            placeholder="Search local educational insights..." 
            className="w-full bg-white/5 border border-white/10 px-16 py-6 rounded-full focus:outline-none focus:border-royal transition-all text-white font-bold tracking-widest"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/[0.03] border border-white/5 rounded-[3.5rem] overflow-hidden hover:bg-white/10 transition-all flex flex-col h-full shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute top-6 right-6">
                  <span className="px-5 py-2.5 bg-royal text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-6 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-6">
                  <span className="flex items-center gap-2"><Calendar size={12} className="text-royal" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={12} className="text-royal" /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter leading-tight group-hover:text-royal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-blue-100/30 text-sm leading-relaxed mb-10 flex-grow font-medium">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-royal transition-all group/link mt-auto"
                >
                  Read Depth <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 mt-40">
        <div className="bg-[#030712] p-16 md:p-32 rounded-[5rem] border border-white/5 relative overflow-hidden group text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-royal opacity-[0.05] rounded-full blur-[140px]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Tag size={48} className="text-royal mx-auto mb-10 opacity-30 group-hover:rotate-12 transition-transform" />
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              Stay Informed
            </h2>
            <p className="text-xl text-blue-100/40 mb-16 max-w-2xl mx-auto font-medium leading-relaxed italic border-l-4 border-royal/10 pl-6">
              "Receive the latest educational updates and admission priority alerts directly in your inbox."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="parent@email.com" 
                className="flex-grow bg-white/5 border border-white/10 px-10 py-6 rounded-full focus:outline-none focus:border-royal transition-all text-white font-bold"
              />
              <button className="bg-royal text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-royal/80 transition-all shadow-[0_20px_40px_-5px_rgba(37,99,235,0.4)]">
                Join Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
