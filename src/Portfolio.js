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
                <div className = "container">

                    <div className = "myprojects">
                        <p>Some projects</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Portfolio