import React from 'react';
import './Chat.scss';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';

const Chat = () => {
  const users = [
    { id: 1, name: 'Jack Yellow', photo: 'avatar.jpg', lastmessage: 'hello', time: '12:48' },
    {
      id: 2,
      name: 'John Blue',
      photo: 'avatar.jpg',
      lastmessage: 'dawdawdawdawdawdawda',
      time: '18:48',
    },
    {
      id: 3,
      name: 'Brad Bold',
      photo: 'avatar.jpg',
      lastmessage: 'lol dudas hello hwru whru',
      time: '20:01',
    },
  ];
  return (
    <div className="chat__wrapper">
      <Navbar />
      <div className="dialogs-list__wrapper">
        <Search />
        <div className="dialogs_list">
          {users.map((user) => (
            <div className="dialog__wrapper">
              <div className="dialog_user_info">
                <img className="avatar" src={user.photo} alt="" width={60} />
                <div>
                  <span>{user.name}</span>
                  <span>{user.lastmessage}</span>
                </div>
              </div>
              <img className="icon-close" src="icon-close.png" alt="" width={20} />
              <span className="dialog__time">{user.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-chat">
        <h3>Choose user for chat!</h3>
      </div>
    </div>
  );
};

export default Chat;
