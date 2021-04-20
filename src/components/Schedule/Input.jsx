import {exportComponentAsPNG } from 'react-component-export-image';
import React, { Component } from "react";
import Schedule from './Schedule'


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curso: '',
      dia: '',
      horario: ''
    }
    this.componentRef = React.createRef();
  }


  handleSubmit = () => {
    const curso = document.getElementsByName('curso')[0].value;
    const dia = document.getElementsByName('dia')[0].value;
    const horario = document.getElementsByName('horario')[0].value;



    this.setState({
      curso,
      dia,
      horario
    });
  }
  
  render() {


    return (
      <div className="container-sm mx-auto overflow-auto">

        <div className="row p-3 justify-content-center bg-primary">
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="Curso" aria-label="Curso" name="curso" />
          </div>
          <div className="col-sm-2">
            <select className="form-select" aria-label="Dia" name="dia">
              <option selected>Elige un día</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sabado</option>
              <option value="Domingo">Domingo</option>
            </select>
          </div>

          <div className="col-sm-2">
            <select className="form-select" aria-label="Hora" name="horario">
              <option selected>Elige un horario</option>
              <option value="1">07:00 - 07:30</option>
              <option value="2">07:30 - 08:00</option>
              <option value="3">08:00 - 08:30</option>
              <option value="4">08:30 - 09:00</option>
              <option value="5">09:00 - 09:30</option>
              <option value="6">09:30 - 10:00</option>
              <option value="7">10:00 - 10:30</option>
              <option value="8">10:30 - 11:00</option>
              <option value="9">11:00 - 11:30</option>
              <option value="10">11:30 - 12:00</option>
              <option value="11">12:00 - 12:30</option>
              <option value="12">12:30 - 13:00</option>
              <option value="13">13:00 - 13:30</option>
              <option value="14">13:30 - 14:00</option>
              <option value="15">14:00 - 14:30</option>
              <option value="16">14:30 - 15:00</option>
              <option value="17">15:00 - 15:30</option>
              <option value="18">15:30 - 16:00</option>
              <option value="19">16:00 - 16:30</option>
              <option value="20">16:30 - 17:00</option>


            </select>
          </div>
          <div className="col-sm-2">
            <input className="btn btn-secondary" type="submit" value="Agregar" onClick={this.handleSubmit} />
          </div>

          <div className="col-sm-2">
            <input className="btn btn-secondary" type="button" value="Guardar como imagen" onClick={() => exportComponentAsPNG(this.componentRef,{fileName:'horario',html2CanvasOptions:{
              background:undefined
            }})} />
          </div>
        </div>
        <Schedule ref={this.componentRef} data={this.state} />
      </div>
    );
  }
}

export default Input;