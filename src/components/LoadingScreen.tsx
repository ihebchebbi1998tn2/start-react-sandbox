import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 30;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 30) {
          clearInterval(timer);
          onLoadingComplete();
          return 30;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: {
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
    >
      <motion.div 
        className="relative flex flex-col items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#700000]/30 blur-xl animate-pulse" />
          
          {/* Glass effect container */}
          <div className="relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm rounded-full p-8 border border-white/20 shadow-2xl">
            <motion.svg 
              className="w-40 h-40" 
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {/* Background circle with glass effect */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="8"
                className="filter blur-[1px]"
              />
              
              {/* Progress circle with gradient and glow */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(count / 30) * 283} 283`}
                transform="rotate(-90 50 50)"
                className="filter drop-shadow-[0_0_8px_rgba(112,0,0,0.8)]"
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#700000" />
                  <stop offset="50%" stopColor="#ff0000" />
                  <stop offset="100%" stopColor="#700000" />
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Counter with glow effect */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                {count}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;