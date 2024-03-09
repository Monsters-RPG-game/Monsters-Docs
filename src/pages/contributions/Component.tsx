import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';

const Contributions: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header">Contributions</h1>
      <main className="common-container_content">
        <h2 className="common-small-container_header">1.1 Project contributors</h2>
        <div className="my-3 flex flex-col">
          <h3 className="common-vsmall-container_header">
            Adam ( HurasAdam )
            <a href="https://github.com/HurasAdam" target="_blank" rel="noreferrer" className="leftsidebar-link group">
              Github
            </a>
          </h3>
          <p>Web developer, UI designer.</p>

          <h3 className="common-vsmall-container_header">
            Jakub ( Virus288 )
            <a href="https://github.com/Virus288" target="_blank" rel="noreferrer" className="leftsidebar-link group">
              Github
            </a>
          </h3>
          <p>Fullstack developer, Project owner.</p>
        </div>

        <h2 className="common-small-container_header">1.2 How can I contribute</h2>
        <p className="my-3">
          You can contribute by:
          <li>Testing applications</li>
          <li>Adding new features</li>
          <li>Improving documentation</li>
          <li>Reviewing others code</li>
          <li>Adding translation for clients</li>
        </p>
        <p className="my-3">
          All of backend components are prepared for containerization. If your hardware will struggle with running all
          services and their dependencies, you can write new code in TDD ( test driven development ) approach. By
          writing tests first with expected output from controllers/routes/handlers, your code will be fully tested and
          prepared for deployment. Always remember to include additional notes while making PR.
        </p>
      </main>
    </motion.div>
  );
};

export default Contributions;
