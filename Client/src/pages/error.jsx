import React from 'react'
function Error() {
    const [heading,setHeading]=React.useState("")
    const [message,setMessage]=React.useState("")
    React.useEffect(()=>{
        if (!navigator.onLine) {
            setMessage("Check your internet connection")
            setHeading("Network Error")
        }else{
            setMessage("Something went wrong, we are working on it...")
            setHeading("Server Error")
        }
    },[])
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1 style={{color:"black",fontSize:"50px",textAlign:"center"}}>{heading}</h1>
    <p style={{marginBottom:'2rem'}}>{message}</p>
    </div>
  )
}

export default Error
