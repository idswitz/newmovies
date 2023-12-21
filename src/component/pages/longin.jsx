import React from 'react'

import { useRef } from 'react';

export const Longin= () => {
    const usernameRef = useRef();
    const passwordRef = useRef('');

    const loginUser= ()=>{
        console.log(usernameRef.current.value,passwordRef.current.value);
    }



  return (
    <form>
        <input type ="text" placeholder="username" ref={usernameRef}/>
        <input type= "password" placeholder="password" ref={passwordRef}/>
        <button type="button" onClick={loginUser}>login</button>
    </form>
  )
}

export default Longin;
