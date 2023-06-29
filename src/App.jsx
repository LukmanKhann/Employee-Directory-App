import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task from "./Components/Task";
import LoginValidation from "./Projectx/LoginValidation"
import CreateEmp from "./Projectx/CreateEmp";
import Home from "./Projectx/Home";
import EditEmp from "./Projectx/EditEmp"
import Search from "./Projectx/Search";
import Image from "./Projectx/Image";
import Slider from "./Projectx/Slider";

const App = () => {
  return (
    <div>
      
      {/* <BrowserRouter>
      <Home/> 
           <Routes> 
           <Route path="/" element={<LoginValidation />} />
           <Route path="/" element={<Home/>} /> 
      
          <Route path="/path-home" element={<Home/>}></Route>
          <Route path="/path-search" element={<Search/>}></Route>
          <Route path="/path-createemployee" element={<CreateEmp/>} ></Route>
          <Route path="/path-editemployee" element ={<EditEmp/>}></Route>
          
        </Routes>
       
      </BrowserRouter> */}
      
      {/* <CreateEmp/> */}
      {/* <Search/> */}
      {/* <Image/> */}
      <Slider/>
    
    </div>
  )
}

export default App;
