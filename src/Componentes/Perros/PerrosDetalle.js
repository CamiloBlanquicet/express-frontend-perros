import React from "react";
import axios from "axios";


const PerrosDetalle = (props) => {
  return (

    <>
      <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img  src={props.perrito.foto}/>
          <span class="card-title">{props.perrito.nombre} - {props.perrito.raza}</span>
        </div>
        <div class="card-content">
          <p>Edad: {props.perrito.edad} </p>
        </div>
        <div class="card-action">
        <form onSubmit={function (event) {
                
                event.preventDefault();
                const url = `http://localhost:5000/perros/${props.perrito._id}`;
                axios.delete(url,{ data: { answer: 42 } })
                  .then((respuesta) => console.log(respuesta.data))
                  .catch((error) => console.log(error ))
              }}>


                <button
                  type="submit"
                  name="action"
                  className="waves-effect  red darken-2 btn">
                  Eliminar
                </button>
              </form>
        </div>
      </div>
    </div>
  </div>
    </>

  )
}


export default PerrosDetalle