import st from "./createemployee.module.css"
const CreateEmp = () => {
  return (
     <div className={st.superdiv}>
     
      <div id={st.mainsection}>
        <h6>Create Employee</h6>
        <div id={st.formsection}>
             <form action="">
              
     
       
               <div className={st.first}>

               <div className={st.formcontent}>
                <label htmlFor="">First Name</label>
                <br />
                <input type="text" name="" id="" placeholder="Enter First Name" />
               </div>
                <div className={st.formcontent}>
                <label htmlFor="">Last Name</label>
                <br />
                <input type="text" name="" id="" placeholder="Enter Last Name" />
               </div> 
               <div className={st.formcontent}>
               <label htmlFor="">Email</label>
               <br />
                <input type="email" name="" id="" placeholder="Enter Email" />
               </div>

               </div>

                <div className={st.second}>

                <div className={st.formcontent}>
                <label htmlFor="">Mobile Number</label>
                <br />
                <input type="number" name="" id="" placeholder="Enter Number" />
               </div>
                <div className={st.formcontent}>
                <label htmlFor="">Date Of Birth</label>
                <br />
                <input type="date" name="" id="" />
               </div>
               <div className={st.formcontent}>
               
               <div className={st.malefemale}>
                      <label htmlFor="">Gender</label>
                      <br />
               Male   <input type="radio" name="" id="" className={st.malefemale}/>
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
                <input type="text" name="" id="" placeholder="Enter Your State" />
               </div>

               <div className={st.formcontent}>
               <label htmlFor="">City</label>
               <br />
                <input type="text" name="" id="" placeholder="Enter Your City"/>
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
                    
                  Java <input type="checkbox" name="" id="" />
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
                         <button id={st.savebtn}>Save</button>
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

export default CreateEmp