import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function HeroPage(){

      const [users,setUsers] = useState([])
      const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/users').then((res)=>{
        //    console.log('++++++++++++++++++++++++++++++');
        //     console.log(res._id);
            
            setUsers(res.data)
        })
        
    },[])
    const[title,setTitle] = useState('')
    const[content,setContent] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/post',{title,content})
        .then(res =>{
            console.log(res)
            navigate('/all-post')
        
        })
        .catch(err=> console.log(err))
       
     }

     const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/user/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data.message);  
            window.location.reload();

        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };
    return(
        <>
                
                    <h1 className="mt-5 text-center">
                            Welcom  to CoByte Company   *__________*
                    </h1>

                     <h2 className="text-center mt-4 fw-bold">
                        All Users in this Website
                     </h2>
                    <div className="row mx-0 d-flex justify-content-center text-center ">
                       {
                            users.map((user,i)=>{
                                return(
                                    <>
                                       <div className="col-lg-3 shadow mx-4 card p-2 mt-3">
                                             <h2>
                                                {user.name}
                                             </h2>
                                             <h3>
                                                {user.email}
                                             </h3>

                                             <button className="btn btn-danger" onClick={()=>{handleDelete(user._id)}}>
                                                Delete
                                             </button>
                                       </div>
                                    </>
                                )
                            })
                       }
                    </div>



             <div className="d-flex justify-content-center mt-5 mb-5">

                <form action="POST" onSubmit={handleSubmit}  style={{width:'50%'}} >
                    <h1 className="text-center">Add Post</h1>
                    <input onChange={(e)=>setTitle(e.target.value)} type="text"   placeholder="title"/>
                    <input onChange={(e)=>setContent(e.target.value)} type="text"   placeholder="content" />
                   <div className="d-flex justify-content-center mt-5">
                     <button className="btn btn-info" type="submit">Add Post</button>
                   </div>
                </form>
            </div>





        
        </>
    )
}