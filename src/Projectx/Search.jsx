import { useEffect, useState } from "react"
import style from "./search.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Search = () => {
    let [content ,setContent] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{
      
        axios.get("http://localhost:8080/api/v1/employees").then((response)=>{
            console.log(response.data);
            console.log("got the data");
            setContent(response.data)
        }).catch(()=>{
            console.log("Did not get the data");
        })

    },[])
    let deletedata = (value)=>{
        axios.delete(`http://localhost:8080/api/v1/employees/${value}`)
        window.location.assign("/path-search")
    }

      let handle =(e)=>{
          e.preventDefault()
          navigate("/path-createemployee")
      }







  return (
    <div>
        
        
                
                    <div id={style.mainbox}>
            <div id={style.btnemp}>
            <h2 id={style.searchemp}><i class="fa-brands fa-searchengin"></i>Search Employee</h2>
            
            <button onClick={handle}>Add Employee</button>
            </div>
            <div id={style.namesearch}>
               <div>
               <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder="Enter Name"/>
               </div>
                <div>  
                <label htmlFor="">Mobile No</label>
                <br />
                <input type="number" name="" id="" placeholder="Enter Number"/>
                </div>
                <button className={style.btn1}>Search</button>
                <button className={style.btn2}>Clear</button>
                <Link to={"/path-home"}><i class="fa-solid fa-house" id={style.fahome}></i></Link>

            </div>


            <div id={style.tablebox}>
                <table  >
                     <thead>
                        <tr>
                            <th><i class="fa-solid fa-person"></i> First Name</th>
                            <th><i class="fa-solid fa-person"></i>Last Name</th>
                            <th><i class="fa-solid fa-mobile-screen-button"></i>Mobile No</th>
                            <th><i class="fa-regular fa-envelope"></i>Email Id</th>
                            <th><i class="fa-solid fa-user"></i>Gender</th>
                            <th><i class="fa-solid fa-calendar-days"></i>Birth Date</th>
                            <th><i class="fa-solid fa-globe"></i>State</th>
                            <th><i class="fa-solid fa-city"></i>City</th>
                            <th><i class="fa-solid fa-gear"></i>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {content.map((x)=>{
                            return(
                         <tr>
                            {/* <td>{x.id}</td> */}
                         <td>{x.firstname}</td>
                         <td>{x.lastname}</td>
                         <td>{x.mobile}</td>
                         <td>{x.email}</td>
                         <td>{x.gender}</td>
                         <td>{x.dateofbirth}</td>
                         <td>{x.country}</td>
                         <td>{x.city}</td>
                         <td><button id={style.editbutton}><Link to={`/path-editemployee/${x.id}`} >Edit</Link></button > <button id={style.deletebutton} onClick={()=>{deletedata(x.id)}}>delete</button></td>
                         {/* <td>{x.address}</td> */}
                     </tr>
                          )  
                        })}
                        
                       
                       
                     </tbody>

                </table>
            </div>

        </div>
               
         
      
    </div>
  )
}

export default Search