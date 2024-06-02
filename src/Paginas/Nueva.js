import React from "react";
import Formu from '../Componentes/Formulario'
import Tarjeta from "../Componentes/Tarjeta";
class Nueva extends React.Component{
    state={
        form:{
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
            }) 
    }
render(){
    return(
        <div className="row">
            <div className="col-sm">
                <Tarjeta
                {...this.state.form}
                />
            </div>
            <div className="col-sm">
                <Formu
                    onChange={this.handleChange}
                    form={this.state.form}
                />
            </div>
        </div>
       
    )
}    
}
export default Nueva