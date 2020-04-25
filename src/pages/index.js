import React, { Fragment } from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"
import stairs from "../images/stairs.png"
// import Img from "gatsby-image"

var nav_active;
window.addEventListener("load", ()=> {
  document.querySelector("body").classList.add("loaded");
});

function toggleClass(id) {
  if(nav_active == null)
  {
    nav_active = document.getElementById("nav_home");
  }
  var element = document.getElementById(id);
  element.classList.toggle("active");
  nav_active.classList.toggle("active");
  nav_active = element;
  // alert(id);
}

function scrollPage(page){
  document.getElementById(page).scrollIntoView(true);
}

const IndexPage = () => (  
  <Fragment>
    <SEO title="Home Page" />
    <div id="page-container">
      <div id="page1" className="page">
        <div id="left1">
          {/* <h4 id="clock">12:48 AM March 27, 2020</h4> */}
        </div>
        <div id="center1">
            <div id="title_container">
                <img src={stairs} alt="stairs" id="stairs_pic"/>
                <h1 id="title">MARCO &emsp;<br/>&emsp;LIANG</h1>
            </div>
        </div>
        
        <div id="right1">
          <p id="subtitle" className="label new-label"><span>welcome.</span></p>
        </div>
        
      </div>
      
      <div id="page2" className="page">
        <p id="about_me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent euismod mauris placerat neque rutrum, et 
          volutpat purus porta. Curabitur egestas in erat nec cursus. 
          Nullam et velit id lorem tincidunt aliquet. Sed aliquam 
          rutrum laoreet. Aliquam ut nunc rutrum, auctor nulla eu, 
          interdum ex. Quisque sit amet tincidunt libero, id pretium 
          leo. Pellentesque dictum molestie augue, a condimentum 
          est vulputate at.
          <br/><br/>
          Duis egestas interdum enim non elementum. Sed euismod 
          ipsum vel lectus interdum auctor eget quis turpis. Nulla 
          varius, ipsum sed eleifend commodo, urna ex pulvinar 
          risus, ac vehicula tellus neque a lacus. In iaculis venenatis 
          suscipit. Nunc sit amet erat a odio dapibus vestibulum 
          dapibus id arcu. Pellentesque egestas sem ut tortor dictum, 
        </p>

        <h2 id="project_start_date">3 22 2020.</h2>

        <p id="project_start"> 
            The day I started this project.
            <br/><br/>
            Originally, I just wanted a simple portfolio site,
            but as time went on, it became clear that I'll never
            be quite finished with it
        </p>
      </div>
      
      <div id="page3" className="page">
        <h1>This is page 3</h1>
      </div>
    </div>
    
    <div class="topnav">
        <button className="active" id="nav_home" onClick={()=>{toggleClass("nav_home"); scrollPage("page1")}}>MARCO</button>
        <button id="nav_proj" onClick={()=>{toggleClass("nav_proj"); scrollPage("page2")}}>PROJECTS</button>
        <button id="nav_exp" onClick={()=>{toggleClass("nav_exp"); scrollPage("page3")}}>EXPERIENCE</button>
        <button>GET IN TOUCH</button>
    </div> 
  </Fragment>
)

export default IndexPage
