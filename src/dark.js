import React, {Component} from "react";
import DarkTheme from 'react-dark-theme'
import './portfolio.css'


const lightTheme = {
    footerback: '#d6b1eb',
    madefooter: 'black',
    background: 'white',
    cardbackground: '',
    text : ''
  }
  
  const darkTheme = {
    footerback: 'black',
    madefooter: 'white',
    background: '#202020',
    cardbackground: '#1b1a1a',
    text : 'white'
}
class DarkMode extends Component
{
    
    render()
    {
        return(
            <div>
                <DarkTheme
                light = {lightTheme}
                dark = {darkTheme}
                className = "mydark"
                >
                </DarkTheme> 
            </div>
        )
    }
}

export default DarkMode