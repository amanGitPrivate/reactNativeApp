const INITIAL_STATE = {todoElements:[]};

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case 'ADD_TODO':
    state = Object.assign( {}, state,{ todoElements: action.payload})
    return state;
    default:
      return state;
  }
};
