import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImage from 'figma:asset/5c10cd5af36d0c56cf6aafaacb8833ed101fc465.png';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-16">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback
          src={heroImage}
          alt="Sengguruh Dam"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-blue-100 uppercase bg-blue-600/40 backdrop-blur-md rounded-full border border-blue-400/30">
            Field Trip • Dec 10, 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 drop-shadow-lg">
            Honest Experience of Sengguruh Dam: <br/><span className="text-blue-400">A Personal Recount</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            What began as an educational excursion transformed into a memorable experience filled with discovery, challenges, and unexpected lessons.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-sm font-medium uppercase tracking-widest">Scroll to explore</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
              >
                <div className="w-1 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
};
