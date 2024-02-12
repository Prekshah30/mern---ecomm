import React ,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate= useNavigate();

useEffect(()=>{
    const auth= localStorage.getItem("user");
    if(auth){
        navigate('/')
    }
},[])

const handleLogin=async()=>{
    console.warn("email,password",email,password)
    let result= await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    
    });
    result= await result.json();
    console.warn(result)
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/")
    }else{
        alert("please check your email and password")
    }
}
  return (
    <div className='login'>
      <input  className="inputbox" type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className="inputbox" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='appbtn' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
