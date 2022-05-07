import axios from "axios";
import { useEffect, useState } from "react"

export default function Users (){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data)
        })
    }, [])

    return(

        <ul>
            {
                users.map(u => <li key={u.id} >{u.name}<i>{u.company.name}</i></li>)
            }
        </ul>


    )
}