import axios from "axios";
import { useEffect, useState } from "react"

export default function Avatar2 (){

    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?delay=3')
        .then(res => {
            console.log(res.data.data);
            setAvatars(res.data.data)
        })
    }, [])

    return(

        <ul>
            {
                avatars.length ? avatars.map(avatar =>


                    <div  key={avatar.id} >
                         <h3 style={{width:'20px', color:'red'}} key={avatar.id} >{avatar.first_name} {avatar.last_name} &#8681;</h3>
                        <img src={avatar.avatar} alt="avatar" />
                       
                    </div>
                    
                    
                )  : <h1 style={{color:'red'}} >&#63;</h1>
            }
        </ul>


    )
}