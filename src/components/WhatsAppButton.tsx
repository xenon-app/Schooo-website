import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/910000000000" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 group overflow-hidden"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75 group-hover:scale-150 transition-transform duration-700" />
      <MessageCircle size={32} />
      
      {/* Notification Pulse */}
      <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-bounce" />
    </motion.a>
  );
};

export default WhatsAppButton;
