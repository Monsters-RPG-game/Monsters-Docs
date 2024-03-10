import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as animation from '../../style/animation';

const Home: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">Introduction</h1>
      <main className="common-container_content">
        <p className="my-3">
          Welcome to documentation of Open-Source backend for RPG games. Codename
          <span className="inline text-rose-600 text-sm md:text-lg lg:text-xl font-bold"> &quot;Monsters&quot;</span>.
        </p>
        <p className="my-3">
          This website will try to explain services mechanics, how they work, how you can start them on your own and how
          you can contribute.
        </p>

        <h2 className="common-small-container_header">1.1 Whats this ?</h2>
        <p className="my-3">
          Monsters is open-source backend for rpg games, written in node.js. Project is divided into
          &quot;microservices&quot;, which allows this project to better scale to users requirements. Most users are
          moving on the map ? Put more cpu to &quot;Maps&quot;. Users spend whole day killing bandits ? Scale
          &quot;fights&quot; horizontally. This way of writing code allows you, game owner/hobbyist/dev to better handle
          usage of your servers.
        </p>

        <h2 className="common-small-container_header">1.2 Philosophy</h2>
        <p className="my-3">
          Main idea behind this project is to create FOSS ( free and open-source ) software, that everyone can use. We
          believe, that by creating open projects, we make tech more accessible for other people. People who don&quot;t
          have resources for learning how to create backends for their games, people who want to learn code, but need
          real life usage, people who need ready-to-use services. By making foss projects, we make internet as whole
          more open and better.
        </p>

        <h2 className="common-small-container_header">1.3 Services</h2>
        <p className="my-3">
          Each service is unique and manages part of your game. You can learn more about each service, on its sub-page,
          which you can chose on the left. Lets break them down.
        </p>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Gateway</h3> is main service included in this project. Its job is to
          transfer user&quot;s requests to each microservice. It also handles caching user&apos;s data, authorization
          and real-time notifications.
        </li>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Users</h3> is another part of this project, which controls user&apos;s
          profiles, validates logins and manages characters stats. It also handles parties, different characters and in
          the future, npcs.
        </li>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Fights</h3> is pretty straightforward service. It manages fights,
          generates &quot;stages&quot; for each of them and saves logs from each action.
        </li>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Messages</h3> as the name applies, manages messages. There are 2 types of
          messages, which service controls. Live-chat messages and classic messages.
        </li>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Head</h3> is project, which includes configuration files for each of
          previously mentioned services. With it, you can deploy whole application in minutes!
        </li>
        <li className="my-2">
          <h3 className="text-rose-400 inline">Web client</h3> is &quot;text based&quot; client for this game. Whole
          application was inspired by old school text based games and in current state is more a proof-of-concept that
          fully fledged client, but we are slowly going in good direction.
        </li>

        <h2 className="common-small-container_header">1.4 Installation</h2>
        <p className="my-3">
          Every service in backend in written in node.js. In addition to that, application requires:
          <li>Mysql</li>
          <li>MongoDB</li>
          <li>RabbitMQ</li>
          <li>Redis</li>
          Each service requires config files and each service uses different databases. You can find more about it in
          each service sub-page, or in each service README.MD file. Every project already has preconfigured example
          file, which you can clone and edit. Frontend application only requires npm to download dependencies and build
          it. You can always initialize init.sh script from &quot;head&quot;. More on it in &quot;head&quot; category (
          1.3 )
        </p>

        <h2 className="common-small-container_header">1.5 How can I pull all services at once to work on them ?</h2>
        <p className="my-3">
          <Link className="text-rose-600" to="services/head">
            Head{' '}
          </Link>
          is service which includes all backend services and configs to start them. In order to initialize all services
          to work on them, you can start dependencies in docker and run init.sh file in this repo. It will initialize
          all services on its own. Keep in mind that this is script for linux. We are planning on writing 1 for windows
          too
        </p>

        <h2 className="common-small-container_header">1.6 Example data flow</h2>
        <p className="my-3">Diagram below shows example data flow in application</p>

        <img src="/general_overview.png" alt="Logo" />

        <h2 className="common-small-container_header">1.7 Wrapping up</h2>
        <p className="my-3">
          Remember that this is WIP ( work in progress ) project. Expect missing elements and/or bugs. We are small team
          of people working in our free time. Wanna help ? Found a bug ? See anything wrong ? Drop new issue on{' '}
          <a
            href="https://github.com/Virus288/Monsters-gateway"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Github
          </a>{' '}
          or message me on{' '}
          <a
            href="https://discordapp.com/users/virus288"
            target="_blank"
            rel="noreferrer"
            className="leftsidebar-link group"
          >
            Discord
          </a>
        </p>
      </main>
    </motion.div>
  );
};

export default Home;
