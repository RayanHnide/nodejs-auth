import { Link, useNavigate } from "react-router-dom"
 import { useState } from "react"
 import axios from 'axios'
 import '../../src/App.css'
export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword]= useState('')
   const navigate = useNavigate()

  function handleSubmit(e){
     e.preventDefault()
     axios.post('http://localhost:3001/login',{email,password})
     .then(res =>{
        console.log(res)
        if(res.data ==='success'){
            navigate('/heropage')
        }
       
     })
     .catch(err=> console.log(err))
    
  }

   
    return(
        <>
              
               <div className="log-in" >
                 <form   onSubmit={handleSubmit}>
                 

                <label htmlFor="email">
                     <input name="email" type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                </label>   
                <br />               
                        <label htmlFor="password">

                         <input name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />

                        </label>
                                        <div className="d-flex justify-content-center">
                 <button type="submit"  className="btn btn-info mt-5" >
                    Register 
                  </button>
                 </div>
                
                    
                    <h6 className="mt-4">
                      dont have an account  <Link to='/login'>Sign In</Link>
                    </h6>

                    
                 <br />
                 </form>
               </div>
        
        </>
    )
}