import React from 'react';
import { motion } from 'framer-motion';
import * as animation from '../../style/animation';

const NewClient: React.FC = () => {
  return (
    <motion.div variants={animation.opacity} initial="init" animate="visible" exit="exit" className="common-container">
      <h1 className="common-container_header ">I want to create my own client</h1>
      <main className="common-container_content">
        <p className="my-3">
          Backend is just rest api after all so all you need to build a client is language capable of sending http
          requests. You can even create discord bot as client for this game.
        </p>

        <h2 className="common-small-container_header">2. Users and authentication</h2>
        <p className="my-3">
          This application uses OIDC as authorization system. Because of this, user is required to access login website,
          with params provided by your client. Valid login will redirect user to url specified in client&apos;s
          settings, same as logging. If you want to create discord bot/unity app/other non-web based software, you still
          need to send user to login page. You can automate this process by modifying backend to send websocket message
          with code to your application after user successfully logs in.
        </p>
        <p className="my-3">
          Creating accounts is easier. All that backend needs is http POST request. Currently validating emails is
          disabled, because we did not yet create service for it. It will come in the future.
        </p>

        <h2 className="common-small-container_header">3. State management</h2>
        <p className="my-3">User created account, validated himself and you got bearer token in app. Whats next ?</p>
        <p className="my-3">
          First thing first, we need to fetch data about user&apos;s profile, in order to handle what he can or cannot
          do. After logging in, client should fetch user&apos;s profile and save it in application. This profile
          includes character&apos;s state, which manages what user can do. For example, if user is currently in fight,
          he shouldn&apos;t be able to move on the map or talk to npcs, right ? Profile&apos;s &quot;state&quot; param
          defines that.
        </p>
        <p className="my-3">
          After fetching profile, client should connect via websocket to receive notifications and messages in real
          time. This step is not required but its really useful, because it makes this game more &quot;alive&quot;.
        </p>
        <p className="my-3">
          To fully initialize user, we should also fetch his messages. All incoming messages are sent to user via
          websocket, so asking for all messages can be done at start to know if user received any new messages or not.
        </p>

        <h2 className="common-small-container_header">4. User&apos;s commands</h2>
        <p className="my-3">
          Although it might not be important for you, you can store up to 100 &quot;commands&quot; that user sent. Our
          main client is text-based game and we use logs to store what user wrote as history. You can find more about it
          in swagger&apos;s documentation.
        </p>

        <h2 className="common-small-container_header">5. Whats next?</h2>
        <p className="my-3">
          After initialization, user is ready to send messages and join fights. In current state other services are not
          yet ready to use them. In part, we have inventory management system, live chat and few other things, Sadly
          most of stuff is untested, nor finished. After we add more, next elements will appear here.
        </p>
      </main>
    </motion.div>
  );
};

export default NewClient;
