import { useState } from 'react'
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import ArticlesList from './components/ArticlesList';

function App() {


  return (
    <>
    {/* <Link to="/">Home</Link> */}
    <Link to="/articles">Articles</Link>
    {/* <Link to="/">SingleArticle</Link>
    <Link to="/">Topics</Link>
    <Link to="/">Users</Link> */}
    <Routes>
      {/* <Route path ="/" element={<Home/>} /> */}
      <Route path ="/articles" element={<ArticlesList/>} />
      {/* <Route path ="/articles/:article_id" element={<singleArticle/>} />
      <Route path ="/topics" element={<topics/>} />
      <Route path ="/users" element={<users/>} /> */}
    </Routes>
    </>
  )
}

export default App
