import { ADD_1, ADD_11, ADD_RAND, COLOR_CHANGE, DIF_1, DIF_11, DIF_RAND, NEW_COLOR, ADD_SQUARE, ADD_KV } from "../Constants";

function countReducer(state, action) {
    switch (action.type) {
        case ADD_1:
            return state + 1;
        case ADD_11:
            return state + 11;
        case DIF_1:
            return state - 1;
        case DIF_11:
            return state - 11;
        case ADD_RAND:
            return state + action.payload;
        case DIF_RAND:
            return state - action.payload;
            
        case NEW_COLOR:
            return action.payload;

        case COLOR_CHANGE:
            return state === 'blu' ? 'yelow' : 'blue';
        case ADD_SQUARE:

            return 'SQUARE50';

            
        
        default:
            return state;

    }

}

export default countReducer;