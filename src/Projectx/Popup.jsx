import style from "./popup.module.css"


const Popup = () => {
        const popalert =()=>{
          alert("OOps! Your Press The Alert Box!!!!!")
        }

        const popconfirm = () => {
         window.confirm("You clicked On Confirm ")
        }

        const popprompt=()=>{
          prompt("Enter Your Name ")
        }
      const popone=()=>{
        window.open(window.location.href, 'http://localhost:3000/path-home')
      }
      
  return (
    <div>
        <div id={style.popbox1}>
          <h6>Popup</h6>
          <div id={style.popbox3}>
         <button onClick={popone}>Duplicate Tab</button>
         <button>Navigate To Create</button>
         <button onClick={popalert}>Alert Box</button>
         <button onClick={popconfirm}>Confirm Box</button>
         <button onClick={popprompt}>Propmt Box</button>
           
          </div>
        </div>
      
    </div>
  )
}

export default Popup