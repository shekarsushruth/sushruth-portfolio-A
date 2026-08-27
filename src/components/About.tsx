import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 md:px-12 w-full max-w-[1800px] mx-auto border-t border-white/20">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full aspect-square bg-[#0a0a0a] relative rounded-sm overflow-hidden"
          >
            <img 
              src="/dp2.png" 
              alt="Studio Setup" 
              className="absolute inset-0 w-full h-full object-cover object-[65%_center] grayscale opacity-80" 
            />
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-start">
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-white text-3xl md:text-5xl lg:text-[4rem] font-display font-bold uppercase tracking-tight leading-[1.05]"
            >
              I MAKE FILMS THAT FEEL DIFFERENT
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-12 flex flex-col gap-4"
          >
            <p>From Music videos, commercials to documentaries, I bring a filmmaker's eye, a curious mind, and a love for making ordinary ideas feel a little more cinematic.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 border-t border-white/20 pt-8 text-gray-400 font-sans"
          >
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">1. Story & Script</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Idea Development</li>
                <li>Scriptwriting</li>
                <li>Narrative Development</li>
                <li>Treatment Writing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">02. Conceptualization</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Creative Concept</li>
                <li>Visual Development</li>
                <li>Shot Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">03. Pre-Production</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Location Scouting</li>
                <li>Art Direction</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">04. Production</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Direction</li>
                <li>Cinematography</li>
                <li>Camera Operating</li>
                <li>Lighting Design</li>
                <li>Drone Piloting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">05. Post-Production</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Offline Editing</li>
                <li>Color Grading</li>
                <li>Sound Design</li>
                <li>Motion Graphics</li>
                <li>VFX / CGI</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3">06. Final Film</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>Finishing</li>
                <li>Mastering</li>
                <li>Format Adaptation</li>
                <li>Delivery</li>
              </ul>
            </div>
          </motion.div>
        </div>
        
      </div>

      {/* Categories Full-Width Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 md:mt-32 w-full pt-12 md:pt-16 border-t border-white/20 flex flex-col"
      >
        <h3 className="text-white font-display font-bold text-xl md:text-2xl uppercase tracking-tight mb-8 md:mb-12">
          I MAKE FILMS FOR EVERY KIND OF STORY.
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-gray-400 font-sans">
          <div>
            <h4 className="text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Commercials</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Brand Films</li>
              <li>TV Commercials</li>
              <li>Digital Films</li>
              <li>Product Films</li>
              <li>Campaign Films</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Story-Driven</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Short Films</li>
              <li>Documentaries</li>
              <li>Music Videos</li>
              <li>Narrative Films</li>
              <li>Branded Content</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">People & Culture</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Corporate Films</li>
              <li>Founder Stories</li>
              <li>Interviews</li>
              <li>Testimonials</li>
              <li>Employee Stories</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Experience & Event</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Event Films</li>
              <li>Aftermovies</li>
              <li>Experiential Films</li>
              <li>Social Films</li>
              <li>Behind-the-Scenes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Digital & Social</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>Social Films</li>
              <li>Reels</li>
              <li>Short-Form Content</li>
              <li>Vertical Films</li>
              <li>Platform Adaptations</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
