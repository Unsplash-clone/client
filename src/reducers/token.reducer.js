const reducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return action.token;
    }
    case "logout": {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
