import {DIF_KV } from "../Constants";

function kvJanina(state, action) {

    switch (action.type) {
       
        case DIF_KV:
            // return [...state].slice(0, - 1);
            return state.filter((_, i)=> i !== 0);
        default:
            return state;
    }
}

export default kvJanina;