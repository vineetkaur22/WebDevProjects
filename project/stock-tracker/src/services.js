export const login = ({username}) => {
    return fetch('/login', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({username}),
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: "network error" });
    })
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }
    });
 };
  
export const addUser = ({username}) => {
    return fetch('/users', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({username}),
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: "network error" });
    })
    .then( response => { 
      if( response.ok ) {
        return Promise.resolve(response);
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }
    });
};

export const addStock = ({stockname, username}) => {
    return fetch('/stocks', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({stockname,username}),
      credentials: 'include',
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => { 
      if( response.ok ) {
        return Promise.resolve(response);
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }
    });
};

export const getStocks = (() => {
    return fetch('/stocks', {
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
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }    });
  });

export const refreshStocks = (() => {
    return fetch('/refreshstocks', {
      method: 'GET', 
      credentials: 'include',
    })
    .catch( err => {
      if(err)
        return Promise.reject({ err: 'network-issue', details: err});
      else
        return Promise.reject({ err: 'network-issue', details:"network error" });
    })
    .then( response => {
      if( response.ok ) {
        return response.json();
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }
    });
  });

export const updateStock = ({stockname, quantity, equity}) => {
    return fetch('/stocks', {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({stockname, quantity, equity}),
      credentials: 'include',
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => { 
      if( response.ok ) {
        return Promise.resolve(response);
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }    });
  };

export const deleteStock = ({stockname}) => {
    return fetch('/stocks', {
      method: 'DELETE',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({stockname}),
      credentials: 'include',
    })
    .catch( err => {
      return Promise.reject({ err: 'network-issue', details: err });
    })
    .then( response => { 
      if( response.ok ) {
        return Promise.resolve(response);
      }
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }    });
  };

export const logout = () => {
    return fetch('/logout', {
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
      else if (response.status === 403){
        return Promise.reject('You are not an authorized user');
      }
      else if (response.status === 401){
          return Promise.reject('You must be logged in');
      }
      else{
        return Promise.reject('Server error');
      }    });
  };
  
  
