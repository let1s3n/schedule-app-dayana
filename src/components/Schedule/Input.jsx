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
              <option value="1">7:00 - 7:50</option>
              <option value="2">8:00 - 8:50</option>
              <option value="3">9:00 - 9:50</option>
              <option value="4">10:00 - 10:50</option>
              <option value="5">11:00 - 11:50</option>
              <option value="6">12:00 - 12:50</option>
              <option value="7">13:00 - 13:50</option>
              <option value="8">14:00 - 14:50</option>
              <option value="9">15:00 - 15:50</option>
              <option value="10">16:00 - 16:50</option>
              <option value="11">17:00 - 17:50</option>
              <option value="12">18:00 - 18:50</option>
              <option value="13">19:00 - 19:50</option>
              <option value="14">20:00 - 20:50</option>
              <option value="15">21:00 - 21:50</option>

            </select>
          </div>
          <div className="col-sm-2">
            <input className="btn btn-secondary" type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </div>
        <Schedule data={this.state}/>
      </div>
    );
  }
}

export default Input;