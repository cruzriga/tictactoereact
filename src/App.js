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
  const [turno, setTurno] = useState("");
  const [restante, setRestante] = useState( 9 );
  const [ganador, setGanador]   = useState("");
  const [linea, setLinea] = useState('');


  useEffect(()=>{
      let winner = false;
      if (restante < 6) {
           let d1 , d2 = 0;
          for (let i = 0; i < 3; i++) {
              let x,y = 0;
              for (let k = 0; k < 3; k++) {
                  x = (table[i][k] === turno) ? x + 1 : x;
                  y = (table[k][i] === turno) ? y + 1 : y;
              }

              if (x === 3 || y === 3) {
                  let line = (x === 3) ? i : i + 3;
                  orientacion(line);
                  setGanador(turno);
                  winner = true;
                  break;
              } else {
                  d1 = (table[i][i] === turno) ? d1 + 1 : d1;
                  d2 = (table[2 - i][i] === turno) ? d2 + 1 : d2;
                  if (d1 === 3 || d2 === 3) {
                      let line = (d1 === 3) ? 6 : 7;
                      orientacion(line);
                      setGanador(turno);
                      winner = true;
                  }
              }
          }

          if(restante === 0 && !winner){
              setGanador("empate");
              setLinea("");
          }
      }

      setTurno(_turno =>{
          if(_turno === "") return "X";
          return ((_turno === "X")?"O":"X")
      });

  },[restante]);

  function reiniciar(){
    setTable(initTable);
    setTurno("X");
    setRestante(9);
    setGanador("");
    setLinea("");
  }
  
  function orientacion(i) {
      let dir = ['arriba', 'medio','abajo', 'izq', 'centro','derecha','declinada', 'inclinada'];
      setLinea(dir[i]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <section className="main">
          <div className="panel">
                <div>
                    { (ganador === "")
                        ? <>
                            <div className="p_r">
                                <div className="l">Turno actual: </div>
                                <div className="r">{turno}</div>
                            </div>
                             <div className="p_r" style={{textAlign:"center", display:"block"}}>
                                 <small>Movimientos restantes {restante}</small>
                            </div>
                        </>
                        : <Mensaje ganador={ganador} />
                    }
                </div>
                <div>
                  <a href="#" className="btn" onClick={reiniciar}>Reiniciar</a>
                </div>
          </div>
          <div>
          </div>
          <div className="container">
              <Tablero  turno={turno} setTurno={setTurno} table={table} setTable = {setTable} linea={linea} setRestante={setRestante}/>
          </div>
        </section>  
      </header>
    </div>
  );
}

export default App;
