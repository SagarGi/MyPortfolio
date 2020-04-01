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
                </div>
            </div>
        )
    }
}

export default Portfolio