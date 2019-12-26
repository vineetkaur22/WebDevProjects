export const addUser = ({username}) => {
  return fetch('/users', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({username}),
  })
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => { 
    if( response.ok ) {
      return Promise.resolve(response);
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
};

export const getUsers = ((username) => {
  return fetch('/users/' + username)
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
});

export const getMessages = ((username) => {
  return fetch('/messages/' + username)
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
});

export const sendMessage = ({user, message}) => {
  return fetch('/messages/' + user, {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({message}),
  })
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => { 
    if( response.ok ) {
      return Promise.resolve(response);
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
};