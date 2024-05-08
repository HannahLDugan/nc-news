import { useState } from 'react'
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';


function App() {


  return (
    <>
      <h1>NC News </h1>
    <Link to="/articles">Articles</Link>
    {/* <Link to="/articles/:article_id">SingleArticle</Link> */}
    <Routes>
      <Route path ="/articles" element={<ArticlesList/>} />
      <Route path ="/articles/:article_id" element={<SingleArticle/>} />
    </Routes>
    </>
  )
}


export default App

