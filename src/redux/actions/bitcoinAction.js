const axios = require("axios");

const getBitCoinAsync = (payload) => {
  return {
    type: "GET_BITCOIN",
    payload,
  };
};

export const getBitCoin = () => {
  return async (dispatch, getState) => {
    const {
      data: { bpi },
    } = await axios("https://api.coindesk.com/v1/bpi/currentprice.json");
    //console.log(bpi);
    dispatch(getBitCoinAsync(bpi));
  };
};
