import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';
import configFile from './configfile.json';
import { ECodeType } from '../../enums';
import generateCode from '../../tools/codeFormatter';

const Gateway: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">1. Overview</h1>
      <main className="common-container_content">
        <p className="my-3">
          Gateway is main service included in this project. Its job is to transfer user&quot;s requests to each
          microservice. It also handles caching user&apos;s data, authorization and real-time notifications. You can
          find it on{' '}
          <a
            href="https://github.com/Virus288/Monsters-gateway"
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
              href="https://www.npmjs.com/package/express"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Express
            </a>
          </li>
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
              href="https://www.npmjs.com/package/ejs"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Ejs
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/knex"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Knex
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/oidc-provider"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Oidc
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/redis"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Redis
            </a>
          </li>
          <li className="text-rose-400">
            <a
              href="https://www.npmjs.com/package/ws"
              target="_blank"
              rel="noreferrer"
              className="leftsidebar-link group"
            >
              Ws
            </a>
          </li>
        </p>

        <h2 className="common-small-container_header">1.2 Dependencies</h2>
        <p className="my-3">
          Gateway tries to connect to every other service. Besides that, it connects to:
          <li>Mysql</li>
          <li>RabbitMq</li>
          <li>Redis</li>
        </p>

        <h2 className="common-small-container_header">1.3 Config files</h2>
        <p className="my-3">
          In order to run gateway, you&apos;ll need running dependencies and 3 config files. In the future, we are
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
            <li className="text-rose-400">redisURI</li>
            is url used to connect to redis. Example:{' '}
            <span className="codeLine text-blue-400 block">redis://user:password@127.0.0.1:6379</span>
          </p>
          <p>
            <li className="text-rose-400">corsOrigin</li>
            is address or list of addresses, which you want to allow to connect to your server. Its used to block
            websites and other domains from accessing your application. Changing this will not prevent non-web clients
            from using your api. If you don&apos;t care about it, simply add &quot;*&quot; as value. Example:{' '}
            <span className="codeLine text-blue-400 block">http://192.168.1.15:3005</span>
          </p>
          <p>
            <li className="text-rose-400">myAddress</li>
            is address of your application. Its used for oidc client to properly handle users and logins. Example:{' '}
            <span className="codeLine text-blue-400 block">http://192.168.1.15:5003</span>
          </p>
          <p>
            <li className="text-rose-400">httpPort</li>
            is port, at which your application will listen on. Bear in mind, that this service was designed to stay
            behind proxy, which validates ssl certificates, If you are planning on using this application with open
            ports, make sure to add ssl cert adn replace http server with https server. Example:{' '}
            <span className="codeLine text-blue-400 block">80</span>
          </p>
          <p>
            <li className="text-rose-400">socketPort</li>
            is port, at which your websocket will listen on. Like in previous point, if you are planning on running this
            service publicly, its strongly suggested that you run your application via wss instead of ws connection. Its
            better to be secured than sorry. Example: <span className="codeLine text-blue-400 block">81</span>
          </p>
          <p>
            <li className="text-rose-400">mysql</li>
            is configuration for mysql client. It requires user, password, host and database. Example:{' '}
            <span className="codeLine text-blue-400 block">
              {'{"user": "user","password": "password","host": "127.0.0.1","db": "game"}'}`
            </span>
          </p>
          <p>
            <li className="text-rose-400">session</li>
            is configuration express session, which helps oidc handle elements and manages rate-limiters. Secured is
            boolean, which will put that cookie as &apos;secured&apos; cookie or not. Example:{' '}
            <span className="codeLine text-blue-400 block">
              {'{"secret": "secretPasswordPleaseDontUseOnlyLettersForPasswords","secured": true}'}`
            </span>
          </p>
        </span>

        <h2 className="common-small-container_header">1.4 Documentation</h2>
        <p className="my-3">
          This application uses jsdoc for documenting methods in code. Alongside jsdoc, you can access swagger docs on
          route /docs. Swagger configs are created with package swagger-jsdoc. Full documentation alongside diagrams
          will be added here in the future.
        </p>

        <h2 className="common-small-container_header">1.5 Tests</h2>
        <p className="my-3">
          This project has 3 types of tests. Unit, db and e2e. All tests are written in jest, which is also used to mock
          methods. E2e tests are using superTest to send requests on started server. Websocket tests are made using
          MocSocket
        </p>
      </main>
    </motion.div>
  );
};

export default Gateway;
