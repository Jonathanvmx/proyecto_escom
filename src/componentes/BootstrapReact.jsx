import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapReact extends React.Component {

    render() {
      return(
    <div>
    <div class="container-fluid p-5 bg-primary text-white text-center">
        <h1>PAGINA 1 BASICA DE BOOTSTRAP</h1>
        <p>REDIMENSIONA LA PAGINA3</p> 
        </div>
        <div class="container mt-5">
      <div class="row">
        <div class="col-sm-2">
        <h3>Columna 1</h3>
        <p>LO QUE SEA SE PUUEDE PONER AQUI EN LA COLUMNA 1...</p>
        </div>
        <div class="col-sm-8">
        <h3>Columna 2</h3>
        <p>LO QUE SEA SE PUUEDE PONER AQUI EN LA COLUMNA 2...</p>
        </div>
        <div class="col-sm-2">
        <h3>Columna 3</h3>        
        <p>LO QUE SEA SE PUUEDE PONER AQUI EN LA COLUMNA 3...</p>
        </div>
      </div>
    </div>
    </div>);    
  }
}
export default BootstrapReact; 