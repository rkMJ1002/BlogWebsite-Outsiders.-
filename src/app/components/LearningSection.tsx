import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, ChevronRight, Hash } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const LearningSection = () => {
  const actionVerbs = [
    "Arrived", "Explored", "Listened", "Examined", "Observed", 
    "Walked", "Visited", "Photographed", "Discovered", 
    "Reflected", "Learned", "Appreciated"
  ];

  const sentences = [
    "We arrived at Sengguruh Dam on December 10th, 2025, at 10:00 AM.",
    "The guides welcomed us and explained the dam's significance.",
    "I saw the dam in person and was amazed by its impressive size.",
    "We examined the water gateways and understood their crucial role.",
    "The officials shared interesting information about the dam's multiple uses.",
    "I discovered a dried snake corpse during our exploration.",
    "We walked through the surrounding area and observed various species.",
    "The experience taught me about the balance between engineering and nature.",
    "I felt disappointed that the trip was too short to explore everything.",
    "The trip reinforced my appreciation for learning beyond classroom walls."
  ];

  const vocabulary = [
    { term: "Sengguruh Dam", definition: "A significant water infrastructure project" },
    { term: "Ecosystem", definition: "Community of living organisms and their environment" },
    { term: "Water Gateways", definition: "Systems controlling water flow through the dam" },
    { term: "Orientation", definition: "Introduction to a place or situation" },
    { term: "Recount", definition: "A detailed description of events experienced" },
    { term: "Hydroelectric", definition: "Power generated from water movement" },
    { term: "Infrastructure", definition: "Basic physical systems and facilities" }
  ];

  return (
    <section className="bg-slate-50 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          {...fadeIn}
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Educational Appendix</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6 tracking-tight">Learning Corner</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            This recount uses specific linguistic structures to describe past events and technical concepts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Action Verbs */}
          <motion.div 
            {...fadeIn}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Hash className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Action Verbs</h3>
            </div>
            <p className="text-sm text-gray-500 mb-8 italic">Simple Past Tense used in this recount:</p>
            <div className="flex flex-wrap gap-3">
              {actionVerbs.map((verb, i) => (
                <motion.span 
                  key={verb} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 bg-slate-100 text-gray-700 text-sm rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm"
                >
                  {verb}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Simple Past Sentences */}
          <motion.div 
            {...fadeIn}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Grammar Focus</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sentences.map((sentence, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="mt-2 w-2 h-2 rounded-full bg-blue-400 shrink-0 group-hover:scale-150 transition-transform group-hover:bg-blue-600" />
                  <p className="text-base text-gray-700 leading-relaxed font-medium">{sentence}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vocabulary */}
          <motion.div 
            {...fadeIn}
            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 lg:col-span-3"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vocabulary Reference</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {vocabulary.map((item, i) => (
                <motion.div 
                  key={item.term} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-blue-200 transition-all shadow-sm"
                >
                  <h4 className="font-black text-blue-900 mb-2 uppercase tracking-tight">{item.term}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.definition}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
