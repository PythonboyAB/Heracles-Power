import { Route, Routes } from "react-router-dom"
import { Home } from "./screen/Home/Home"
import { LoginScreen } from "./screen/Login & Signup/LoginScreen"


function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginScreen/>}/>
    <Route path="/signup" element={<LoginScreen/>}/>
    
    </Routes>
    </>
  )
}

export default App
