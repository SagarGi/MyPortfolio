import React from 'react'
import './footer.css'

const Footer = () =>
{
    return(
        <div className = "main-footer">
            <div class = "container footer">
                <div className = "links text-center">
                <a href="https://www.facebook.com/sagar.gurung.357284" target = "_blank" class="fa fafa fa-facebook"></a>
                <a href="https://www.instagram.com/sagar_gurung1001/" target = "_blank" class="fa fafa fa-instagram"></a>
                <a href="https://www.linkedin.com/in/sagar-gurung-99450619b/" target = "_blank" class="fa fafa fa-linkedin"></a>
                <a href="https://www.youtube.com/channel/UCSoD755igNn-BXvOVY1fUlA?view_as=subscriber" target = "_blank" class="fa fafa fa-youtube"></a>
                </div>

                <div className = "bottom text-center">
                    <p>Made with <i className = "fa fafafa fa-heart"></i> by Sagar Gurung</p>
                </div>
            </div>             
        </div>
    )
}

export default Footer