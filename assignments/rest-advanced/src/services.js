export function getUserList (username){
		let url = 'http://localhost:3000/users/'+ username;
		return fetch(url)
				.catch(function(error) {
					return Promise.reject('Network Error');
				})
				.then(function(response) {
					if(response.ok){
					return Promise.resolve(response);
					} 
					else if (response.status == 403){
					return Promise.reject('You are not an authorized user');
					}
					else if (response.status == 401){
						return Promise.reject('You must be logged in');
					}
				});
}

export function getMessages(username) {
		let url = 'http://localhost:3000/messages/'+ username;
		return fetch(url)
				.catch(function(error) {
					return Promise.reject('Network Error');
				})
				.then(function(response) {
					if(response.ok){
					return Promise.resolve(response);
					} 
					else if (response.status == 403){
					return Promise.reject('You are not an authorized user');
					}
					else if (response.status == 401){
						return Promise.reject('You must be logged in');
					}
				});
 }
