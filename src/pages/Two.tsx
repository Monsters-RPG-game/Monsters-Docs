import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../style/animation';

const Two: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header">Two</h1>
      <main className="common-container_content">Two</main>
    </motion.div>
  );
};

export default Two;
