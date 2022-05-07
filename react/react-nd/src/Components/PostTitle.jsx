export default function PostTitle ({post}){


    return(

        post.title.length < 20 ?  <li style={{color:'red'}}  >title: {post.title} <i style={{color:'black'}} >body: {post.body}</i></li> : <li>title: {post.title}</li>
    )
}