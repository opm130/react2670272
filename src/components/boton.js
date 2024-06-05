import React from "react";
import B from './image/boton.avif'
import './style/boton.css'

export default function Addb(props){
    return(
        <div className="fboton">
            <a href="/formulario">
                <img src={B} className="boton"/>
            </a>
        </div>
    )
}
