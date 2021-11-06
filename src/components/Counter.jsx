import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "./../redux/actions/counterActions";

const Counter = () => {
  const { count } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(counterActions.increment())}>
        INC (+)
      </button>
      <button onClick={() => dispatch(counterActions.decrement())}>
        DEC (-)
      </button>
    </React.Fragment>
  );
};

export default Counter;
