import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#000000] pt-12 pb-12 px-6 md:px-12 border-t border-white/20 overflow-hidden">
      <div className="max-w-[1800px] mx-auto flex flex-col justify-between">
        
        <div className="flex flex-col items-center text-center pt-8 md:pt-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white uppercase font-sans font-bold tracking-[0.2em] text-sm mb-8"
          >
            Got a project in mind?
          </motion.p>
          <a href="https://wa.me/9620426892" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-8">
            <div className="pb-4">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="font-display font-bold text-[12vw] text-white leading-[0.8] tracking-tight group-hover:text-transparent transition-all duration-500"
                style={{ WebkitTextStroke: '2px white' }}
              >
                LET'S TALK
              </motion.h2>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 text-white flex items-center justify-center transform group-hover:-translate-y-4 group-hover:bg-white group-hover:text-black transition-all duration-500 ease-[0.76,0,0.24,1]">
              <ArrowUpRight size={32} strokeWidth={2} />
            </div>
          </a>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-sans font-bold uppercase tracking-widest text-gray-500 border-t border-white/20 pt-8">
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="https://wa.me/9620426892" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 9620426892</a>
            <a href="mailto:shekarsushruth@gmail.com" className="hover:text-white transition-colors">shekarsushruth@gmail.com</a>
          </div>

          <div className="flex gap-4">
            <span>© {new Date().getFullYear()} Sushruth Shekar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
