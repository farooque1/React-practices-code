import React from 'react'
import '../Component/Testing.css';

function Testing() {

    var array=[1,3,5,6,7,2,4,8,1,9,8,6];
    console.log(array);

    let sort=array.sort();
    console.log(sort);

    let rb=new Set(sort);
    console.log(rb);

    let ao=array.sort((a,b)=>(a-b));
    console.log(ao);

    let deo=array.sort((a,b)=>(b-a));
    console.log(deo);

    let rep=array.splice(2,1,10);
    console.log(rep);
    console.log(array);

    let sarr=array.slice(5  ,1);
    console.log(sarr);
    console.log(array);



























    // array.sort();
    // let dublicatRem =new Set(array);
        
    // console.log("Array value",array);

    // console.log("Remove Dublicate value...",dublicatRem);

    // var array1=[10,30,50,60,70,2,40,80,11,90];
    // console.log("Array2 value",array1);
    // //ass
    // array1.sort((a,b)=> a - b );
    // console.log("ass order",array1);
    // array1.sort((a,b)=> b - a );
    // //desc
    // console.log("decen order",array1);
    
    


    return (
        <>
            <div className="mobile">
                <div style={{ border: '1px solid', margin: '10px 20px', textAlign: 'center' }}>
                    <p>Mobile Content Center div Testing</p>
                    <p>Demo text hakhsl jahjkh hkjagskj</p>
                </div>
            </div>

            <div className="desktop">
                <p style={{ width: '300px', border: '1px solid', padding: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
                    Desktop Content Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </>
    )
}

export default Testing