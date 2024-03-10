import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Book(){

    const [books,setBooks]=useState([])

    useEffect(()=>{
        const fetchAllBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:4500/")
                console.log(res.data)
                setBooks(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

const handleDelete = async (id)=>{
    try{
       await axios.delete("http://localhost:4500/delete/"+id)
    window.location.reload()
    }catch(err){
        console.log(err)
    }    
}

    return(
        <>
                <h1>Book store</h1>
                {books.map(item=>(
                    <>
                   <h4>{ item.email}</h4>
                   <button onClick={()=>handleDelete(item.id)}>Delete</button>
                   <button><Link to={`/update/${item.id}`}>update</Link></button>
                </>
                ))}
                <Link to="/insert"><button>Insert</button></Link>
                
        </>
    )
}

export default Book;