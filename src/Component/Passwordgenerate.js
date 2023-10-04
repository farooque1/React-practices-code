import React, { useCallback, useEffect, useRef, useState } from "react";

function Passwordgenerate() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');

  const passRef=useRef(null);

  const Passwordgenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setSuccess('');
  }, [length, setPassword, number, char,setSuccess]);

  const copypasswd=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    .then(() => {
                setSuccess('Password Copy');
                // alert('Password copied to clipboard!');
              })
  },[password,setSuccess])

// const copypasswd = useCallback(() => {
//     window.navigator.clipboard.writeText(password)
//       .then(() => {
//         alert('Password copied to clipboard!');
//       })
//       .catch((error) => {
//         console.error('Error copying password to clipboard:', error);
//       });
//   }, [password]);

  useEffect(() => {
    Passwordgenerate();
    setSuccess('');
  }, [length, setPassword, number, char]);

  return (
    <div className="container-fluid bg-dark py-5 text-center">
      <div class="card" style={{ width: "22rem" }}>
        <div class="card-body text-center">
          <h5 class="card-title">Generate New Password</h5>
          <p class="card-text">
            <input type="text" value={password} className="form-control" ref={passRef}/>
          </p>
          <button class="btn btn-primary" onClick={copypasswd}>Copy</button>
          {success &&<p style={{color:'black'}}>{success}</p>}

        </div>
        <div>
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>length {length}</label>

          <input
            type="checkbox"
            defaultChecked={number}
            onChange={(e) => setNumber((prev) => !prev)}
          />
          <label>Number {number}</label>

          <input
            type="checkbox"
            defaultChecked={char}
            onChange={(e) => setChar((prev) => !prev)}
          />
          <label>Character {char}</label>
        </div>
      </div>
    </div>
  );
}

export default Passwordgenerate;
