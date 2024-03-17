import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';
import configFile from './configfile.json';
import { ECodeType } from '../../enums';
import generateCode from '../../tools/codeFormatter';

const Head: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">1. Overview</h1>
      <main className="common-container_content">
        <p className="my-3">
          Head is application, which contains docker configuration files alongside all services added as git submodules
          Its job is to allow quick access to all required code. You can find it on{' '}
          <a
            href="https://github.com/Monsters-RPG-game/Head"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Github
          </a>
        </p>

        <h2 className="common-small-container_header">2. Tech stack</h2>
        <p className="my-3">
          This service is stack of configuration files. You can find inside
          <li className="my-1">Configs for docker all dependencies</li>
          <li className="my-1">Configs for k8s</li>
          <li className="my-1">Preconfigured makefile</li>
        </p>

        <h2 className="common-small-container_header">3. Config files</h2>
        <p className="my-3">
          In order to run this service, you&apos;ll need running .env file with configs for dependencies
        </p>
        {generateCode(ECodeType.Env, configFile)}

        <span className="my-3">
          Lets break this down:
          <p>
            <li className="text-rose-400">MONGO_PASSWORD</li> is password for Mysql database. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">MONGO_CLIENT</li>
            is client for MongoDb. Example: <span className="codeLine text-blue-400 block">client</span>
          </p>
          <p>
            <li className="text-rose-400">RABBIT_PASSWORD</li>
            is password for RabbitMQ. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">RABBIT_CLIENT</li>
            is client for RabbitMQ. Example: <span className="codeLine text-blue-400 block">client</span>
          </p>
          <p>
            <li className="text-rose-400">REDIS_PASSWORD</li>
            is password for Redis. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">MYSQL_PASSWORD</li>
            is password for Mysql. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">MYSQL_ROOT_PASSWORD</li>
            is root password for Mysql. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">MYSQL_USER</li>
            is client for Mysql. Example: <span className="codeLine text-blue-400 block">client</span>
          </p>
        </span>

        <h2 className="common-small-container_header">4. Automated script</h2>
        <p className="my-3">
          This project also includes script to automate initialization of all services. File is called
          &quot;init.sh&quot; and its explained in &quot;head&quot; readme. In summary, this script will fetch latest
          development version of each service, run npm install and initialize configs if files do not exist already
        </p>
      </main>
    </motion.div>
  );
};

export default Head;
