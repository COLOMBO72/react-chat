import React from 'react';
import './ChatUser.scss';

const ChatUser = () => {
  return (
    <div className="chat-user__wrapper">
      <div className="chat-user__header">
        <img src="avatar.jpg" width={40} alt="" />
        <span>James Franco</span>
        <img className="icon-close" src="icon-close.png" width={30} alt="" />
      </div>
      <div className="chat-user__dialog">
        <div className="chat-user-message_own">
          <span className="message">
            <div>
              <span>james</span> <span>12:48</span>
            </div>
            w
          </span>
          <img src="avatar.jpg" width={40} alt="" />
        </div>
        <div className="chat-user-message_user">
          <img src="avatar.jpg" width={40} alt="" />
          <span className="message">
            <div>
              <span>james</span> <span>12:48</span>
            </div>
            apdkhawuiodadawdhaowjdawdhoawhdoadhaapdkhawuiodadawdhaowjdawdhoawhdoadhaapdkhawuiodadawdhaowjdawdhoawhdoadha
          </span>
        </div>
      </div>
      <div className="chat-user__manage">
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatUser;
