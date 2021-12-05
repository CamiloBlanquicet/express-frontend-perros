import axios from 'axios';
import './App.css';
import PerrosLista from './Perros/PerrosLista';
import PerrosDetalle from './Perros/PerrosDetalle';
import PerrosForm from './Perros/PerrosForm';
import { render } from 'react-dom';
import React from 'react';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      perros: [],
      perroActual: {}
    }
    this.actualizarPerro = this.actualizarPerro.bind(this);
  }
  componentDidMount() {
    const url = 'http://localhost:5000/perros';
    axios.get(url)
      .then((respuesta) => {
        
        this.setState({
          perros: respuesta.data,
          perroActual : respuesta.data[0]
          
        })
        
      })
      .catch((error) => console.log(error))
  }



  actualizarPerro(perro){
    this.setState({
      perroActual:perro

    })
  }
  


  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col s12">
            <nav>
              <div className="nav-wrapper teal darken-1">
                <a href="#" className="brand-logo">Perros</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html"></a></li>
                  
                </ul>
              </div>
            </nav>

          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <PerrosLista Lista={this.state.perros} actualizarPerro={this.actualizarPerro} />
          </div>

          <div className="col s9">
            <PerrosDetalle perrito = {this.state.perroActual}  />
          </div>
        </div>
        <div className="row">
          <div className="col s9">
            <PerrosForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
