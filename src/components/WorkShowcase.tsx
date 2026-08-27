import { PROJECTS, ProjectCard } from './Projects';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEW_VIDEOS = [
  {
    id: 8,
    title: 'BOOK LAUNCH EVENT COVERAGE',
    youtubeId: '2JiDTIAte8E',
    posterUrl: 'https://img.youtube.com/vi/2JiDTIAte8E/maxresdefault.jpg',
    isVertical: false
  },
  {
    id: 9,
    title: 'RISE BIONICS EVENT COVERAGE',
    youtubeId: 'sYzE5zZIyPs',
    posterUrl: 'https://img.youtube.com/vi/sYzE5zZIyPs/maxresdefault.jpg',
    isVertical: false
  }
];

export default function WorkShowcase() {
  // Order: 1-6, New Videos, 7 (at the end)
  const homeProjects = PROJECTS.filter(p => p.id !== 7);
  const project7 = PROJECTS.find(p => p.id === 7)!;
  
  const allProjects = [...homeProjects, ...NEW_VIDEOS, project7];
  
  const horizontalProjects = allProjects.filter(p => !p.isVertical);
  const verticalProjects = allProjects.filter(p => p.isVertical);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 md:py-32 px-6 md:px-12 w-full max-w-[1800px] mx-auto min-h-screen"
    >
      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-sans font-bold text-sm tracking-widest uppercase">Back to Home</span>
      </Link>

      <div className="flex flex-col mb-16 border-b border-white/20 pb-8">
        <h1 className="font-display font-bold text-6xl md:text-8xl text-white leading-none tracking-tight">ALL<br/>WORK</h1>
      </div>
      
      <div className="flex flex-col w-full gap-12 md:gap-24">
        {horizontalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {verticalProjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-24 w-full">
          {verticalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
