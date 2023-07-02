import { BrowserRouter,Route, Routes } from "react-router-dom";
import Task from "./Components/Task";
import LoginValidation from "./Projectx/LoginValidation"
import CreateEmp from "./Projectx/CreateEmp";
import Home from "./Projectx/Home";
import EditEmp from "./Projectx/EditEmp"
import Search from "./Projectx/Search";
import Image from "./Projectx/Image";
import Slider from "./Projectx/Slider";
import Popup from "./Projectx/Popup";
import Quote from "./Projectx/Quote"
import LoadingAnimation from "./Projectx/LoadingAnimation"
import Links from "./Projectx/Links";
import LoginCode from "./Components/LoginCode"

const App = () => {
  return (
    <div>
   {/* <LoginValidation/> */}
{/* <LoginCode/> */}
      {/* <Quote/> */}
      {/* <LoadingAnimation/> */}
      
      <BrowserRouter>
   
           <Routes> 
            
           <Route path="/" element={<LoginValidation />} />
           <Route path="/home" element={<Home/>} /> 
      
          <Route path="/path-home" element={<Home/>}></Route>
          <Route path="/path-search" element={<Search/>}></Route>
          <Route path="/path-createemployee" element={<CreateEmp/>} ></Route>
          <Route path="/path-editemployee/:index" element ={<EditEmp/>}></Route>
          <Route path="/path-image" element={<Image/>}></Route>
          <Route path="/path-slider" element={<Slider/>}></Route>
          <Route path="/path-popup" element={<Popup/>}></Route>
          <Route path="/path-quotegenerator" element={<Quote/>}></Route>
          <Route path="/path-loadinganimation" element={<LoadingAnimation/>}></Route>
          <Route path="/path-link" element={<Links/>}></Route>
        </Routes>
       
      </BrowserRouter>
      {/* <Links/> */}
      {/* <CreateEmp/> */}
      {/* <Search/> */}
      {/* <Image/> */}
      {/* <Slider/> */}
   {/* <Popup/> */}
   {/* <EditEmp/> */}
   
    </div>
  )
}

export default App;
