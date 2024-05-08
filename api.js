import axios from 'axios';

//GET /api/articles

const getArticles = () => {
    return axios
      .get(`https://nc-news-ov84.onrender.com/api/articles`)
}

// GET /api/articles/:article_id

const getSingleArticle = (article_id) => {
        return axios
          .get(`https://nc-news-ov84.onrender.com/api/articles/${article_id}`)
  }


export { getArticles, getSingleArticle }