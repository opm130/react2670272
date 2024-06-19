import React from "react";
import Lista from "../Componentes/ListadeTarjeta";
import Saludo from "../Componentes/Saludo";
import Boton from "../Componentes/Boton";
class ListaComponentes extends React.Component{
    state={
        data: []
    }
    async componentDidMount(){
        await this.cargarComponentes()
    }
    cargarComponentes=async()=>{
        let res=await fetch('http://localhost:8000/api/info')
        let data= await res.json()
        this.setState({
            data
        })
    }
render(){
    return(
        <>
            <Saludo
            username="Oswaldo"
            />
            <Lista
            exercises={this.state.data}
            />
           <Boton/>
        </>
    )
}
}
export default ListaComponentes