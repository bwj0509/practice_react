import React from 'react';

function User(props) {
  return (
    <div>
      <b>{props.user.username}</b> <span>({props.user.email})</span>
    </div>
  );
}

function UserList(props) {
  return (
    <div>
      {props.users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;