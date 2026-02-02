import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, MapPin, User, Quote } from 'lucide-react';
import orientationImage from 'figma:asset/5c10cd5af36d0c56cf6aafaacb8833ed101fc465.png';
import gatewayImage from 'figma:asset/5730636eff1ebbbca33ae158be69bfed0ac367c0.png';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const BlogContent = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12 lg:py-20 overflow-hidden">
      {/* Meta Info */}
      <motion.div 
        {...fadeIn}
        className="flex flex-wrap items-center gap-6 mb-12 text-sm text-gray-500 border-b border-gray-100 pb-8"
      >
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-blue-500" />
          <span>By Rakyan Natha Prastama</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span>Published February 1, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span>Sengguruh Dam, Indonesia</span>
        </div>
      </motion.div>

      <div className="space-y-24 prose prose-slate max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg">
        <motion.section {...fadeIn}>
          <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Introduction</h2>
          <p>
            On December 10th, 2025, I embarked on an unforgettable field trip to Sengguruh Dam with my classmates, teachers, and professional guides. This journey introduced me to the remarkable engineering marvel and the thriving ecosystem surrounding this significant water infrastructure.
          </p>
          <p>
            What began as an educational excursion transformed into a memorable experience filled with discovery, challenges, and unexpected lessons about the natural world beyond my dormitory walls.
          </p>
        </motion.section>

        <motion.section 
          {...fadeIn}
          className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
            <span className="bg-blue-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center text-lg shadow-lg shadow-blue-200">1</span>
            Orientation
          </h2>
          <p className="mb-8">
            Our group arrived at Sengguruh Dam on December 10th, 2025, at 10:00 AM. The anticipation was palpable as we gathered at the entrance, ready to explore. Our guides welcomed us warmly and provided an overview of what we would experience throughout the day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <ImageWithFallback
                src={orientationImage}
                alt="Orientation"
                className="h-72 object-cover w-full"
              />
            </motion.div>
            <div className="flex flex-col justify-center bg-white p-8 rounded-3xl border border-gray-100 italic text-gray-600 relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-blue-50 opacity-10" />
              <p className="text-xl leading-relaxed z-10">
                "This initial moment set the tone for our entire adventure, and I felt a mixture of excitement and curiosity about the vast ecosystem..."
              </p>
            </div>
          </div>
        </motion.section>

        <section className="space-y-16">
          <motion.h2 {...fadeIn} className="text-4xl font-extrabold mb-12">Events: Exploration & Discovery</motion.h2>
          
          <div className="space-y-12">
            <motion.div {...fadeIn}>
              <h3 className="text-2xl font-bold text-blue-700 mb-6">First Encounters and Guided Exploration</h3>
              <p>
                Upon arrival, the first thing we did was to explore the dam site while listening attentively to our knowledgeable guides. They shared fascinating information about the dam's construction, its purpose in water management, and the ecological significance of the surrounding area.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { letter: 'A', title: 'Technical Layout', text: 'Examined the dam up close, observing the massive concrete structure and understanding its architectural design.' },
                { letter: 'B', title: 'Water Gateways', text: 'Visited the intricate systems that controlled water flow. I took numerous photographs for technical reference.' },
                { letter: 'C', title: 'Flora & Fauna', text: 'Explored the surrounding ecosystem, highlighting unique species and the delicate balance of nature.' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.letter}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              {...fadeIn}
              className="flex flex-col lg:flex-row gap-10 items-center bg-blue-50/50 p-10 rounded-[3rem] border border-blue-100/50"
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-lg">
                <ImageWithFallback
                  src={gatewayImage}
                  alt="Water Gateway"
                  className="h-64 rounded-3xl object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Interactions with Local Officials</h3>
                <p className="text-blue-800/80">
                  We had the opportunity to meet and speak with local officials and dam operators. They shared specific uses of the dam—irrigation for agriculture, hydroelectric power generation, and flood management. This deepened my appreciation for the infrastructure's importance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="bg-orange-50 p-10 rounded-[3rem] border border-orange-100 relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-1000">
                <Quote className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">An Unexpected Discovery</h3>
              <p className="text-orange-900/90 text-lg leading-relaxed">
                The most challenging and unexpected incident occurred when I discovered a dead snake corpse that was already dried out. The initial shock quickly transformed into curiosity as the guides explained that this was a natural part of the ecosystem.
              </p>
            </motion.div>
          </div>
        </section>

        <motion.section {...fadeIn}>
          <h2 className="text-4xl font-extrabold mb-8">Reorientation & Reflections</h2>
          <p className="mb-10 text-xl text-gray-600">
            As we prepared to depart, I reflected on the day's experiences. Honestly, I felt genuinely disappointed about how short the trip was. The time seemed to fly by, and I wished we could have explored more areas.
          </p>
          <motion.div 
            whileInView={{ scale: [0.95, 1.02, 1] }}
            className="bg-white border-4 border-blue-600 p-12 rounded-[3rem] my-12 relative shadow-2xl shadow-blue-100"
          >
            <div className="absolute -top-6 left-12 bg-blue-600 text-white px-8 py-2 rounded-2xl text-base font-black uppercase tracking-widest shadow-lg">The Lesson</div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight italic">
              "The most important lesson I gained was the realization of how much there is to discover outside my dormitory walls. Being outside, engaging with real-world infrastructure, and witnessing nature firsthand provided perspectives that classroom learning alone cannot offer."
            </p>
          </motion.div>
          <p className="text-lg">
            This experience reinforced my understanding of the interconnectedness between human engineering and natural ecosystems.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-4xl font-black mb-8 text-blue-400">Conclusion</h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-10">
            The field trip to Sengguruh Dam transformed my perspective on environmental education and infrastructure. Although the duration was shorter than expected, the quality of experience more than compensated for the time constraints.
          </p>
          <div className="text-slate-400 text-base border-t border-slate-800 pt-8 mt-12">
            <strong className="text-blue-400 block mb-2 uppercase tracking-widest text-sm">Title Justification</strong>
            <p>I chose "Honest Experience of Sengguruh Dam" because it reflects my authentic reaction. Rather than presenting an idealized account, it acknowledges both the positive aspects and the truthful disappointment about the trip's brevity.</p>
          </div>
        </motion.section>
      </div>
    </article>
  );
};
