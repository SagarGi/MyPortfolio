import React from 'react'
import './footer.css'

const Footer = () =>
{
    return(
        <div className = "main-footer">
            <div class = "container footer">
                <div className = "links text-center">
                <a href="#" class="fa fafa fa-facebook"></a>
                <a href="#" class="fa fafa fa-instagram"></a>
                <a href="#" class="fa fafa fa-linkedin"></a>
                <a href="#" class="fa fafa fa-youtube"></a>
                </div>

                <div className = "bottom text-center">
                    <p>Made with <i className = "fa fafafa fa-heart"></i> by Sagar Gurung</p>
                </div>
            </div>             
        </div>
    )
}

export default Footer