import { ComboboxDemo } from "@/components/ui/combobox";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/predict")
        },3000)
    },[])
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }} // Initial opacity (fully transparent)
        animate={{ opacity: 1 }} // Final opacity (fully visible)
        transition={{ duration: 3 }} // Duration of the fade effect (2 seconds)
        style={{ color: "black", fontSize: "50px", textAlign: "center",userSelect:"none" }}
      >
        Get Home Prices
      </motion.h1>
    </div>
  );
}

export default Home;
