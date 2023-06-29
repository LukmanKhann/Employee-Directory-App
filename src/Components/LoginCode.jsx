import { useState } from "react"

const LoginValidation = () => {
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")
    let [loginerror,setLoginerror] = useState(false)
  
    const usernameData =(e)=>{
          setUsername(e.target.value)
    }
    const passwordData=(e)=>{
        setPassword(e.target.value)
    }
    const formhandl=(e)=>{
        e.preventDefault()
        if(username === 'root' && password ==='admin'){
            setLoginerror(false)
            alert("login successfull")
        }
        else{
            setLoginerror(true)
            alert("Inavlid Username/Password")
        }
    }


  return (
    <div>
        <form action="">
            <label htmlFor="">Username</label>
    <input type="text" value={username} onChange={usernameData} />
    <br />
    <label htmlFor="">Password</label>
    <input type="text" value={password} onChange={passwordData}/>
    {loginerror && <p style={{color:'red'}}>Inavlid Username/Password</p>}
    <button onClick={formhandl}>Submit</button>
    

        </form>
      
    </div>
  )
}

export default LoginValidation