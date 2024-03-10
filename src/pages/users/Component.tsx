import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';
import configFile from './configfile.json';
import { ECodeType } from '../../enums';
import generateCode from '../../tools/codeFormatter';

const Users: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">1. Overview</h1>
      <main className="common-container_content">
        <p className="my-3">
          Users is service for managing users data. From creating account and password validation, to creating new
          character, equipping items to creating a party. It manages everything in-game character related. You can find
          it on{' '}
          <a
            href="https://github.com/Virus288/Monsters-users"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Github
          </a>
        </p>

        <h2 className="common-small-container_header">1.1 Tech stack</h2>
        <p className="my-3">
          This service is written in node.js. Core components are:
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/amqplib"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              RabbitMq
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/mongoose"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Mongoose
            </a>
          </li>
        </p>

        <h2 className="common-small-container_header">1.2 Dependencies</h2>
        <p className="my-3">
          Gateway tries to connect to every other service. Besides that, it connects to:
          <li>RabbitMq</li>
          <li>MongoDb</li>
        </p>

        <h2 className="common-small-container_header">1.3 Config files</h2>
        <p className="my-3">
          In order to run this service, you&apos;ll need running dependencies and 3 config files. In the future, we are
          planning on fixing config loader, so it will only require 1 config.
        </p>
        {generateCode(ECodeType.Json, configFile)}

        <span className="my-3">
          Lets break this down:
          <p>
            <li className="text-rose-400">amqpURI</li> is url used to connect to rabbitMq. Example:{' '}
            <span className="codeLine text-blue-400 block">amqp://client:password@127.0.0.1:5672</span>
          </p>
          <p>
            <li className="text-rose-400">mongoURI</li>
            is url used to connect to mongoDb. Example:{' '}
            <span className="codeLine text-blue-400 block">mongodb://client:password@127.0.0.1:27017</span>
          </p>
        </span>

        <h2 className="common-small-container_header">1.4 Documentation</h2>
        <p className="my-3">
          This application uses jsdoc for documenting methods in code. Full documentation alongside diagrams will be
          added here in the future.
        </p>

        <h2 className="common-small-container_header">1.5 Tests</h2>
        <p className="my-3">
          This project has 3 types of tests. Unit, db and e2e. All tests are written in jest, which is also used to mock
          methods. MongoDB mocks are made using mongodb-memory-server. E2e tests are using mocked rabbitMQ connection
          and fake messages
        </p>

        <h2 className="common-small-container_header">1.6 Initialization data flow</h2>
        <p className="my-3">Diagram below shows application flow after it starts</p>

        <img src="/service_init.png" alt="Logo" />
      </main>
    </motion.div>
  );
};

export default Users;
