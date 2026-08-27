/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Reel from './components/Reel';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import WorkShowcase from './components/WorkShowcase';

function Home() {
  return (
    <>
      <Hero />
      <Reel />
      <Projects />
      <ClientLogos />
      <About />
    </>
  );
}

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-white selection:text-black">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkShowcase />} />
      </Routes>
      <Footer />
    </main>
  );
}
