import React, { useState } from 'react';
import BotIcon from '../common/icons/bot';
import './bot.scss';

export default function Bot() {
  const [showNotification, setShowNotification] = useState(true);
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    if (showNotification && !showBot) setShowNotification(false);
    setShowBot(!showBot);
  };
  return (
    <div className='bot-container'>
      <iframe
        title='bot'
        className={`bot ${showBot ? '' : 'hide-bot'}`}
        src='https://webchat.botframework.com/embed/Porfolio-bot?s=AjU8agzJKBo.Oko7jJo5YjFSOTo1JBIxm4wI7M-rCQcMFzxgu0Hu-O0'></iframe>
      <button onClick={toggleBot}>
        <BotIcon />
        <div
          className={`notification ${
            showNotification ? '' : 'notification-close'
          }`}>
          1
        </div>
      </button>
    </div>
  );
}
