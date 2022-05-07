import kvadratelis from '../Reducers/kvadratelis';
import { useReducer } from 'react';
import { addKv,difKV  } from '../Actions/kvadratelis';

function Kvadratelis() {

    const [kv, dispachKv] = useReducer(kvadratelis, [1,1,1]);

    return (
        <div >
        <button onClick={() => dispachKv(addKv())}>ADD</button>
        <button  onClick={() => dispachKv(difKV())}>DIF</button>
        <div className="SQUARE500">
            {
                kv.map((k, i) => <div key={i} className="SQUARE50"></div>)
            }
        </div>
        </div>
    )
}

export default Kvadratelis;