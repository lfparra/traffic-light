import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TrafficLight = props => {

  const [luzActiva, setLuzActiva] = useState("");
  
  const cambiarLuzActiva = (e) => {
     console.log(e.target.className);
     setLuzActiva(e.target.className);
  }

  let resultadoRed = luzActiva === "red-light" ? " red-light-active" : "";
  let resultadoYellow = luzActiva === "yellow-light" ? " yellow-light-active" : "";
  let resultadoGreen = luzActiva === "green-light" ? " green-light-active" : "";
  
  return (
    <div className="semaforo">
        <div className={"red-light" + resultadoRed} onClick={(e) => cambiarLuzActiva(e)}></div>
        <div className={"yellow-light" + resultadoYellow} onClick={(e) => cambiarLuzActiva(e)}></div>
        <div className={"green-light" + resultadoGreen} onClick={(e) => cambiarLuzActiva(e)}></div>
    </div>
  )
}

const App = () => {
  return (
    <>
    <h2>Traffic Light</h2>
    <div className="container">
      <TrafficLight />
      <TrafficLight />
      <TrafficLight />
    </div>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

