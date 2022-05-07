import axios from "axios";
import { useEffect, useState } from "react"
import PostTitle from "./PostTitle";

export default function Posts(){

const [posts, setPosts] = useState([]);

useEffect(() =>{
    axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
    .then(r => {
        console.log(r.data);
        setPosts(r.data.sort((a, b) => b.title.length - a.title.length));
    })
}, [])


    return(
    <ul>
        {
            posts.map(p => <PostTitle key={p.id} post={p} ></PostTitle>)
        }
    </ul>

    )

}