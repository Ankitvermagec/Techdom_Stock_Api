import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './App.css';
import social from "./img/social.png";
import {Link} from 'react-router-dom';

function Login(){
    const Navigate = useNavigate()

    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    // console.log(name , email)
    const [data,setData]=useState([])
    const [get_data,setGetData]=useState([])

    const [book,setBook]=useState({email:"",password:""})

    const handleChange=(e)=>{
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(book)
    }

    const handleClick=async (e)=>{
        e.preventDefault()
        try{

            const res = await axios.get("http://localhost:4500/")
            console.log(res.data)
            setGetData(res.data)

            if  (book.password !=="" && book.email !=="")
            {
                get_data.map(item=>{
                    setData(item)
                })

                if  (data.email === book.email && data.password === book.password)
                {
                    axios.post("http://localhost:4500/login",book)
                    Navigate("/stock")
                }
                else{
                    alert("data not matched..!")
                }
                
            }
            else{
                alert("insert data ")
            }

            // if(book.password !=="" && book.email !=="")
            // {
            //     await axios.post("http://localhost:4500/login",book)
            //     Navigate("/")
            // }
            // else{
            //     alert("insert data ")

            // }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <section className='sec_a  mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col_a'>
                        <img src={social} alt="Girl in a jacket" width="100%" />
                        </div>
                        <div className='col  col_b'>
                            
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" onChange={handleChange} name="email" class="form-control" id="email" placeholder="Enter Email"/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Enter password</label>
                                    <input type="password" onChange={handleChange} name="password" class="form-control" id="password" placeholder="Enter password"/>
                                </div>
                                 <button  className='btn btn-primary col-12' onClick={handleClick}>Login</button>
                             <Link to="/insert"><button  className='mt-2 btn btn-primary col-12'>Register</button></Link>          

                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default Login;
