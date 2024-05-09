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

  //GET /api/articles/:article_id/comments

const getComments = (article_id) => {
  return axios
  .get(`https://nc-news-ov84.onrender.com/api/articles/${article_id}/comments`)
}

//PATCH /api/articles/:article_id

const patchVotes = (article_id, inc_votes) => {
  return axios
  .patch(`https://nc-news-ov84.onrender.com/api/articles/${article_id}`,
  { inc_votes: inc_votes })
}

export { getArticles, getSingleArticle, getComments, patchVotes }