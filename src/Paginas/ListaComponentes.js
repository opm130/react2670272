import React from "react";
import Lista from "../Componentes/ListadeTarjeta";
import Saludo from "../Componentes/Saludo";
import Boton from "../Componentes/Boton";
import bob from '../Imagenes/bob.png';
import Calamardo from '../Imagenes/Calamardo.png';
import Patricio from '../Imagenes/Patricio.png';



class ListaComponentes extends React.Component{
    state={
        data: [{
            id: 1,
            "title": "SpongeBob",
            "description": "Es una esponja marina amarilla enérgica y optimista que vive en una piña sumergida",
            "img": bob,
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        },{
            id: 2,
            "title": "Squidward Tentacles",
            "description": "Calamardo es representado como un pulpo turquesa amargo y gruñón.",
            "img": Calamardo,
            "leftColor": "#17EAD9",
            "rightColor": "#6078EA"
        },{
            id: 3,
            "title": "Patrick Star",
            "description": "Patricio es el mejor amigo ignorante pero divertido de Bob Esponja.",
            "img": Patricio,
            "leftColor": "#FAD961",
            "rightColor": "#F76B1C"
        }]
    }
render(){
    return(
        <div>
            <Saludo
            username="Oswaldo"
            />
            <Lista
            exercises={this.state.data}
            />
           <Boton/>
        </div>
    )
}
}
export default ListaComponentes