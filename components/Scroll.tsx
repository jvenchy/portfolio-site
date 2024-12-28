import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollDirectionIndicator = ({ activeSection, sections }) => {
  const isFirstSection = activeSection === sections[0];
  const isLastSection = activeSection === sections[sections.length - 1];
  const isMiddleSection = !isFirstSection && !isLastSection;
  
  return (
    <>
      <AnimatePresence>
        {(isFirstSection || isMiddleSection) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 0.9 }}
            className="fixed bottom-8 right-4 z-50 cursor-pointer" // Aligned to left
          >
            <ChevronDown size={48} className="text-theme animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {(isLastSection || isMiddleSection) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            whileHover={{ opacity: 0.9 }}
            className="fixed top-20 right-4 z-50 cursor-pointer" // Aligned to left
          >
            <ChevronUp size={48} className="text-theme animate-bounce" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollDirectionIndicator;