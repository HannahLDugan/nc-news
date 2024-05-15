import { deleteComments } from "../../api";
import { useState } from 'react';

const DeleteComment = ({comment_id}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")


const handleDelete = () => {
    setMessage("comment being deleted")
    deleteComments(comment_id)
    console.log(response)
    .then((response) => {
        setMessage("comment has been deleted")
        setError(false)
    })
    .catch(() => {
        setError(true)
    });
}

return (
    <div>
        <button
        size="sm"
        type="button"
        onClick={handleDelete}>

        </button>
    </div>
)

}

export default DeleteComment;

// CORE: Delete comments
// Description
// Users should be able to:

// delete their own comments only.
// Things to consider:

// How will a user know they can delete that comment?
// How will a user know that a comment has been deleted?
// It may take some time for the API request to fulfil. 
// How can we be sure that the user doesn't get impatient 
// and try and send a second request before the first response comes back?
// We will expect a basic level of layout consideration for 
// this ticket. It doesn't need to be completely styled - your focus
//  should be on the functionality first.