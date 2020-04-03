import React, {component, Component} from 'react'
import './portfolio.css'
import Footer from './footer.js'
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
                <div className = "my-content">
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

                {/* project section */}
                    <div className = "container mt-4">
                 
                    <div className = "row text-center">

                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                            <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>AR System</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic" ></img>  
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/AR-System', "_blank")}}>View Project</button>
                                
                                </div>
                            </div>
                       </div>
                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>Chit-Chat App</h4>
                                <img src = {require('./images/node.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/Chit_Chat', "_blank")}}>View Project</button>
                               
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>DES Implementation</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/DESImplementation', "_blank")}}>View Project</button>
                                
                               
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>FOODHut</h4>
                                <img src = {require('./images/android.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/FOODHut', "_blank")}}>View Project</button>
                                
                                
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>BMI</h4>
                                <img src = {require('./images/android.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/BMI', "_blank")}}>View Project</button>
                                
                               
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-6 col-lg-4">
                        <div className = "container">                         
                                <div className = " card-hi card" style = {{width: "100%"}}>
                                <h4>SimpleDice Game</h4>
                                <img src = {require('./images/java.png')} alt = "SagarGi" class = "display-pic"></img>                             
                                <button className = "button" onClick={(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/SimpleDiceGame', "_blank")}}>View Project</button>
                               
                               
                                </div>
                            </div>
                        </div>
                            
                        </div>
                </div>

                {/* more section */}
                 
                 <div className = "container">
                     <div className = "more text-center mt-4">
                            <h4>See More</h4>
                            <i class="fa fa-angle-double-down icon-down" onClick = {(e) => {e.preventDefault(); window.open('https://github.com/SagarGi/', "_blank")}}></i>
                     </div>
                 </div>

                </div>
                <Footer />
            </div>

            
        )
    }
}

export default Portfolio