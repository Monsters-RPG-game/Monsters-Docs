import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';
import configFile from './configfile.json';
import { ECodeType } from '../../enums';
import generateCode from '../../tools/codeFormatter';

const WebClient: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">1. Overview</h1>
      <main className="common-container_content">
        <p className="my-3">
          WebClient is game client written in react. Client is text-base and tries to emulate older text-based games.
          You can find it on{' '}
          <a
            href="https://github.com/Virus288/Monsters-WebClient"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Github
          </a>
        </p>

        <h2 className="common-small-container_header">1.1 Tech stack</h2>
        <p className="my-3">
          This service is written in React. Core components are:
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/tailwindcss"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Tailwind
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/react"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              React
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/zustand"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              zustand
            </a>
          </li>
        </p>

        <h2 className="common-small-container_header">1.1 Config files</h2>
        <p className="my-3">In order to run this service, you&apos;ll need .env file.</p>
        {generateCode(ECodeType.Json, configFile)}

        <span className="my-3">
          Lets break this down:
          <p>
            <li className="text-rose-400">VITE_API_BACKEND</li> is url where backend API is located. Example:{' '}
            <span className="codeLine text-blue-400 block">http://localhost:5003</span>
          </p>
          <p>
            <li className="text-rose-400">VITE_API_WS_BACKEND</li>
            is url where backend websocket is located. Example:{' '}
            <span className="codeLine text-blue-400 block">ws://localhost:5003</span>
          </p>
          <p>
            <li className="text-rose-400">VITE_API_REDIRECT_LOGIN_URL</li>
            is url where backend should relocate user after correct login. Example:{' '}
            <span className="codeLine text-blue-400 block">http://localhost:3005</span>
          </p>
          <p>
            <li className="text-rose-400">VITE_API_HOME</li>
            is url where frontend is located. Example:{' '}
            <span className="codeLine text-blue-400 block">http://localhost:3005</span>
          </p>
          <p>
            <li className="text-rose-400">VITE_API_CLIENT_SECRET</li>
            is client secret. You should get this secret from backend&apos;s configs. By default, backends creates
            sample user in mysql database with sample password, which oidc will use. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
          <p>
            <li className="text-rose-400">VITE_API_CLIENT_ID</li>
            is client id. You should get this secret from backend&apos;s configs. By default, backends creates sample
            user in mysql database with sample password, which oidc will use. Example:{' '}
            <span className="codeLine text-blue-400 block">secretPasswordPleaseDontUseOnlyLettersForPasswords</span>
          </p>
        </span>

        <h2 className="common-small-container_header">1.2 Documentation</h2>
        <p className="my-3">
          This application uses jsdoc for documenting methods in code. Full documentation alongside diagrams will be
          added here in the future.
        </p>

        <h2 className="common-small-container_header">1.3 Tests</h2>
        <p className="my-3">
          Currently, this project has no tests. We are planning writing tests with jest and e2e tests with cypress
        </p>
      </main>
    </motion.div>
  );
};

export default WebClient;
