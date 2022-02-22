import React from "react"
import "./Index.css"
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"
import github from "./github.png"
import "./Index.css"

export default function Footer(){
    return(
        <div className="footer">
            <img className="flex-item" src={facebook} alt="facebook-logo" />
            <img className="flex-item" src={instagram} alt="instagram logo"/>
            <img className="flex-item" src={linkedin} alt="linkedin logo"/>
            <img className="flex-item" src={github} alt="github logo"/>

        </div>
    )
}