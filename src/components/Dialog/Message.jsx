import React from 'react';
import './Message.scss';

const Message = () => {
  const [own, setOwn] = React.useState(true);
  return (
    <>
      {own ? (
        <div className="chat-user-message_own">
          <span className="message">
            <div>
              <span>james</span> <span>12:48</span>
            </div>
            w
          </span>
          <img src="avatar.jpg" width={40} alt="" />
        </div>
      ) : (
        <div className="chat-user-message_user">
          <img src="avatar.jpg" width={40} alt="" />
          <span className="message">
            <div>
              <span>james</span> <span>12:48</span>
            </div>
            apdkhawuiodadawdhaowjdawdhoawhdoadhaapdkhawuiodadawdhaowjdawdhoawhdoadhaapdkhawuiodadawdhaowjdawdhoawhdoadha
          </span>
        </div>
      )}
    </>
  );
};

export default Message;
