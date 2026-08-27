import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const POSTER_URL = 'https://i.vimeocdn.com/video/2191210498-8afa4c39fe06deb2674b950826227a588473e047dec2f64ffdea149743a58f7d-d_1920x1080';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    
    const player = new Player(iframeRef.current);
    
    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

    player.on('playing', handlePlay);
    player.on('play', handlePlay);

    // If the video is already playing before the event listener attached
    player.getPaused().then((paused) => {
      if (!paused) {
        setIsVideoPlaying(true);
      }
    }).catch(() => {});

    return () => {
      // In React Strict Mode, destroy() would actually remove the iframe from the DOM,
      // breaking the second render. We just unbind events instead.
      player.off('playing', handlePlay);
      player.off('play', handlePlay);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-between px-6 py-6 md:px-12 md:py-12 overflow-hidden bg-[#000000]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#000000]">
        {/* Instant Poster Image to prevent black flash / loading latency */}
        <img
          src={POSTER_URL}
          alt=""
          fetchPriority="high"
          decoding="async"
          className={`absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover grayscale transition-opacity duration-1000 transform-gpu ${
            isVideoPlaying ? 'opacity-0' : 'opacity-50'
          }`}
          style={{ willChange: 'opacity, transform' }}
        />

        <iframe
          ref={iframeRef}
          className={`absolute w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grayscale transform-gpu transition-opacity duration-1000 ${
            isVideoPlaying ? 'opacity-50' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity, transform' }}
          src="https://player.vimeo.com/video/1219103536?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&autopause=0&playsinline=1&dnt=1"
          allow="autoplay; fullscreen; picture-in-picture"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Top spacer for Nav */}
      <div className="z-10 w-full h-16"></div>
      
      {/* Content */}
      <div className="z-10 w-full flex flex-col items-start justify-end flex-grow pb-8">
        <div className="w-full flex flex-col uppercase">
          <div className="overflow-hidden pb-4 md:pb-8 -mb-4 md:-mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[8.5vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] leading-none font-display font-bold text-white tracking-tight whitespace-nowrap"
            >
              I AM
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 w-full justify-between pb-4 md:pb-8 -mb-4 md:-mb-8 pt-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-[8.5vw] sm:text-[8vw] md:text-[7vw] lg:text-[6vw] leading-none font-display font-bold text-transparent tracking-tight stroke-text whitespace-nowrap"
            >
              SUSHRUTH SHEKAR
            </motion.h1>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 flex flex-col md:flex-row md:items-center justify-between w-full border-t border-white/20 pt-6 font-sans font-semibold tracking-widest uppercase text-gray-300"
        >
          <div className="flex items-center gap-2 min-[400px]:gap-3 md:gap-6 text-[10px] sm:text-xs md:text-sm">
            <span>DIRECTOR</span>
            <span className="text-gray-500 text-[8px] sm:text-[10px]">&bull;</span>
            <span>CINEMATOGRAPHER</span>
            <span className="text-gray-500 text-[8px] sm:text-[10px]">&bull;</span>
            <span>EDITOR</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
