import React,{useState,useEffect} from 'react';
import {useParams , useNavigate} from 'react-router-dom';

const Updateproduct = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const params =useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductdetails();
    },[])

    const getProductdetails=async(req,resp)=>{
        let result = await fetch(`http://localhost:5000/getproduct/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

    }
   
const updateproduct=async()=>{
    console.warn(name,price,category,company)
    let result =await fetch(`http://localhost:5000/updateproduct/${params.id}`,{
      method:'put',
      body: JSON.stringify({name,price,category,company}),
      headers:{
        'Content-type':'application/json',
      }
    });
    result= await result.json()
    console.log(result)
    navigate('/')


}




  return (
    <div className='Register'>
       <h3>Update Product</h3>
      <input type="text" placeholder="Enter Product Name" className='inputbox' value={name} onChange={(e)=>setName(e.target.value)}/>

      <input type="text" placeholder="Enter Product Price" className='inputbox'  value={price} onChange={(e)=>setPrice(e.target.value)}/>

      <input type="text" placeholder="Enter Product Category" className='inputbox'  value={category} onChange={(e)=>setCategory(e.target.value)}/>

      <input type="text" placeholder="Enter Product Company" className='inputbox'  value={company} onChange={(e)=>setCompany(e.target.value)}/>

      <button className='appbtn' onClick={updateproduct}>Update Product</button>
    </div>
  )
  }

export default Updateproduct
