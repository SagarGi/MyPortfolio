import React, {component, Component} from 'react'
import './portfolio.css'
import Avatar from 'react-avatar'

class Portfolio extends Component
{
    render()
    {
        return(
            <div className = "main">
                <div className = "about-me container text-center">
                        <div className = "profile-image text-center">
                            <img src = {require('./images/sagar.jpg')} alt = "SagarGi" className = "avatar"></img>
                        </div>
                        <h1>About Me</h1>
                        <p>Hello World,<i class="fa fa-hand-paper-o wave" aria-hidden="true"></i> My name is Sagar Gurung.<br></br>I am a software engineering student persuing BE in software in GCES.
                        <br></br>I like java most than other programing language but i also like c,c++ and javascript.<br></br>
                        I am a learning developer, you can find some of my projects below. Beside that i also write <a href = "https://www.saagargurung.com.np/" target = "_blank">BLOGS</a></p>
                </div>

                <div className = "container">

                    <div className = "proejcts text-center mt-4">
                            <h1>My Projects</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default Portfolio