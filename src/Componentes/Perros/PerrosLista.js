import React from "react";

const PerrosLista = (props) =>{
return(
    <>
             <ul className="collection with-header">

                <li className="collection-header"><h5>Perros</h5></li>
                {
                    props.Lista.map((elemento) => {
                        return (
                            <li className="collection-item" 
                            key= {elemento._id}
                            onClick={props.actualizarPerro.bind(this,elemento)} 
                            >{elemento.nombre}</li>
                        )
                    })
                }

            </ul>
    </>

)
}
export default PerrosLista 