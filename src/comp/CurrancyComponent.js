import React, { useState } from "react";
import Currancyhook from "../customhook/Currancyhook";
import Inputbox from "./Inputbox";

function CurrancyComponent() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [Convertamount, setConvertamount] = useState(0);

  const currancyInfo = Currancyhook(from);

  console.log(currancyInfo);

  const options = Object.keys(currancyInfo);
  console.log("options ", options);

  const swap = () => {
    setfrom(to);
    setto(from);
    setConvertamount(amount);
    setAmount(amount);
  };

  const convert = () => {
    setConvertamount(amount * currancyInfo[to]);
  };

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-6 text-center border text-white" style={{background:`url('https://images.pexels.com/photos/5466789/pexels-photo-5466789.jpeg?cs=srgb&dl=pexels-olia-danilevich-5466789.jpg&fm=jpg')`,backgroundSize:'cover'}}>
        </div>
        <div className="col-6 border">
        <h2>Currancy Converter</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <Inputbox
              label="From"
              amount={amount}
              currancyOptions={options}
              onCurrancychange={(currancy) => setAmount(amount)}
              selectCurrancy={from}
              onAmountchange={(amount) => setAmount(amount)}
            />
            <div>
              <button className="btn btn-primary" type="button" onClick={swap}>
                SWAP
              </button>
            </div>
            <Inputbox
              label="To"
              amount={Convertamount}
              currancyOptions={options}
              onCurrancychange={(currancy) => setto(currancy)}
              selectCurrancy={to}
              amountDisable
            />
            <button className="btn btn-danger mb-3" type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrancyComponent;
