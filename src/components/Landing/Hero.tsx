import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Heart, Brain, Flower, Leaf, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

const Hero: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  return (
    <section className="relative pt-24 pb-16 md:pt-24 md:pb-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-lens-purple/10 via-emerald-50/30 to-white z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mr-2"
              >
                Discover
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block relative text-lens-purple"
              >
                Nature's
                <div className="absolute -bottom-2 left-0 w-full h-[3px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-lens-purple/40 via-lens-purple to-lens-purple/40 rounded-md"></div>
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-md"></div>
                </div>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block ml-2"
              >
                Wisdom
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Connect with traditional Ghanaian herbal medicine through our AI-powered consultant. Get personalized guidance on natural remedies, traditional practices, and holistic wellness.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {!isAuthenticated && (
                <Button asChild size="lg" className="bg-lens-purple hover:bg-lens-purple-light text-white">
                  <Link to="/signup">Get Started</Link>
                </Button>
              )}
              <Button 
                size="lg" 
                variant={isAuthenticated ? "default" : "outline"}
                className={isAuthenticated ? "bg-lens-purple hover:bg-lens-purple-light text-white" : ""}
                onClick={() => {
                  navigate('/herbal-medicine');
                }}
              >
                Start Herbal Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            {/* Enhanced Stats with Icons */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lens-purple/10 mb-2">
                  <Flower className="w-5 h-5 text-lens-purple" />
                </div>
                <p className="text-3xl font-bold text-lens-purple">100+</p>
                <p className="text-sm text-gray-600">Herbal Remedies</p>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lens-purple/10 mb-2">
                  <Brain className="w-5 h-5 text-lens-purple" />
                </div>
                <p className="text-3xl font-bold text-lens-purple">24/7</p>
                <p className="text-sm text-gray-600">AI Guidance</p>
              </motion.div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-lens-purple/10 mb-2">
                  <Leaf className="w-5 h-5 text-lens-purple" />
                </div>
                <p className="text-3xl font-bold text-lens-purple">100%</p>
                <p className="text-sm text-gray-600">Traditional</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Enhanced Dashboard preview with 3D effect */}
          <div className="relative lg:ml-auto">
            {/* Dashboard with enhanced 3D perspective effect */}
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(117,81,251,0.2)] transform perspective-1000"
              initial={{ y: 40, opacity: 0, rotateX: 10, rotateY: -10 }}
              animate={{ y: 0, opacity: 1, rotateX: 2, rotateY: -2 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
                delay: 0.3
              }}
              whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02 }}
            >
              <div className="relative shadow-2xl rounded-2xl overflow-hidden border border-purple-200">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-white opacity-50 z-0"></div>
                <img 
                  src="/assets/3d-dashboard.png" 
                  alt="eDok Herbal Medicine Platform" 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </motion.div>
            
            {/* Enhanced floating elements */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-lens-purple/30 to-emerald-400/20 rounded-2xl rotate-12 z-0"
              animate={{
                rotate: [12, 8, 12],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-lens-purple/20 rounded-2xl -rotate-12 z-0"
              animate={{
                rotate: [-12, -8, -12],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-lens-purple/20 to-emerald-400/30 rounded-full z-0"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            {/* Floating notification cards */}
            <motion.div 
              className="absolute -bottom-10 -right-10 bg-white p-4 rounded-xl shadow-lg border border-purple-100 z-20 hidden md:block"
              initial={{ scale: 0, x: 50, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.8
              }}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-200">
                  <Flower className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Herbal Remedy Found</p>
                  <p className="text-xs text-gray-500">Moringa for energy boost</p>
                </div>
              </div>
            </motion.div>
            
            {/* Second floating card - AI Consultation */}
            <motion.div 
              className="absolute -top-6 left-0 bg-white p-3 rounded-xl shadow-lg border border-purple-100 z-20 hidden lg:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 1
              }}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lens-purple to-lens-purple-light flex items-center justify-center shadow-md shadow-purple-200">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium">AI Consultation</p>
                  <p className="text-[10px] text-gray-500">Nature's Wisdom online</p>
                </div>
              </div>
            </motion.div>
            
            {/* Third floating card - Traditional Knowledge */}
            <motion.div 
              className="absolute top-1/3 -left-16 bg-white p-3 rounded-xl shadow-lg border border-purple-100 z-20 hidden lg:block"
              initial={{ scale: 0, x: -30, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 1.2
              }}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-md shadow-green-200">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium">Traditional Knowledge</p>
                  <p className="text-[10px] text-gray-500">Ghanaian herbal wisdom</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
