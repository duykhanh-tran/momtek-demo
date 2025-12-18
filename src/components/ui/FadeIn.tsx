'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Độ trễ (nếu muốn các phần tử hiện ra lần lượt)
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) => {
  // Cấu hình hướng chuyển động
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }} // Chỉ chạy 1 lần khi cuộn tới
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Hiệu ứng ease-out mượt mà
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;