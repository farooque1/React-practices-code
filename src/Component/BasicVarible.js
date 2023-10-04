import React from "react";

function BasicVarible() {
  
    // Array
    // let myArr=[1,2,3,4,6,8,9,8,44,99];
    // console.log("A",myArr);
    // console.log("push",myArr.push(2));
    // console.log("pop",myArr.pop());
    // console.log("shift remove 0 postion element",myArr.shift());
    // console.log("unshift add 0 postion element",myArr.unshift(5));
    // console.log("includes return true and false",myArr.includes(10));
    // console.log("IndexOf",myArr.indexOf(44));
    // const newarr=myArr.join()
    //  console.log("Join ",newarr); 
    // const newarr=myArr.slice(1,3)
    // console.log("slice ",newarr); 
    // console.log(myArr); 
    // const newarrp=myArr.splice(1,3)
    // console.log("splice ",newarrp);
    // console.log(myArr);

    const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

//  console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


    //Number

    // let score=4000
    // console.log(score);
    // console.log(score.toFixed(1));

    // let orderno=123.453;
    // console.log(orderno.toPrecision(3));

    // let hundred=10000000
    // console.log(hundred.toLocaleString('en-IN'));

    // console.log(Math.ceil(2.2));
    // console.log(Math.floor(8.99));

    // string 

    // const name="hello";

    // const Myname=new String('Hello-armaan-sk');
    // console.log(Myname[0]);
    // console.log(name.toUpperCase());
    // console.log(name.length);
    // console.log(Myname.length);
    // console.log(Myname.charAt(2));
    // console.log(Myname.indexOf('l'));

    // const newStr=Myname.substring(0 ,4)
    // console.log(newStr);

    // const newString=Myname.slice(1 ,4)
    // console.log(Myname);
    // console.log(newString);
    // console.log(Myname);

    // console.log(Myname.replace('-', ','))

    // const TwoString=Myname.split('-')
    // console.log(Myname);
    // console.log(TwoString);
    // console.log(Myname);

    // let name2="shaikh"
    // console.log(name.toLowerCase().includes("shaikh".toLowerCase()));
    // console.log(...name,...name2);

    //compare

    // console.log(2 > 1);
    // console.log(typeof null == typeof undefined);
    // console.log(null >= undefined);
    // console.log(null != undefined);

    // let score="farooque";
    // console.log(typeof score);
    // console.log(typeof (score));

    // let valuenumber= Boolean(score);
    // console.log(valuenumber);
    // console.log(typeof valuenumber);

    // let counter=100;
    // counter++;
    // console.log(counter);

    // Data type
  // number,string ,boolean,symbole,null,undefibe

  // number => 2 to power 53
  // bigint
  // string => ""
  // boolean => true/false
  // null => standalone value
  // undefined =>
  // symbol => unique

  // object

//   console.log(typeof undefined); // undefined
//   console.log(typeof null); // object

  // var ,let and cost varible

//   const accountId = 12345;
//   let emailID = "farooque@gm.com";
//   var Mobile = 9658745698;
//   console.log(
//     `A -> Account ID is ${accountId} EmailID is ${emailID} and Mobile no ${Mobile}`
//   );
//   // accountId=11111 //not allowd
//   emailID = "65farooque@gm.com";
//   var Mobile = 999999999;

//   //console.log(`B -> EmailID is ${emailID} and Mobile no ${Mobile}`);

//   const x = () => {
//     let myid = 123;
//     console.log("A", myid);
//     myid = 2222;
//     console.log("B", myid);
//     myid = 444; //not allow to redeclare the let varible
//     console.log("C", myid);

//     var email = "sfar@gm.com";
//     console.log("A email", email);
//     var email = "sfar00que65@gm.com";
//     console.log("B email", email);
//   };

//   // example()
//   x();

  return <div>BasicVarible</div>;
}

export default BasicVarible;
