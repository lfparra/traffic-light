import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TrafficLight = props => {
  return (
    <div className="semaforo">
        <div className="red-light"></div>
        <div className="yellow-light"></div>
        <div className="green-light"></div>
    </div>
  )
}



const App = () => {
  return (
    <>
    <h2>Traffic Light</h2>
    <TrafficLight />
    <TrafficLight />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

