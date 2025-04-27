import React from "react";
import { motion } from "framer-motion";
import { ComboboxDemo } from "../components/ui/combobox";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import getPrice from "../utils/getPrice.js" 
function Predict() {
    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [area, setArea] = React.useState(null)
    const [bathrooms, setBathrooms] = React.useState(null)
    const [bedrooms, setBedrooms] = React.useState(null)
    const [price, setPrice] = React.useState(null)
    const [show,setShow] = React.useState(false)
    const [message,setMessage] = React.useState("")

    function handlePrice(){
        console.log(selectedOption,area,bathrooms,bedrooms)
        if(!selectedOption || !area || !bathrooms || !bedrooms){
            setMessage("Please fill all the fields")
            return;
        }
        setMessage(null)
        setShow(true)
        getPrice(selectedOption,area,bathrooms,bedrooms)
        .then((data)=>{
            console.log(data)
            setPrice(data.estimated_price)
        })
        .catch((err)=>{
            console.log(err)
            navigate("/error")
        })
       
    }

    return (
        <motion.div
            initial={{ opacity: 0 }} // Initial opacity (fully transparent)
            animate={{ opacity: 1 }} // Final opacity (fully visible)
            transition={{ duration: 1 }}
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <h1 style={{ color: "black", fontSize: "40px", textAlign: "center", marginBottom: "2rem" }}>
                Predict Home Prices
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 5px", borderRadius: "10px", minWidth: "30vw" }}>
                {message &&<div>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem",color:"red" }}>{message}</p>
                </div>}
                <div>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Select Places</p>
                    <ComboboxDemo setItem={setSelectedOption} />
                </div>
                <div>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Select Area</p>
                    <Input placeholder="Enter Area in sqft" type="number" value={area} onChange={(e) => setArea(parseFloat(e.target.value))} />
                </div>
                <div>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Select Bedrooms</p>
                    <Input placeholder="Enter Bedrooms" type="number" style={{ marginBottom: "1rem" }} value={bedrooms} disabled />
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(1)}>1</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(2)}>2</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(3)}>3</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(4)}>4</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(5)}>5</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBedrooms(6)}>6</Button>
                    </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Select Bathrooms</p>
                    <Input placeholder="Enter Bathrooms" type="number" style={{ marginBottom: "1rem" }} value={bathrooms} disabled />
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(1)}>1</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(2)}>2</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(3)}>3</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(4)}>4</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(5)}>5</Button>
                        <Button variant='secondary' style={{ cursor: "pointer" }} onClick={() => setBathrooms(6)}>6</Button>
                    </div>
                </div>
                <Button style={{ cursor: "pointer" }} onClick={handlePrice}>Predict Price</Button>
            </div>
            {show &&<motion.div 
                initial={{ opacity: 0 }} // Initial opacity (fully transparent)
                animate={{ opacity: 1 }} // Final opacity (fully visible)
                transition={{ duration: 1 }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 1px 5px", borderRadius: "10px", minWidth: "30vw" ,marginTop:"2rem",textAlign:"center"}}>

                {price ? `Price : ${price} Lakhs`: <PacmanLoader/>}
            </motion.div>}

        </motion.div>
    );
}

export default Predict;
