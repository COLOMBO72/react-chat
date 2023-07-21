import React from 'react';
import './Chat.scss';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import ChatUser from '../components/Dialog/ChatUser';
import DialogList from '../components/Dialog/DialogList';
import { useParams } from 'react-router-dom';

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
  const params = useParams();
  return (
    <div className="chat__wrapper">
      <Navbar />
      <div className="dialogs-list__wrapper">
        <Search />
        <DialogList users={users} />
      </div>
      {params.id ? (
        <ChatUser id={params.id} />
      ) : (
        <div className="right-chat">
          <h3>Choose user for chat!</h3>
        </div>
      )}
    </div>
  );
};

export default Chat;
