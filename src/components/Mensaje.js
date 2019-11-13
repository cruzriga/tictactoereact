import React from 'react'

function Mensaje({ganador}){
    let title = "El Ganador es:";
    let msg = ganador;

    if(!ganador){
        return '';
    }

    if(ganador === "empate"){
        title = "HA SIDO UN";
        msg = "EMPATE";
    }

    return(
        <div className="mensaje">
            <div className="msg-title">{title}</div>
            <div className="msg-body">{msg}</div>
        </div>
    );
}

export default Mensaje;