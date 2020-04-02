import React, {component, Component} from 'react'
import './portfolio.css'
import Avatar from 'react-avatar'

class Portfolio extends Component
{
    constructor()
    {
        super()
    }

    goDown = () =>
    {
        // alert("hello i am clicked")
        var element_id = document.getElementById('project')
        element_id.scrollIntoView()
    }

   
    render()
    {
        return(
            <div className = "main">
                <div className = "about-me container text-center">
                        <div className = "profile-image text-center">
                            <img src = {require('./images/sagar.jpg')} alt = "SagarGi" class = "avatar"></img>
                        </div>
                        <h1>About Me</h1>
                        <p>Hello World,<i class="fa fa-hand-paper-o wave" aria-hidden="true"></i> My name is Sagar Gurung.<br></br>I am a software engineering student pursuing BE in software in GCES.
                        <br></br>I like java most than other programing language but i also like c,c++ and javascript.<br></br>
                        I am a learning developer, you can find some of my projects below. Beside that i also write <a href = "https://www.saagargurung.com.np/" target = "_blank">BLOGS</a></p>
                </div>

                <div className = "container">

                    <div className = "projects text-center" id = "project">
                            <h1>My Projects</h1>
                            <div>
                            <i class="fa fa-angle-double-down icon-down" onClick = {this.goDown}></i>
                            </div>   
                    </div>

                </div>

                {/* projects section  */}
                <div className = "container mt-4">
                    <div className = "myprojects">
                    <div className = "row text-center">

                        <div class="col-sm">
                            <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic" ></img>  
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                                
                                </div>
                            </div>
                       </div>
                        <div class="col-sm">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                               
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                                
                               
                                </div>
                            </div>
                        </div>
                            
                        </div>

                        <div className = "row text-center mt-5">

                        <div class="col-sm">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                                
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                                
                               
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('http://google.com', "_blank")}}>View Project</button>
                               
                               
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Portfolio