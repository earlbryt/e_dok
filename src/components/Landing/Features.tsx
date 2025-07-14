import React from 'react';
import { 
  Flower2,
  Brain,
  Leaf,
  Sparkles,
  BookOpen,
  Shield
} from 'lucide-react';
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-lens-purple" />,
      title: "AI-Powered Consultation",
      description: "Get personalized herbal medicine advice from our AI consultant trained on traditional Ghanaian remedies. Ask questions and receive evidence-based recommendations."
    },
    {
      icon: <Flower2 className="h-10 w-10 text-emerald-500" />,
      title: "Traditional Knowledge Base",
      description: "Access our comprehensive database of 100+ documented Ghanaian herbal remedies, traditional practices, and cultural healing wisdom passed down through generations."
    },
    {
      icon: <Leaf className="h-10 w-10 text-green-500" />,
      title: "Natural Remedies Guide",
      description: "Discover natural treatments for common ailments, learn proper preparation methods, and understand the traditional uses of various herbs and plants."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Safety & Interactions",
      description: "Get information about herb-drug interactions, safety precautions, and proper dosage guidelines to ensure safe and effective use of herbal remedies."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold mb-6 text-gray-900">Traditional Wisdom Meets Modern AI</h2>
          <p className="text-xl text-gray-600">
            Experience the power of traditional Ghanaian herbal medicine enhanced with cutting-edge artificial intelligence for personalized guidance and care.
          </p>
        </div>
        
        {/* Feature grid - adjusted for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:translate-y-[-4px] transform transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index,
                duration: 0.5,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Dashboard showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Dashboard image */}
          <div className="relative">
            <motion.div 
              className="relative z-10 rounded-xl shadow-md overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/data-analyst-avatar-icon-poster-2.png" 
                alt="eDok Herbal Medicine Platform" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-lens-purple/10 rounded-full z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div 
              className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400/10 rounded-full z-0"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          
          {/* Right side - Feature list */}
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold text-gray-900">Your Personal Herbal Medicine Guide</h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform combines traditional Ghanaian herbal knowledge with modern technology to provide you with personalized, culturally-relevant health guidance.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lens-purple/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-lens-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Consultation</h3>
                  <p className="text-gray-600">Our AI consultant understands your symptoms and provides personalized herbal medicine recommendations based on traditional Ghanaian practices.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Knowledge Base</h3>
                  <p className="text-gray-600">Access detailed information about herbs, their traditional uses, preparation methods, and cultural significance in Ghanaian medicine.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cultural Relevance</h3>
                  <p className="text-gray-600">Get guidance that respects and incorporates traditional Ghanaian healing practices and cultural understanding of health and wellness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
