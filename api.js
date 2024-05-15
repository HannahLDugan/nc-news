
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

//POST /api/articles/:article_id/comments

const postComments = (article_id, username, body) => {
return axios
.post(`https://nc-news-ov84.onrender.com/api/articles/${article_id}/comments`,
{username: username,
  body: body
});
}

//DELETE /api/comments/:comment_id

const deleteComments = (comment_id) => {
  return axios
  .patch(`https://nc-news-ov84.onrender.com/api/comments/${comment_id}`)
}


export { getArticles, getSingleArticle, getComments, patchVotes, postComments, deleteComments }