import style from "./image.module.css"
const Image = () => {
  return (
    <div>
        <div id={style.box1} >
         
          <div id={style.box2}>
          <h2>Uploading/Downloading Image</h2>
           <div id={style.box3}>
          
           <div id={style.boxlabel1}>
              <label htmlFor="">Upload Image</label>
              <br />
              <input type="file" placeholder="File"/>
            </div>

            <div id={style.boxlabel2}>
              <label htmlFor="">File Name</label>
              <br />  
              <input type="text" placeholder="File Name" />
            </div>
            <button id={style.btnupload}>Upload</button>
           </div>
            <h2>List Of Images :</h2>
          </div>

        </div>
      
    </div>
  )
}

export default Image