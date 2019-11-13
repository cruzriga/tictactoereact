import React from 'react';

function Tablero({turno,setTurno, setTable, table}){

    const handleClick = (r,c) =>{
        let _table = table;
        if(_table[r][c] === ""){
          _table[r][c]=turno
          setTable(table)
          setTurno(_turno =>((_turno === "X") ? "0" : "X"));
        }
      }


    function Tr({r}){
        return(
              <tr className={"r"+r}>
                <td className="c0" onClick={() => handleClick(r,0)}>{table[r][0]}</td>
                <td className="c1" onClick={() => handleClick(r,1)}>{table[r][1]}</td>
                <td className="c2" onClick={() => handleClick(r,2)}>{table[r][2]}</td>
            </tr>
      )
    }

    return( <table>
                <tbody>
                    <Tr r={0}/>
                    <Tr r={1}/>
                    <Tr r={2}/>
                </tbody>
            </table>
    );
}

export default Tablero;