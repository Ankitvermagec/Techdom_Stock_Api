import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update(){
    const Navigate = useNavigate()

    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    // console.log(name , email)

    const [book,setBook]=useState({name:"",email:""})

    const handleChange=(e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(book)
    }

    const handleClick=async (e)=>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:4500/post",book)
        Navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <form>
            <label for="name">Enter Name:</label>
            <input type="text" onChange={handleChange} name="name" id="name" />
            <br/>
            <label for="email">Enter Email:</label>    
            <input type="text"  onChange={handleChange} name="email" id="email"/>
            <button onClick={handleClick}>Update</button>
        </form>
        </>
    )
}
export default Update;
