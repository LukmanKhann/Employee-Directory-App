import style from "./link.module.css"

const Links = () => {
  return (
    <div>
        <div id={style.topbox}>
      <div id={style.linkbox}>
        <div id={style.workinglink}>
           <h3 className={style.h3}>Working Links</h3>

         
            <div>
              <h4 className={style.h4}><a href="https://fontawesome.com/" target="_blank">Link1</a></h4>
              <h4 className={style.h4}><a href="https://www.javatpoint.com/" target="_blank">Link2</a></h4>
              <h4 className={style.h4}><a href="https://www.jspiders.com/" target="_blank">Link3</a></h4>
            </div>
           
        </div>
        <div id={style.brokenlink}>
        <h3 className={style.h3}>Broken Links</h3>
        <div>
              <h4 className={style.h4}><a href="https://www.example.com/nonexistent-page" target="_blank">Link1</a></h4>
              <h4 className={style.h4}><a href="https://www.example.com/nonexistent-page" target="_blank">Link2</a></h4>
              <h4 className={style.h4}><a href="https://www.example.com/nonexistent-page" target="_blank">Link3</a></h4>
            </div>
        </div>
        <div id={style.statuscodelink}>
        <h3 className={style.h3}>Status Code</h3>
        <div>
              <h4 className={style.h4}><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank">Link1</a></h4>
              <h4 className={style.h4}><a href="https://www.tutorialspoint.com/http/http_status_codes.htm" target="_blank">Link2</a></h4>
              <h4 className={style.h4}><a href="https://www.javaguides.net/2021/01/rest-api-http-status-codes.html" target="_blank">Link3</a></h4>
            </div>
        </div>
        <div id={style.imagelink}>
        <h3 className={style.h3}>Image Links</h3>
        <div>
              <h4 className={style.h4}><a href="https://pixabay.com/photos/search/  " target="_blank"><img src="" alt="" />Link1</a></h4>
              <h4 className={style.h4}><a href="https://unsplash.com/developers" target="_blank"><img src="" alt="" />Link2</a></h4>
              <h4 className={style.h4}><a href="https://stocksnap.com/" target="_blank"><img src="" alt="" />Link3</a></h4>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Links