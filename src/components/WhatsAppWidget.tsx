import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  useEffect(() => {
    // Show a greeting prompt box after 4 seconds to catch the user's attention
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasPrompted(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const whatsappLink = "https://wa.me/919400340270?text=Hello%20Zyvera%20Technologies%2C%20I'm%20interested%20in%20your%20services!";

  const handleOpenChat = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setHasPrompted(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Dynamic Pop-up Greeting Prompt */}
      <AnimatePresence>
        {hasPrompted && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mb-3 mr-1 bg-[#09090b] border border-[#1e293b]/70 rounded-2xl p-4 shadow-2xl max-w-sm text-left backdrop-blur-md relative"
          >
            {/* Close button for the prompt */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setHasPrompted(false);
              }}
              className="absolute top-3 right-3 text-brand-muted hover:text-white transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex gap-3">
              {/* WhatsApp styled avatar */}
              <div className="relative shrink-0">
                <div className="h-9 w-9 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm11.953-2.144c1.787-.001 3.532.48 5.048 1.391l.362.215 3.748-.982-.999-3.656.235-.374a9.79 9.79 0 0 0 1.503-5.184c.001-5.385-4.331-9.766-9.66-9.766-2.584 0-5.011 1.002-6.837 2.828a9.696 9.696 0 0 0-2.828 6.844c-.002 5.384 4.33 9.764 9.66 9.764zm5.28-7.214c-.289-.144-1.713-.845-1.977-.941-.264-.096-.456-.144-.648.144-.192.288-.744.941-.912 1.133-.168.192-.336.216-.625.072-1.355-.678-2.28-1.127-3.176-2.666-.237-.41.237-.38.679-1.26a.417.417 0 0 0-.02-.395c-.06-.144-.54-1.3-.74-1.78-.195-.469-.393-.405-.54-.412l-.46-.008c-.159 0-.417.06-.634.298-.217.237-.828.809-.828 1.972 0 1.163.845 2.284.963 2.443.118.158 1.662 2.538 4.027 3.554.563.242 1.002.386 1.343.495.565.179 1.08.154 1.486.094.453-.068 1.414-.577 1.614-1.135.2-.558.2-1.037.14-1.135-.06-.097-.24-.144-.53-.288z" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 rounded-full border border-black animate-ping" />
              </div>
              <div className="flex-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Zyvera Customer Care</span>
                  <span className="text-[9px] font-mono text-[#10b981] font-semibold">Online</span>
                </div>
                <p className="text-[#a1a1aa] mt-1 font-light leading-relaxed">
                  Hi there! Have any questions about our software development service? Chat with us instantly over WhatsApp!
                </p>
                <button
                  onClick={handleOpenChat}
                  className="mt-2.5 px-3 py-1.5 bg-[#0a84ff] hover:bg-[#40a0ff] text-white rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1"
                >
                  <Send className="h-2.5 w-2.5" />
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Floating Button */}
      <motion.button
        id="whatsapp-floating-trigger"
        onClick={handleOpenChat}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer transition-all border border-emerald-400/20 relative"
        title="Chat on WhatsApp"
      >
        {/* Infinite pulsing radar border around the button */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-500/35 animate-ping opacity-60" />

        {/* WhatsApp Icon SVG */}
        <svg 
          className="h-7 w-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm11.953-2.144c1.787-.001 3.532.48 5.048 1.391l.362.215 3.748-.982-.999-3.656.235-.374a9.79 9.79 0 0 0 1.503-5.184c.001-5.385-4.331-9.766-9.66-9.766-2.584 0-5.011 1.002-6.837 2.828a9.696 9.696 0 0 0-2.828 6.844c-.002 5.384 4.33 9.764 9.66 9.764zm5.28-7.214c-.289-.144-1.713-.845-1.977-.941-.264-.096-.456-.144-.648.144-.192.288-.744.941-.912 1.133-.168.192-.336.216-.625.072-1.355-.678-2.28-1.127-3.176-2.666-.237-.41.237-.38.679-1.26a.417.417 0 0 0-.02-.395c-.06-.144-.54-1.3-.74-1.78-.195-.469-.393-.405-.54-.412l-.46-.008c-.159 0-.417.06-.634.298-.217.237-.828.809-.828 1.972 0 1.163.845 2.284.963 2.443.118.158 1.662 2.538 4.027 3.554.563.242 1.002.386 1.343.495.565.179 1.08.154 1.486.094.453-.068 1.414-.577 1.614-1.135.2-.558.2-1.037.14-1.135-.06-.097-.24-.144-.53-.288z" />
        </svg>

        {/* Small floating tooltip style message on hover */}
        <span className="absolute right-16 bg-[#09090b] text-white text-[10px] font-mono tracking-wider font-semibold py-1.5 px-3 rounded-lg border border-brand-border pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          WhatsApp Chat
        </span>
      </motion.button>
    </div>
  );
}
