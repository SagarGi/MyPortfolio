import React, { Component } from 'react'
import MyPicture from './MyPicture';
import './portfolio.css'
import ButtonBar from './ButtonBar';
import Follow from './Follow';



class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div>

                        <h1 className="text text-center text-capitalize mt-5 display-4 font-weight-bold">Welcome To My World!! <img className="qr" src={require("./images/sagarqrcode.png")} height="50" width="50" /> </h1>
                    </div>
                </div>
                <div className="Container-fluid">
                    <section>
                        <MyPicture />
                        <p className="textpara text-center  h3 font-weight-bold">Hello world, I am Sagar Gurung.</p>
                        <p className="textpara text-center  h3 font-weight-bold">Java makes me cum hard but i get horny when i hear c, c++ and javascript.</p><br></br>
                        <hr className="hrline"></hr>
                    </section>
                </div>

                <section>
                    <ButtonBar />
                </section>

                <section>
                    <Follow />
                </section>
            </div>

        )
    }
}

export default Portfolio