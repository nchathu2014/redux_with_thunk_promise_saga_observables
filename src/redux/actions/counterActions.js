const incrementAsync = () => {
  return {
    type: "INC",
  };
};

export const increment = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAsync());
    }, 5000);
  };
};

export const decrement = () => {
  return {
    type: "DEC",
  };
};
