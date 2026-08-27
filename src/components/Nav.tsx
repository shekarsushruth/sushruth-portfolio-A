import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <motion.nav 
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full py-6 px-6 md:px-12 z-50 mix-blend-difference text-white flex justify-between items-center pointer-events-none"
    >
      <Link to="/" className="font-display font-bold text-lg md:text-xl tracking-wide pointer-events-auto whitespace-nowrap">
        Sushruth Shekar
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-sans font-semibold tracking-widest uppercase pointer-events-auto">
        <Link to="/" className="hover:opacity-60 transition-opacity">Home</Link>
        <Link to="/work" className="hover:opacity-60 transition-opacity">Work</Link>
        <a href="/#about" className="hover:opacity-60 transition-opacity">About</a>
        <a href="/#contact" className="hover:opacity-60 transition-opacity">Contact</a>
      </div>
      <button className="md:hidden pointer-events-auto">
        <Menu size={24} />
      </button>
    </motion.nav>
  );
}
