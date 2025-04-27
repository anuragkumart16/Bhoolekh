import { Button } from "@/components/ui/button"
import  {ComboboxDemo}  from "./components/ui/combobox"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Splashscreen from "./pages/splashscreen"
import Error from "./pages/error"
import Home from "./pages/home"
import Predict from "./pages/predict"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splashscreen/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/predict" element={<Predict/>} />
        
      </Routes>
    </Router>
  )
}
 
export default App


