import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const PROJECTS = [
  {
    id: 1,
    title: 'WHATSAPP SUMMIT',
    youtubeId: 'KWtdolTO02M',
    posterUrl: 'https://img.youtube.com/vi/KWtdolTO02M/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 2,
    title: 'FEATHERS OF STEEL',
    youtubeId: 'MqRVVysZy_U',
    posterUrl: 'https://img.youtube.com/vi/MqRVVysZy_U/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 3,
    title: 'LONELINESS',
    youtubeId: 'S_6nCLUE-GI',
    posterUrl: 'https://img.youtube.com/vi/S_6nCLUE-GI/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 4,
    title: 'THE DARJEELING EXPRESS',
    youtubeId: 'GvYt6r68ibE',
    posterUrl: 'https://img.youtube.com/vi/GvYt6r68ibE/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 5,
    title: 'DARJEELING DIARIES',
    youtubeId: 'FbJPye4B54M',
    posterUrl: 'https://img.youtube.com/vi/FbJPye4B54M/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 6,
    title: 'AAKANKSHA VOLUNTEER RECRUITMENT',
    youtubeId: 'Aa6gK7KAYsU',
    posterUrl: 'https://img.youtube.com/vi/Aa6gK7KAYsU/maxresdefault.jpg',
    isVertical: true
  },
  {
    id: 7,
    title: 'FITOPUS LAUNCH VIDEO',
    youtubeId: 'l_AHfIlSwHA',
    posterUrl: 'https://img.youtube.com/vi/l_AHfIlSwHA/maxresdefault.jpg',
    isVertical: true
  }
];

export function ProjectCard({ project, className = "" }: { project: typeof PROJECTS[0]; className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const aspectClass = project.isVertical ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className={`flex flex-col w-full ${className}`}
    >
      <div 
        className={`group relative w-full ${aspectClass} overflow-hidden bg-[#0a0a0a] cursor-pointer rounded-sm`}
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&controls=1&modestbranding=1&iv_load_policy=3`}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0"
            style={{ border: 'none' }}
          />
        ) : (
          <>
            <motion.img
              src={project.posterUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 md:w-10 md:h-10 text-white ml-1 md:ml-2" fill="currentColor" />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 md:mt-6">
        <h3 className={`font-display font-bold ${project.isVertical ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl'} text-white tracking-tight`}>
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // Remove project 7 from the home page
  const homeProjects = PROJECTS.filter(p => p.id !== 7);
  const horizontalProjects = homeProjects.filter(p => !p.isVertical);
  const verticalProjects = homeProjects.filter(p => p.isVertical);

  return (
    <section id="work" className="py-12 md:py-16 px-6 md:px-12 w-full max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/20 pb-8">
        <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-none tracking-tight">WORK<br/>SHOWCASE</h2>
      </div>
      
      <div className="flex flex-col w-full gap-12 md:gap-24">
        {horizontalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {verticalProjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-24 w-full">
          {verticalProjects.map((project) => (
            <div 
              key={project.id}
              className={verticalProjects.length === 1 ? 'sm:col-span-2 lg:col-span-4 xl:col-span-4 flex justify-center' : ''}
            >
              <div className={verticalProjects.length === 1 ? 'w-full sm:w-1/2 lg:w-1/4 xl:w-1/4' : 'w-full'}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex justify-center mt-16 md:mt-24">
        <Link 
          to="/work"
          className="px-8 py-4 bg-white text-black font-sans font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
