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