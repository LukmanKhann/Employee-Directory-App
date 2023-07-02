import axios from "axios"
import st from "./createemployee.module.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const EditEmp = () => {
    let [firstname,setFirstname] = useState("")
    let [lastname,setLastname] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [dob,setDob] = useState("")
    let [gender,setGender] = useState("")
    let [city,setCity] = useState("")
    let [country,setCountry] = useState("")
    let navigate = useNavigate()

    let{index} = useParams()
    console.log(index);
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/v1/employees${index}`).then((response)=>{
            console.log("got the data");
            console.log(response.data);
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setMobile(response.data.mobile)
            setEmail(response.data.email)
            setDob(response.data.dob)
            setGender(response.data.gender)
            setCity(response.data.city)
            setCountry(response.data.country)
        }).catch(()=>{
            console.log("Somthing went wrong error");
        })
    },[])
    
    let formhandle=()=>{
        let payload= {firstname,lastname,email,mobile,dob,gender,city,country}
        axios.put(`http://localhost:8080/api/v1/employees${index}`,payload).then(()=>{
            console.log("got the data");
        }).catch(()=>{
            console.log("did not get the data");
        })
        navigate("/path-sear")
    }





    let firstnameData = (e)=>{
        setFirstname(e.target.value)
      }
      let lastnameData = (e)=>{
        setLastname(e.target.value)
      }
      let emailData = (e)=>{
        setEmail(e.target.value)
      }
      let mobileData = (e)=>{
        setMobile(e.target.value)
      }
      let dobData = (e)=>{
        setDob(e.target.value)
      }
      let genderData = (e)=>{
        setGender(e.target.value)
      }
      let cityData = (e)=>{
        setCity(e.target.value)
      }
      let countryData = (e)=>{
        setCountry(e.target.value)
      }
  
  return (
    <div className={st.superdiv}>
     
      <div id={st.mainsection}>
        <h6><i class="fa-solid fa-user-pen"></i>Edit Employee</h6>
        <div id={st.formsection}>
             <form action="">
              
     
       
               <div className={st.first}>

               <div className={st.formcontent}>
                <label htmlFor="">First Name</label>
                <br />
                <input type="text" name="" id="" placeholder="Enter First Name" value={firstname} onChange={firstnameData}/>
               </div>
                <div className={st.formcontent}>
                <label htmlFor="">Last Name</label>
                <br />
                <input type="text" name="" id="" placeholder="Enter Last Name" value={lastname} onChange={lastnameData} />
               </div> 
               <div className={st.formcontent}>
               <label htmlFor="">Email</label>
               <br />
                <input type="email" name="" id="" placeholder="Enter Email" value={email} onChange={emailData}/>
               </div>

               </div>

                <div className={st.second}>

                <div className={st.formcontent}>
                <label htmlFor="">Mobile Number</label>
                <br />
                <input type="number" name="" id="" placeholder="Enter Number" value={mobile} onChange={mobileData} />
               </div>
                <div className={st.formcontent}>
                <label htmlFor="">Date Of Birth</label>
                <br />
                <input type="date" name="" id="" value={dob} onChange={dobData}/>
               </div>
               <div className={st.formcontent}>
               
               <div className={st.malefemale}>
                      <label htmlFor="">Gender</label>
                      <br />
               Male   <input type="radio" name="" id="" className={st.malefemale} value={gender} onChange={genderData}/>
               <br />
              Female <input type="radio" name="" id="" className={st.malefemale}/>
               </div>
               </div>
               
               

                </div>

                <div className={st.third}>

              Address :-  <textarea name="Address" id="" cols="190" rows="5"></textarea>

              

                </div>
                <div className={st.fourth}>

                <div className={st.formcontent}>
               <label htmlFor="">State</label>
               <br />
                <input type="text" name="" id="" placeholder="Enter Your State" value={country} onChange={countryData} />
               </div>

               <div className={st.formcontent}>
               <label htmlFor="">City</label>
               <br />
                <input type="text" name="" id="" placeholder="Enter Your City" value={city} onChange={cityData}/>
               </div>

               <div className={st.formcontent}>
                <div id={st.othercity}>
               <label htmlFor="" >Other City</label>
                <input type="checkbox" name=""  />
                </div>
               </div>



                </div>
                <div className={st.fifth}>
                      <div className={st.formcontent}>
                        <div className={st.skillss}>
                  <div className={st.skills}>
                    
                  Java <input type="checkbox" name="" id=""  />
                  </div>

                  <div className={st.skills}>
                  SQL <input type="checkbox" name="" id="" />
                  </div>
                  
                  <div className={st.skills}>
                  JavaScript <input type="checkbox" name="" id="" />
                  </div>
                  
                  <div className={st.skills}>
                  React-js <input type="checkbox" name="" id="" />
                  </div>
                  
                  <div className={st.skills}>
                  Spring <input type="checkbox" name="" id="" />
                  </div>
                  
                  <div className={st.skills}>
                  Hibernate <input type="checkbox" name="" id="" />
                  </div>
                  
                  <div className={st.skills}>
                  Full Stack <input type="checkbox" name="" id="" />
                  </div>
                 
                 

                  </div>
                  </div>
                </div>
                   <div className={st.sixth}>

                   <div className={st.formcontent}>
                         <div className={st.btn}>
                         <button id={st.savebtn} onClick={formhandle} >Save</button>
                         <button id={st.cancelbtn}>Cancel</button>
                         </div>
               </div>

                   </div>

             </form>

        </div>


      </div>
    </div>
  )
}

export default EditEmp