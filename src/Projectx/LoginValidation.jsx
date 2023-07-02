import { Link } from "react-router-dom"
import style from "./login.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Loginvalidation = () => {

let [username,setUsername] = useState("")
let [password,setPassword] = useState("")
let [loginerror,setLoginerror] = useState(false)
let navigate = useNavigate()
let usernameData =(e)=>{
  setUsername(e.target.value)
}
let passwordData =(e)=>{
  setPassword(e.target.value)
}
let loginerrorData =(e)=>{
  setLoginerror(e.target.value)
}
let formhandle = (e)=>{
         e.preventDefault();
  if(username==="root001@gmail.com" && password ==="admin"){
    setLoginerror(false)
    // alert("Login Successfull");
    navigate("/home")
  }
  else{
    setLoginerror(true)
    alert("Invalid Username/Password")
  }
}






  return (
    <div id={style.superdiv}>
        <div id={style.maindiv} className={style.fontstyle}>
          <h1 id={style.mainheading} className={style.fontstyle}>LOGIN-DASH</h1>
          <h1>-: Login Employees :-</h1>
          <h2 id={style.subheading} className={style.fontstyle}>Project based on real-time  Scenario</h2>
          <h4 className={style.fontstyle}>Username - <span>root001@gmail.com</span></h4>
           <h4 className={style.fontstyle}>Password - <span>admin</span></h4> 

            <div id={style.formdiv}>
            
                <form id={style.mainform} action="">
                  <h3 id={style.signupheading}>Sing up</h3>
                   <div className={style.formsection}>
                    <label htmlFor="" >Username : </label>
                    <input type="text" name="" id="" placeholder="Username" value={username} onChange={usernameData} />
                   </div>
                   <div className={style.formsection}>
                    <label htmlFor="">Passoword : </label>
                    <input type="text" name="" id="" placeholder="Password" value={password} onChange={passwordData} />
                    
                   </div>
                  
                   <p><a href="">Forget Passowrd</a></p>
                   <button id={style.createuserbtn}>Create</button>
                   <div id={style.loginbtn}>
                    <button  className={style.btn} onClick={formhandle}>Login</button>
                   </div>

                </form>
            </div>
          

        </div>
        

      
    </div>
  )
}

export default Loginvalidation