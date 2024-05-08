import { getSingleArticle } from "../../api";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleArticle () {
    const { article_id } = useParams();
    const [article, setArticles] = useState([])  
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        // setError(null)
        getSingleArticle(article_id) 
    .then((response) => {
        setArticles(response.data.article)
        setLoading(false)
})
.catch(error => {
    setError(error.message)
    setLoading(false)
})
}, [article_id]);

if (loading) {
    return <div>Loading page..</div>
}

if (error) {
    return <div>Error </div>
}


return (
    <div>
        <h1>Article</h1>
        {article && ( 
            <div>
                {/* <li key={article.article_id}> */}
                <h2>{article.title}</h2>
                <img src={article.article_img_url} alt={article.title} />
                <h3>Author: {article.author}</h3>
                    <p>Topic: {article.body}</p>
               <p>Comments: {article.comment_count}</p>
               <p>Published date: {article.created_at}</p>
               <p>Topic: {article.topic}</p>
               <p>Votes: {article.votes}</p>
               {/* </li> */}
            </div>
        )}
    </div>
);
}


export default SingleArticle;
