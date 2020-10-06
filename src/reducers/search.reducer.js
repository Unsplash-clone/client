const reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return action.term;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
