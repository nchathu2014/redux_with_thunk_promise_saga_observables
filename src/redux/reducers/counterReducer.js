const initialState = {
  count: 10,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1,
      };
    case "DEC":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
}
