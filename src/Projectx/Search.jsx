import { useEffect, useState } from "react"
import style from "./search.module.css"
import axios from "axios"
const Search = () => {
    let [content ,setContent] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/employees").then((response)=>{
            console.log(response.data);
            console.log("got the data");
            setContent(response.data)
        }).catch(()=>{
            console.log("Did not get the data");
        })

    },[])









  return (
    <div>
        
        {content.map((x)=>{
            return(
                
                    <div id={style.mainbox}>
            <div id={style.btnemp}>
            <h2 id={style.searchemp}>Search Employee</h2>
            <button>Add Employee</button>
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
                        <tr>
                            <td>{x.firstname}</td>
                            <td>{x.lastname}</td>
                            <td>{x.mobile}</td>
                            <td>{x.email}</td>
                            <td>{x.gender}</td>
                            <td>{x.dateofbirth}</td>
                            <td>{x.state}</td>
                            <td>{x.city}</td>
                            {/* <td>{x.address}</td> */}
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                       
                     </tbody>

                </table>
            </div>

        </div>
               
            )
        })}
      
    </div>
  )
}

export default Search