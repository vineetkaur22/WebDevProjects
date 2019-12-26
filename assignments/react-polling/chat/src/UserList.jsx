import React, { useState, useEffect } from 'react';
import {getUsers} from './services';

function UserList({setErrorMessage}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
    .then( userList => { 
      setUsers(userList);
    })
    .catch(function(e){
      setErrorMessage(e.message);
    });
  }, []);
  
  const userList = users.map( (user) => {
      return <li key={user.sender+user.timestamp}>
        <div>
          <div className="user-icon-content">
              <img className="user-icon" alt="user icon" src={user.image}/>
          </div>
          <span className="userlist-username">{user.sender}</span>
          <span className="timestamp-sidebar">{user.timestamp}</span>
        </div>
      </li> 
    }
  );

  return (
    <ul className="users">
       {userList} 
    </ul>
  );
};

export default UserList;