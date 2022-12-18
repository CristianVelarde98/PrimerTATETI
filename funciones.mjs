import { variables } from "./variables.mjs";

// una funcion que muestre el turno del equipo 
// una funcion que se fije si alguien gano 
// una funcion que resetee la partida 
// una funcion que por cada click agregue una ficha 

export const agregarFicha = () => {
    const {tablero, convinacion} = variables();
    tablero.forEach((ficha, index) => {
        ficha.dataset.id = index + 1;
        ficha.addEventListener("click", (evento) => {
           ficha.innerHTML = "X";
        })
    })
}



// como llamar al evento 
/*
1) event 
2) evt
3) evento
4) e
*/