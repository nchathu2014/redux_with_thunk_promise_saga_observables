import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBitCoin } from "./../redux/actions/bitcoinAction";
//https://api.coindesk.com/v1/bpi/currentprice.json
function Users(props) {
  const { bpi } = useSelector((store) => store.bitcoin);
  const dispatch = useDispatch();

  const renderBitCoinInfor = () => {
    for (let row of Object.entries(bpi)) {
      for (let item of row[0]) {
        console.log("-->", item);
        <li>{item}</li>;
      }
    }
    /* 
    console.log(Object.entries(bpi));
    for (const [type, typeInfo] of Object.entries(bpi)) {
      const { code, description, rate, rate_float, symbol } = typeInfo;
      return (
        <div>
          <b>{type}</b>
          <li>{code}</li>
          <li>{description}</li>
          <li>{rate}</li>
          <li>{rate_float}</li>
          <li>{symbol}</li>
        </div>
      );
    } */

    //const types = Object.keys(bpi);
    //return types.map((type) => <li>{type}</li>);
  };

  return (
    <div>
      <h1>Users</h1>
      {renderBitCoinInfor()}
      <button onClick={() => dispatch(getBitCoin())}>Load Users</button>
    </div>
  );
}

export default Users;
