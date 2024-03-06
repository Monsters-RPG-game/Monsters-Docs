import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';

const FourOhFour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={animation.opacity}
      initial="init"
      animate="visible"
      exit="exit"
      className="h-screen w-full flex justify-center items-center text-3xl "
    >
      <h1 className="text-slate-300">Something went wrong...</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go home
      </button>
    </motion.div>
  );
};

export default FourOhFour;
