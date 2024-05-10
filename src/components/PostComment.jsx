import { postComments } from "../../api";
import { useState } from 'react';

const PostComment = ({article_id}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [commentBody, setCommentBody] = useState("")
    const [username, setUsername] = useState("")


const handleUsernameChange = (event) => {
    setUsername(event.target.value)
}
 
const handleCommentChange = (event) => {
    setCommentBody(event.target.value)
}

const handlePostComment = () => {
        setLoading(true)
        postComments(article_id, username, commentBody)
        .then((response) => {
            console.log("your comment has successfully been posted")
        })
    .catch ((error) => {
        setError(error.message)
        setLoading(false)
    })
}

return (
    <div>
        <h2>Leave a comment</h2>
        <div className ="addCommentContainer">
            <label htmlFor="comment">Your Comment:</label>
            <textarea 
            commentsection="comment" 
            value={commentBody} 
            onChange={handleCommentChange}
            ></textarea>
            <label htmlFor="username">Your Username:</label>
            <input type="text" 
            username="username"
            value={username}
            onChange={handleUsernameChange}
            />
             <button onClick={handlePostComment}>add comment</button>
        </div>

    </div>
)
}

export default PostComment;

