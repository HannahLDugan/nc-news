import { patchVotes } from "../../api";
import { useEffect, useState } from 'react';

const ArticleVotes = ({article_id, inc_votes }) => {
const [loading, setLoading] = useState(null)
const [votes, setVotes] = useState(0)
const [error, setError] = useState(null)

useEffect(() => {
    setLoading(true)
     setError(null)

     patchVotes(article_id, inc_votes) 
     .then((response) => {
        console.log(response.data.votes)
         setVotes(response.data.votes)
         setLoading(false)
})
.catch((error) => {
    setError(error.message)
    setLoading(false)
})
}, [article_id]);

function handleUpvote () {
    setVotes(votes+1)

    patchVotes(article_id, 1)
    .then((response) => {
    })
    .catch((error) => {
        (error)
})
}

function handleDownvote () {
    setVotes(votes - 1)

    patchVotes(article_id, -1)
    .then((response) => {
    })
        .catch((error) => {
            (error)
})
}


return (
    <div>
      <h2>Vote Count Above</h2>
      <h3>{votes}</h3>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
)
}

export default ArticleVotes;
