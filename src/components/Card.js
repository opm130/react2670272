import React from "react";
import Miimagen from "./image/descarga.png"
import "./style/Card.css"

class Card extends React.Component{
render(){
const {nombre,edad,color}=this.props
    return (
    <div className="card back">
        <div className="font" style={{color:`${color}`}}>
             <h1 >Hola {nombre} tu edad es {edad}</h1>
        </div>
         <div>
            <img src={Miimagen} className="porta" alt=""/>
         </div>
         
    </div>
    )
}
}

export default Card