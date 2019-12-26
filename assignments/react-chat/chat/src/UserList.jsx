import React, { useState, useEffect } from 'react';
import {getUsers} from './services';

function UserList({props}) {
  const [users, setUsers] = useState([]);
  const user = props.user;

  useEffect(() => {
    getUsers(user)
    .then( userList => { 
      setUsers(userList);
    })
    .catch(function(e){
      props.setError(e.message);
    });
  }, [props, user]);
  
 
  const userList = users.map( function (user,i){
      return <li key={i}>
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