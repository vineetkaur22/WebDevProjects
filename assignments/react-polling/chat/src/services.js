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

export const login = ({user}) => {
  return fetch('/login', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({ user }),
  })
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
};

export const logout = () => {
  return fetch('/logout', {
    method: 'GET',
  })
  .catch( err => {
    return Promise.reject({ err: 'network-issue', details: err });
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    }
    return Promise.reject({ err: 'server-error', details: response.statusCode });
  });
};



export const getUsers = (() => {
  return fetch('/users/', {
    method: 'GET', // the default, just here to be explicit
    credentials: 'include',  // use cooki
  })
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

export const getMessages = ((user) => {
  return fetch('/messages/', {
    method: 'GET', 
    credentials: 'include', 
  })
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

export const sendMessage = ({message}) => {
  return fetch('/messages/', {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify({message}),
    credentials: 'include',
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