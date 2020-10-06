const reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
