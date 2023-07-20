import React from 'react';
import './DialogList.scss';

const DialogList = () => {
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
  );
};

export default DialogList;
