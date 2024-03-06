import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as animation from '../../style/animation';

const Roadmap: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">Roadmap</h1>
      <main className="common-container_content">
        <p className="my-3">
          Well. Its important to have 1 but in current state we don&apos;t. All we have now are personal notes of what
          we can add to this project, and idea of how it should look like. Are you a game designer ? Would you like to
          create idea of how this project should look like from user perspective? Create new issue on{' '}
          <a
            href="https://github.com/Virus288/Monsters-gateway"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Github
          </a>
        </p>
      </main>
    </motion.div>
  );
};

export default Roadmap;
