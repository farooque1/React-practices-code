import axios from "axios";
import React, { useEffect, useState } from "react";

function Freshcmp() {
  const [color, setcolor] = useState();
  const [inc, setinc] = useState(0);
  const [data, setdata] = useState([]);

  const handlecolor = () => {
    setcolor("yellow");
    console.log(color);
  };

  const handleInc = () => {
    setinc(inc + 1);
    console.log(inc);
  };

  const apidata = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  };
  useEffect(() => {
    apidata();
  }, []);

  let obj = { name: "farooque", salary: 345, address: "xyz" };
  console.log(obj);

  let obj1 = [
    { name: "farooque", salary: 345, address: "xyz" },
    { name: "farooque2", salary: 34522, address: "xyz2" },
    { name: "farooque3", salary: 34533, address: "xyz1" },
  ];
  console.log(obj1);

  const ar = [1, 2, 3, 4, 5, 6, 79, 10, 12, 4, 6, 7];
  console.log(ar);

  const arname = ["farooque", "shaikh", "abc", "pqrs", "nmn"];
  console.log(arname);

  const sname = arname.sort();
  console.log(sname);

  const rm = new Set(ar);
  console.log("New set", rm);

  const sort = ar.sort();
  console.log("sort array", sort);

  const as = ar.sort((a, b) => a - b);
  console.log("only assending order", as);

  const ras = new Set(ar.sort((a, b) => a - b));
  console.log("Remove dublicate value and assending order", ras);

  const dn = new Set(ar.sort((a, b) => b - a));
  console.log(dn);

  console.log("before remove array", ar);

  const splicemethod = ar.splice(11, 1);
  console.log("splice method", splicemethod);
  console.log("after remove array", ar);

  const array = [1, 2, 4, 2, 5, 5, 5];
  console.log("array op", array);
  const duplicates = array.filter(
    (element, index, arr) => arr.indexOf(element) !== index
  );
  console.log("duplicates", duplicates);
  const unique_duplicates = [...new Set(duplicates)];
  console.log("unique duplicates", unique_duplicates);

  const originalArr = [1, 2, 3, 4,5,6,7,89,9];
  console.log("original", originalArr);
  const shallowCopy1 = originalArr.slice();
  const shallowCopy2 = [...originalArr];
  console.log("shallow copy 1",shallowCopy1);
  console.log("shallow copy 2",shallowCopy2);


  const originalObj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObj));

console.log("deep copy",deepCopy);

const originalArr1 = [1, [2, 3], [4, [5]]];
const deepCopy1 = JSON.parse(JSON.stringify(originalArr1));

console.log("deepcopy 1",deepCopy1);

  return (
    <div>
      Console all data Freshcmp
      <h1 className="mobile1">Mobile Text</h1>
      <h1 className="desktop1">Desktop Text</h1>
      <button style={{ backgroundColor: color }} onClick={handlecolor}>
        Change color
      </button>
      <button onClick={handleInc}>Increment value</button> {inc}
      {data &&
        data.map((x) => (
          <div key={x.id}>
            <h1>{x.title}</h1>
            <h2>Hello</h2>
          </div>
        ))}
    </div>
  );
}

export default Freshcmp;
