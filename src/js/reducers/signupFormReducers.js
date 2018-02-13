export default function reducer(state={
  formData: {
    name: '',
    email: '',
    password: '',
    subscription: '',
  },
  postStatus: null
}, action){
  switch(action.type){
    case 'UPDATE_NAME': {
      return {
        ...state,
        formData: {...state.formData, name: action.payload}
      };
    }
    case 'UPDATE_EMAIL': {
      return {
        ...state,
        formData: {...state.formData, email: action.payload}
      };
    }
    case 'UPDATE_PASSWORD': {
      return {
        ...state,
        formData: {...state.formData, password: action.payload}
      };
    }
    case 'UPDATE_SUBSCRIPTION': {
      return {
        ...state,
        formData: {...state.formData, subscription: action.payload}
      };
    }
    case 'POST_SUCCESS': {
      return {
        ...state,
        formData: {
          name: '',
          email: '',
          password: '',
          subscription: ''
        },
        postStatus: 'SUCCESS'
      };
    }
    case 'POST_FAIL': {
      return {...state, postStatus: 'FAIL'}
    }
    default: {
      return state;
    }
  }
}