import axios from 'axios';

//GET /api/categories

const getArticles = (articles) => {
    return axios
      .get(`https://nc-news-ov84.onrender.com/api/articles`)
}

// GET 

// const getItems = (item) => {
//         return axios
//           .get(`https://nc-marketplace-sem-1.onrender.com/api/items`)
//     }


export { getArticles }