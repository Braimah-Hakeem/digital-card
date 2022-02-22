import React from "react"
import picture from "./my pic-1.jpg"
import "./Index.css"

export default function Info() {
    return(
        <div className="info">
            <img className="Dev-img" src={picture} alt="my picture"/>
            <h1>Braimah Hakeem</h1>
            <p>Frontend Developer</p>
            <a href="https://hakeem-braimah.netlify.app"  target="_blank">hakeem-braimah.netlify.app</a>
            <button><i class="fa fa-envelope"></i><p className="email-btn-txt">Email</p></button>
        </div>
    )
}