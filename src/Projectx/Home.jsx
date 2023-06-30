import { Link } from "react-router-dom"
import stylee from "./home.module.css"
const Home = () => {
  return (
    <div>
      <div id={stylee.maindiv}>
          <div id={stylee.leftdiv}>
            <nav id={stylee.navbar}>
              <ul>
                <li><a href=""> <i class="fa-solid fa-house-user"></i> Home</a></li>
                <li><a href=""><i class="fa-solid fa-users"></i>Employee</a>
                  <ul id={stylee.dropone}>
                    <li><Link to={'/path-createemployee'}>Create</Link></li>
                    <li><Link to={"/path-search"}>Search</Link></li>
                  </ul>
                </li>
                <li id={stylee.link}><a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i>Link</a>
                <ul id={stylee.droptwo}>
                  <li><Link to={"/path-image"}>Image</Link></li>
                  <li><Link to={"/path-slider"}>Slider</Link></li>
                  <li><Link to={"/"}>Login-Page</Link></li>
                  <li><Link to={"/path-link"}>Portal Links</Link></li>
                  <li><Link to={"/path-loadinganimation"}>Loading Animation</Link></li>
                  <li><Link to={"/path-popup"}>PopUps</Link></li>
                  <li><Link to={"/path-quotegenerator"}>Quote Generator</Link></li>
                </ul>
                
                </li>
                <li><a href=""><i class="fa-solid fa-gear"></i>Settings</a></li>
                
              </ul>
            </nav>

          </div>
          <div id={stylee.rightdiv}>
          
               <button><i class="fa-solid fa-right-from-bracket"></i><Link to={"/"}>Logout</Link></button>
          </div>
      </div>
      
    </div>
  )
}

export default Home