import React from 'react';
import './ChatUser.scss';
import Message from './Message';
import { useNavigate, useParams } from 'react-router-dom';
import FatalPage from '../FatalPage/FatalPage';

const ChatUser = ({id}) => {
  const params = useParams();
  const navigate = useNavigate();
  function closeDialog() {
    navigate('/');
  }
  if (!params.id){
    return <FatalPage/>
  }
  return (
    <div className="chat-user__wrapper">
      <div className="chat-user__header">
        <img src="avatar.jpg" width={40} alt="" />
        <span>James Franco</span>
        <img
          onClick={() => closeDialog()}
          className="icon-close"
          src="icon-close.png"
          width={30}
          alt=""
        />
      </div>
      <div className="chat-user__dialog">
        <Message />
      </div>
      <div className="chat-user__manage">
        <input type="text" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatUser;
