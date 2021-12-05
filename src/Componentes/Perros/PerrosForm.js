import React from "react";
import axios from "axios";

class PerrosForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submitNuevoPerro(event) {
        event.preventDefault();
        //Hacer la peticion via axios
        axios.post('http://localhost:5000/perros', {
            nombre: this.refs.nombre.value,
            raza: this.refs.raza.value,
            edad: this.refs.edad.value,
            foto: this.refs.foto.value
        }
        ).then((response) => { console.log(response.data); })
            .catch((err) => console.log(err))
    }
    render() {
        return (

            <div className="row">
            <h3 className="center">Nuevo Perro</h3>
            <form className="col s12" onSubmit={this.submitNuevoPerro.bind(this)}>
            <div className="row">
                <div className="input-field col s6">
                    <input ref="nombre" id="nombre" type="text" />
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                    <input ref="raza" id="apellido" type="text" />
                    <label htmlFor="apellido">Raza</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input ref="edad" id="edad" type="text" />
                    <label htmlFor="edad">Edad</label>
                </div>
                
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input ref="foto" id="foto" type="text" />
                    <label htmlFor="foto">Dirreccion de Imagen</label>
                </div>
                
            </div>
            <div className="row">
                
                <div className="input-field col s6">
                    <button 
                        type="submit" 
                        name="action" 
                        className="waves-effect waves-light btn">
                            Registrar
                    </button>
                </div>
            </div>
            </form>
        </div>
        )
    }
}
export default PerrosForm
