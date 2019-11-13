import React, {useState, useEffect} from 'react';
import Tablero from './components/Tablero';
import Mensaje from './components/Mensaje';
import './App.css';

function App() {
  const initTable = [
    ["","",""] ,
    ["","",""] ,
    ["","",""]
  ];
  
  const [table, setTable] = useState(initTable);
  const [turno, setTurno] = useState("X");
  const [restante, setRestante] = useState(true);
  const [ganador, setGanador]   = useState("");
  
  useEffect(()=>{
    setRestante(_restante =>((_restante === true) ? 9 : _restante - 1));
  },[turno]);


  useEffect(()=>{
    if(restante === 0){
        if(ganador === ""){
           setGanador("empate");
         }else{
          // calcular el ganador 
          setGanador("X")
        }
    }
  },[restante])

  const reiniciar = () =>{
    setTable(initTable);
    setTurno("X");
    setRestante(true);
    setGanador("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <section className="main">
          <div className="panel">
                <div>
                  <h2>Panel de control</h2>
                  <div className="p_r">
                      <div className="l">Turno actual: </div>
                      <div className="r">{turno}</div>
                  </div>
                  <div className="p_r">
                    <small>Movimientos restantes {restante}</small>
                  </div>
                </div>
                <Mensaje ganador={ganador} />
                <div>
                  <a href="#" className="btn" onClick={reiniciar}>Reiniciar</a>
                </div>
          </div>
          <div>
          </div>
          <div className="container">
           <Tablero  turno={turno} setTurno={setTurno} table={table} setTable = {setTable} />
          </div>
        </section>  
      </header>
    </div>
  );
}

export default App;
