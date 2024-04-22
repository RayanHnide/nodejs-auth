import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/AllPost').then((res)=>{
            console.log(res.data);
            setPosts(res.data)
        })
        
    },[])
    return(
        <>
         
         <h1 className="text-center mt-4">

            All Post
          </h1>

          <div className="row mx-0 d-flex justify-content-center mt-4 text-center">
                       {
                            posts.map((post,i)=>{
                                return(
                                    <>
                                       <div className="col-lg-3 card mx-4 shadow p-2 mt-3">
                                             <h2>
                                                {post.title}
                                             </h2>
                                             <h3>
                                                {post.content}
                                             </h3>
                                       </div>
                                    </>
                                )
                            })
                       }
                    </div>
        
        
        </>
    )
}