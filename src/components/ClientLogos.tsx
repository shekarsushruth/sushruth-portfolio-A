import { motion } from 'motion/react';

const CLIENTS = [
  { name: 'GUJARAT TITANS' },
  { name: 'FRATELLI WINES' },
  { name: 'Meta' },
  { name: 'modern' },
  { name: 'WhatsApp' },
];

export default function ClientLogos() {
  // We duplicate the array many times to ensure the marquee spans the full width
  // even on ultra-wide screens, and loops seamlessly.
  const marqueeItems = Array.from({ length: 12 }).flatMap(() => CLIENTS);

  return (
    <div className="w-full overflow-hidden bg-[#000000] py-2 md:py-4 border-t border-white/10 flex items-center relative z-10">
      
      {/* Optional: Add gradient masks to the edges for a fading effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black w-full" />

      <motion.div
        className="flex items-center space-x-12 md:space-x-24 px-8 relative z-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          ease: "linear", 
          duration: 30, // Adjust speed here
          repeat: Infinity 
        }}
      >
        {marqueeItems.map((client, i) => (
          <div 
            key={i} 
            className="flex items-center justify-center whitespace-nowrap cursor-default select-none opacity-60 hover:opacity-100 transition-opacity duration-500 min-h-[24px]"
          >
            <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
              {client.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
