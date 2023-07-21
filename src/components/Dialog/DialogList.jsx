import React from 'react';
import './DialogList.scss';
import { useNavigate } from 'react-router-dom';

const DialogList = ({users}) => {
  const navigate = useNavigate();
  return (
    <div className="dialogs_list">
      {users.map((user) => (
        <div onClick={()=>navigate(`/${user.id}`)} className="dialog__wrapper">
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
