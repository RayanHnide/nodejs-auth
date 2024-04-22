import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage(){

    const[title,setTitle] = useState('')
    const[content,setContent] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/post',{title,content})
        .then(res =>console.log(res))
        .catch(err=> console.log(err))
       
     }

   

    
    return(
        <>
        
             <h1 className="text-center mt-5">
                Welcome to Node.Js App 
             </h1>

             <div className="d-flex justify-content-center mt-5">
                <Link to='/login' className="mx-5">
                      Log In
                </Link>

                <Link to='/register' className="mx-5">
                    Register
                </Link>
             </div>


        
        </>
    )
}