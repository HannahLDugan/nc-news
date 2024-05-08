import { getArticles } from "../../api";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ArticlesList() {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
    getArticles()
    .then((response) => {
        setArticles(response.data.articles)
        setLoading(false)
})
}, [])

if (loading) {
    return <div>Loading page..</div>
}

if (error) {
    return <div>Error </div>
}

return (
    <div>
        <h1>Articles</h1>
        <ul>
            {articles.map((article) => {
            return (    
             <li key={article.article_id}>
                <img src={article.article_img_url}/>
               <h2>{article.title}</h2>
               <h3>Author: {article.author}</h3>
               <Link to={`/articles/${article.article_id}`}>Read more</Link>
               {/* <p>Topic: {article.body}</p>
               <p>Comments: {article.comment_count}</p>
               <p>Published date: {article.created_at}</p>
               <p>Topic: {article.topic}</p>
               <p>Votes: {article.votes}</p> */}
                </li>
            )
})}
        </ul>
    </div>
)
}


export default ArticlesList;
