import { Link } from "react-router-dom"
import style from "./login.module.css"
const Loginvalidation = () => {








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
                    <input type="text" name="" id="" placeholder="Username" />
                   </div>
                   <div className={style.formsection}>
                    <label htmlFor="">Passoword : </label>
                    <input type="text" name="" id="" placeholder="Password" />
                    
                   </div>
                  
                   <p><a href="">Forget Passowrd</a></p>
                   <button id={style.createuserbtn}>Create</button>
                   <div id={style.loginbtn}>
                    <button  className={style.btn}>
                      <Link to={'/path-home'}>Login</Link>
                    </button>
                   </div>

                </form>
            </div>
          

        </div>
        

      
    </div>
  )
}

export default Loginvalidation