import React, { useId } from "react";

function Inputbox({
  label,
  amount,
  onAmountchange,
  onCurrancychange,
  currancyOptions = [],
  selectCurrancy = "usd",
  amountDisable = false,
  currancyDisable = false,
  className = "",
}) {
  const inputid = useId();
  console.log(inputid);

  return (
    <div className="my-4">
      <div className="row">
      <div className="col-12">
      <label className="form-control" htmlFor={inputid}>{label}</label>
        <input className="form-control"
        id={inputid}
        type="number"
        placeholder="amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}
         />
      </div>
      <div className="col-12">
      <p className="fs-20">Currancy Type</p>
          <select className="form-control"
           value={selectCurrancy}
           disabled={currancyDisable}
           onChange={(e)=>onCurrancychange && onCurrancychange(e.target.value)} 
          >
          {
            currancyOptions.map((currancy)=>(
                <option key={currancy} value={currancy}>
                {currancy}
                </option>
                ))
          }
          </select>   
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
