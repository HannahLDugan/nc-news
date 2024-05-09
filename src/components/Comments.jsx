import { getComments } from "../../api";
import { useEffect, useState } from 'react';

const Comments = ({article_id}) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        setLoading(true)
         setError(null)

        getComments(article_id) 
        .then((response) => {
            setComments(response.data.comments)
            setLoading(false)
})
.catch(error => {
    setError(error.message)
})
}, [article_id]);

if (loading) {
    return <div>Loading comments..</div>
}

if (error) {
    return <div>Error </div>
}

return (
    <div>
        <h1> comments</h1>
        <ul>
        {comments.map((comment) => {
            return (
                 <li key={comment.comment_id}>
                <p>Author: {comment.author}</p>
                <p>Comment: {comment.body}</p>
                 <p>Published: {comment.created_at}</p>
                <p>Votes: {comment.votes}</p>  
     </li> 

            );
        })}
        </ul>
      </div>
)
    }


export default Comments;

