import React, { useEffect } from 'react'
import { PacmanLoader } from "react-spinners";
import { useNavigate } from 'react-router-dom';
import healthCheck from '@/utils/healthCheck';

function Splashscreen() {
    const navigate = useNavigate();
    useEffect(()=>{
        healthCheck()
        .then((res)=>{
            console.log(res)
            if(res.success){
                navigate('/home')
        }})
        .catch(err=>{
            console.log(err)
            navigate('/error')
        }
        )
    },[navigate])
  return (
    <>
       <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
       <h1 style={{color:"black",fontSize:"50px",textAlign:"center"}}>Bhoolekh</h1>
       <p style={{marginBottom:'2rem'}}>Please wait while we start the server...</p>
       <PacmanLoader/>
       </div>
    </>
  )
}

export default Splashscreen
