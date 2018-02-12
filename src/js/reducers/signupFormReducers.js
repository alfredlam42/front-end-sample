export default function reducer(state={
  name: '',
  email: '',
  password: '',
  subscription: '',
}, action){
  switch(action.type){
    case 'UPDATE_NAME': {
      return {...state, name: action.payload};
    }
    case 'UPDATE_EMAIL': {
      return {...state, email: action.payload};
    }
    case 'UPDATE_PASSWORD': {
      return {...state, password: action.payload};
    }
    case 'UPDATE_SUBSCTIPTION':{
      return {...state, subscription: action.payload};
    }
    default: {
      return state;
    }
  }
}