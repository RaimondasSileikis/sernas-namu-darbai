import { ADD_KV, DIF_KV } from "../Constants";

export function addKv() {
    return {
        type: ADD_KV
    }
}
export function difKV() {
    return {
        type: DIF_KV
    }
}