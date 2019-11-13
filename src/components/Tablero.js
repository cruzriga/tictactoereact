import React from 'react';

function Tablero({turno,setRestante, setTable, table, linea}){
    const handleClick = (r,c) =>{
        if(linea === ""){
            let _table = table;
            if(_table[r][c] === ""){
              _table[r][c]=turno;
                setTable(table);
                setRestante(_restante =>((_restante === true) ? 9 : _restante - 1));
            }
        }
      };

    function Tr({r}){
        return(
              <tr className={"r"+r}>
                <td className="c0" onClick={() => handleClick(r,0)}>{table[r][0]}</td>
                <td className="c1" onClick={() => handleClick(r,1)}>{table[r][1]}</td>
                <td className="c2" onClick={() => handleClick(r,2)}>{table[r][2]}</td>
            </tr>
      )
    }

    return( <div style={{position:"relative"}}>
                { (linea) ? <div className={`line ${linea}`} ></div> : '' }
                    <table>
                    <tbody>
                        <Tr r={0}/>
                        <Tr r={1}/>
                        <Tr r={2}/>
                    </tbody>
                </table>
            </div>
    );
}

export default Tablero;