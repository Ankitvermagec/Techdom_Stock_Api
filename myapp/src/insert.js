import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './App.css';
import social from "./img/social.png";
import {Link} from 'react-router-dom';

function Insert(){
    const Navigate = useNavigate()

    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    // console.log(name , email)

    const [book,setBook]=useState({email:"",})

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
            <section className='sec_a mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col_a'>
                        <img src={social} alt="Girl in a jacket" width="100%" />
                        </div>
                        <div className='col  col_b'>
                           
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" name="email" onChange={handleChange} class="form-control" id="email" placeholder="Enter Email"/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Enter password</label>
                                    <input type="password" name="password" onChange={handleChange} class="form-control" id="password" placeholder="Enter password"/>
                                </div>
                                
                    <button  className='mt-2 btn btn-primary col-12'  onClick={handleClick}>Register</button>
                     
                    <Link to="/"><button  className='mt-2 btn btn-primary col-12'>Back</button></Link>
                     
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Insert;
