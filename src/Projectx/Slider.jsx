import { useState } from "react"
import style from "./slider.module.css"
const Slider = () => {
   const [slide,setSlide] = useState(100)

   let handleslider =(e)=>{
    const value = parseInt(e.target.value)
    setSlide(value)
   }

  return (
    <div>
           
           
        <div id={style.S1}>
          
           <h2>Slider</h2>
          <div id={style.sliderbox}>
          <h4>Current Slider Value : {slide}</h4>
            <input type="range" name="" id="" onChange={handleslider} /> 
          </div>
        </div>
      
    </div>
  )
}

export default Slider