export const validationMiddlware = (store) => (next) => (action) => {
  const state = store.getState();
  const count = state.counter.count;

  if (action.type === "INC" && count > 15) {
    store.dispatch({
      type: "RESET",
    });
  }

  return next(action);
};
