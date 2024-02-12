import React,{useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
const Signup=()=>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth= localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    },[])

    const collectData=async()=>{
           console.log(name,email,password)
           let result= await fetch("http://localhost:5000/register",{
               method:'post',
               body:JSON.stringify({name,email,password}),
               headers:{
                'Content-type':'application/json'
               }
           });
           result=await result.json();
           console.warn(result);
           localStorage.setItem("user",JSON.stringify(result))
           navigate('/')
    }

    return(
        <div className="Register">
            <h1>Register</h1>
            <input className="inputbox" type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="inputbox" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input className="inputbox" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button className="appbtn" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default Signup;