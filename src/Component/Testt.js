import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Testt() {

    const [datas, setdata] = useState([]);
    const [inc, setinc] = useState(0);

    function modifyArray(arrr, callback) {
        // do something to arr here
        arrr.push(100);
        // then execute the callback function that was passed
        callback();
    }
    var arrr = [1, 2, 3, 4, 5];
    console.log("Before array ", arrr);
    modifyArray(arrr, function () {
        console.log("array has been modified", arrr);
    });

    function xx(name, callback) {
        console.log(`my name is ${name} .`);
        callback();
    }
    function yy() {
        console.log('callback argument');
    }
    xx('farooque', yy);

    console.log('Start');

    function abc(a, b) {
        console.log(a - b);
    }

    function operation(v1, v2, callback) {
        callback(v1, v2);
    }
    operation(20, 5, abc);

    console.log('End');

    var str = "Welcome";
    console.log(str);

    // Output becomes !ediuG tpircsavaJ siht ot emocleW
    var reverseEntireSentence = reverseBySeparator(str, "");
    console.log(reverseEntireSentence);

    // Output becomes emocleW ot siht tpircsavaJ !ediuG
    var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
    console.log(reverseEachWord);

    function reverseBySeparator(str, separator) {
        return str.split(separator).reverse().join(separator);
    }

    const xname="payal salunke";
    const rv=xname.split("").reverse("").join("");
    console.log(rv);

    const rv1=rv.split("").reverse("").join("");
    console.log(rv1);

    function doHomework(subject, callback) {
        console.log(`Starting my ${subject} homework.`);
        callback();
    }
    function finishedHomework() {
        console.log('Finished my$ {subject} homework!');
    }
    doHomework('Math', finishedHomework);


    const incre = () => {
        setinc(inc + 1);
        console.log(inc);
    }

    const dec = () => {
        setinc(inc - 1);
        console.log(inc);
    }

    let arr = [1, 3, 4, 5, 6, 8, 9, 1, 4, 6, 2];
    console.log(arr);

    console.log(Array.isArray(arr));
    console.log(arr instanceof Array);

    let sortS = arr.splice(4, 1);
    let sortS1 = arr.splice(8, 1);
    console.log("sort array", sortS);
    console.log(arr);

    let sort = arr.sort();
    console.log(sort);

    let remd = new Set(sort);
    console.log(remd);

    let ass = new Set(arr.sort((a, b) => a - b));
    console.log("ass no", ass);

    let des = new Set(arr.sort((a, b) => b - a));
    console.log("des no", des);

    const n="Md. farooque shaikh";
    console.log(n);
    const r=n.split("").reverse("").join("");
    console.log(r);


    function x(a) {
        return function (b) {
            return function (c) {
                return a * b * c;
            }
        }
    }
    console.log(x(10)(20)(30));

    const apicall = async () => {
        const res1 = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        let data = res1.data;
        console.log(data); setdata(data)
    }

    function radio1() {
        alert('hello');
    }

    function displayAlert() {
        if (document.getElementById('option1').checked) {
            alert('You selected Option 1!....!!!!!!!!!!');
        } else if (document.getElementById('option2').checked) {
            alert('You selected Option 2!..........??????');
        } else if (document.getElementById('option3').checked) {
            alert('You selected Option 3!................?????');
        } else {
            alert('Please select an option!');
        }
    }


    useEffect(() => {

        const interval = setInterval(() => {
            console.log('This will run every second!');
        }, 1000);

        return () => clearInterval(interval);

        // setTimeout(()=>
        // apicall()
        // ,3000)
        // apicall();
        //        apicall();
    }, [])

    return (

        <div className='container my-5'>
            <input type="radio" id="option1" name="options" value="Option 111....!!!!" onClick={displayAlert} />
            <label for="option1">Option 1</label>
            <input type="radio" id="option2" name="options" value="Option 2....!!!" onClick={displayAlert} />
            <label for="option2">Option 2</label>
            <input type="radio" id="option3" name="options" value="Option 3...!!!" onClick={displayAlert} />
            <label for="option3">Option 3</label>
            <button onClick={displayAlert}>Submit</button>

            <div class="form-check">
                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" onClick={radio1} />
                <label class="form-check-label" for="flexCheckDefault">
                    JAVA
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    JAVASCRIPT
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    REACT JS
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>


            <button onClick={incre} className='btn btn-primary m-2'>Click me {inc}</button>
            <button onClick={dec} className='btn btn-success m-2'>Decrement me {inc}</button>
            {
                datas.map(d =>
                (<div key={d.id}>
                    <h1>title = {d.title}</h1>
                </div>
                ))
            }
        </div>
    )
}

export default Testt