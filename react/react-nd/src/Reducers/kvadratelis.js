import { ADD_KV, DIF_KV } from "../Constants";

function kvadratelis(state, action) {

    switch (action.type) {
        case ADD_KV:
            return [...state, 1];
        case DIF_KV:
            // return [...state].slice(0, - 1);
            return state.filter((_, i)=> i !== 0);
        default:
            return state;
    }
}

export default kvadratelis;