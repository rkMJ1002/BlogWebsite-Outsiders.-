import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { BlogContent } from '@/app/components/BlogPost';
import { LearningSection } from '@/app/components/LearningSection';
import { Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Assets
import imgGroup from 'figma:asset/61ff7b2f4de1920f0cbd6c8fec5790e10818e39b.png';
import imgLandscape from 'figma:asset/ef9e61dcdf964a099bb1d89105230e57ab11a51c.png';
import imgHero from 'figma:asset/5c10cd5af36d0c56cf6aafaacb8833ed101fc465.png';
import imgGateway from 'figma:asset/5730636eff1ebbbca33ae158be69bfed0ac367c0.png';

// --- Page Components ---

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Hero />
    <BlogContent />
    <LearningSection />
  </motion.div>
);

const TripsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 max-w-7xl mx-auto px-4"
  >
    <h1 className="text-4xl font-extrabold mb-12 tracking-tight">Our Trips</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Sengguruh Technical Visit", img: imgGateway, date: "Dec 10, 2025" },
        { title: "Eco-System Study", img: imgLandscape, date: "Dec 12, 2025" },
        { title: "Group Expedition", img: imgGroup, date: "Dec 15, 2025" }
      ].map((trip, i) => (
        <motion.div 
          key={i} 
          whileHover={{ y: -10 }}
          className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
        >
          <div className="h-64 overflow-hidden">
            <ImageWithFallback src={trip.img} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-8">
            <span className="text-blue-600 text-xs font-black uppercase tracking-widest">{trip.date}</span>
            <h3 className="text-2xl font-bold mt-3 mb-4">{trip.title}</h3>
            <p className="text-gray-600 leading-relaxed">A deep dive into the engineering and natural wonders of the Sengguruh region.</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const EducationPage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 max-w-4xl mx-auto px-4"
  >
    <h1 className="text-4xl font-extrabold mb-12 text-center tracking-tight">Educational Resources</h1>
    <div className="space-y-6">
      {['Dam Engineering 101', 'Tropical Ecosystems', 'Water Management Systems', 'Sustainable Infrastructure'].map((topic) => (
        <motion.div 
          key={topic} 
          whileHover={{ x: 10 }}
          className="p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100 flex items-center justify-between group cursor-pointer"
        >
          <span className="text-xl font-bold text-blue-900">{topic}</span>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors">Download PDF</button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const GalleryPage = () => {
  const photos = [
    { src: imgGroup, title: "Class of 2025", span: "md:col-span-2 md:row-span-2" },
    { src: imgLandscape, title: "Scenic Outlook", span: "" },
    { src: imgHero, title: "The Dam View", span: "" },
    { src: imgGateway, title: "Engineering Detail", span: "md:col-span-2" },
    { src: imgLandscape, title: "Atmospheric Clouds", span: "" },
    { src: imgGroup, title: "Team Spirit", span: "" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 max-w-7xl mx-auto px-4"
    >
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Trip Gallery</h1>
        <p className="text-gray-500 text-lg">Visual memories from our exploration of Sengguruh Dam.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative aspect-[4/3] bg-gray-100 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all group ${photo.span}`}
          >
            <ImageWithFallback 
              src={photo.src} 
              alt={photo.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <span className="text-white font-bold text-xl">{photo.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const PrivacyPolicyPage = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 max-w-3xl mx-auto px-4"
  >
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
    <p className="text-gray-500 mb-8 text-sm">Last updated: February 2, 2026</p>
    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
      <p>Your privacy is important to us. It is Outsiders' policy to respect your privacy regarding any information we may collect from you across our website.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Information we collect</h2>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Log data</h2>
      <p>When you visit our website, our servers may automatically log the standard data provided by your web browser.</p>
    </div>
  </motion.div>
);

const Footer = ({ setPage }: { setPage: (p: string) => void }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight">
              Outsiders.
            </div>
            <p className="text-slate-400 leading-relaxed">
              Capturing educational journeys and environmental engineering wonders in Indonesia. Join us as we explore beyond the classroom.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setPage('home')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={() => setPage('trips')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Our Trips</button></li>
              <li><button onClick={() => setPage('education')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Educational Resources</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Privacy Policy</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Recent Post Series</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setPage('education')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">The Future of Dams</button></li>
              <li><button onClick={() => setPage('education')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Indonesian Ecosystems</button></li>
              <li><button onClick={() => setPage('education')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Sustainable Engineering</button></li>
              <li><button onClick={() => setPage('home')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Student Perspectives</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Get the latest educational stories delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-800 border-none rounded-xl py-4 pl-6 pr-12 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg px-4 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Outsiders. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <button onClick={() => setPage('privacy')} className="hover:text-white transition-colors cursor-pointer">Terms</button>
            <button onClick={() => setPage('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => setPage('privacy')} className="hover:text-white transition-colors cursor-pointer">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'trips': return <TripsPage />;
      case 'education': return <EducationPage />;
      case 'gallery': return <GalleryPage />;
      case 'privacy': return <PrivacyPolicyPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Header setPage={setCurrentPage} />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
}
