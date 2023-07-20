import React from 'react';
import './Chat.scss';
import Navbar from '../components/Navbar/Navbar';
import Search from '../components/Search/Search';
import ChatUser from '../components/Dialog/ChatUser';
import DialogList from '../components/Dialog/DialogList';

const Chat = () => {
  const [chosedDialog, setChosedDialog] = React.useState(true);
  return (
    <div className="chat__wrapper">
      <Navbar />
      <div className="dialogs-list__wrapper">
        <Search />
        <DialogList />
      </div>
      {chosedDialog ? (
        <ChatUser />
      ) : (
        <div className="right-chat">
          <h3>Choose user for chat!</h3>
        </div>
      )}
    </div>
  );
};

export default Chat;
