import React from "react";
import "./style/Card.css"

class Card extends React.Component{
render(){
const {nombre,descripcion,img,color}=this.props
    return (
    <div className="card" style={{background:`${color}`}}>
            <h1 >{nombre}</h1>
            <p>{descripcion}</p>
            <img src={img} className="porta" alt=""/>
    </div>
    )
}
}

export default Card