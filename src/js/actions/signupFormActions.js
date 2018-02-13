import axios from 'axios';

export function updateName(name){
  return {
    type: 'UPDATE_NAME',
    payload: name
  }
}

export function updateEmail(email){
  return {
    type: 'UPDATE_EMAIL',
    payload: email
  }
}

export function updatePassword(password){
  return {
    type: 'UPDATE_PASSWORD',
    payload: password
  }
}

export function updateSubscription(subscription){
  return {
    type: 'UPDATE_SUBSCRIPTION',
    payload: subscription
  }
}

export function postData(formData){
  return function(dispatch){
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
    .then((response) => {
      dispatch({type: 'POST_SUCCESS'});
    })
    .catch((error) => {
      dispatch({type: 'POST_FAIL'});
    })
  }
}