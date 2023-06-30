import style from "./link.module.css"
const Links = () => {
  return (
    <div>
      <div id={style.linkbox}>
        <div id={style.workinglink}>
           <h6>Link</h6>
        </div>
        <div id={style.brokenlink}>
        <h6>Link</h6>
        </div>
        <div id={style.statuscodelink}>
        <h6>Link</h6>
        </div>
        <div id={style.imagelink}>
        <h6>Link</h6>
        </div>
      </div>
    </div>
  )
}

export default Links