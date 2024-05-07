import { getArticles } from "../../api";
import { useEffect, useState } from 'react';

function ArticlesList() {
const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles()
    .then((response) => {
      //  console.log(response)
        setArticles(response.data.articles)
})
}, [])

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
               <p>Topic: {article.body}</p>
               <p>Comments: {article.comment_count}</p>
               <p>Published date: {article.created_at}</p>
               <p>Topic: {article.topic}</p>
               <p>Votes: {article.votes}</p>
                </li>
            )
})}
        </ul>
    </div>
)
}


export default ArticlesList;
