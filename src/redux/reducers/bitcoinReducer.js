const initialState = {
  bpi: {},
};

export function bitcoinReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BITCOIN":
      console.log("XXX", action.payload);
      return {
        ...state,
        bpi: action.payload,
      };

    default:
      return state;
  }
}
