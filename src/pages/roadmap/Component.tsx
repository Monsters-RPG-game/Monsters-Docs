import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';

const Roadmap: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">Roadmap</h1>
      <main className="common-container_content">
        <p className="my-3">
          Each service has issue called &apos;roadmap&apos;, which in current state is &apos;road to version 1.0&apos;.
          When each service will reach this point, roadmap will be updated. If you want to access roadmap of specific
          service, simply follow
          <a
            href="https://github.com/Monsters-RPG-game"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            {' '}
            this link{' '}
          </a>
          , select service you want and find issue called &apos;Roadmap&apos;
        </p>
      </main>
    </motion.div>
  );
};

export default Roadmap;
