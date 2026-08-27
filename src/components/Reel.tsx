import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';

export default function Reel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-12 pb-4 md:py-12 px-6 md:px-12 w-full max-w-[1800px] mx-auto border-t border-white/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-12">
        <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-none">SHOWREEL</h2>
        <p className="font-sans text-gray-400 text-sm md:text-base lg:text-lg md:text-right pb-1 whitespace-nowrap">
          A glimpse into the stories I've brought to life
        </p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full aspect-video bg-[#0a0a0a] group cursor-pointer overflow-hidden rounded-sm"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying && (
          <>
            <img 
              src="https://img.youtube.com/vi/gHoVBiJbInc/maxresdefault.jpg" 
              alt="Showreel Cover" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="flex flex-col items-center gap-6 transform group-hover:scale-110 transition-transform duration-700 ease-[0.76,0,0.24,1]">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Play size={40} className="ml-2" fill="currentColor" />
                </div>
              </div>
            </div>
          </>
        )}
        
        {isPlaying && (
          <iframe
            src="https://www.youtube.com/embed/gHoVBiJbInc?autoplay=1&rel=0&controls=1&modestbranding=1&iv_load_policy=3"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          />
        )}
      </motion.div>
    </section>
  );
}
