export default function reducer(state={
  currentTab: 'Pricing',
}, action){
  switch (action.type){
    case 'CHANGE_TAB': {
      return {...state, currentTab: action.payload};
    }
    default: {
      return state;
    }
  }
}