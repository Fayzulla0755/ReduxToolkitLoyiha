import React, { useState } from "react";

import ArticleForm from "./ArticleForm";
import ArticleServise from "../service/article";
import { useDispatch } from "react-redux";
import { postArticleFailur, postArticleSiuccess, postArticleStart } from "../slice/article";
import { useNavigate } from "react-router-dom";
export default function CreateArticle() {
  // Constant's
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [article, setArticle] = useState({
    title: "",
    body: "",
    description: "",
  });
  const changHandler = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formSubmit = async (e)=>{
    e.preventDefault()
    dispatch(postArticleStart())
    try {
      await ArticleServise.postArticle(article)
      dispatch(postArticleSiuccess())
      setArticle({
        title: "",
        body: "",
        description: "",
      })
      navigate('/')
     
    } catch (err) {
      dispatch(postArticleFailur())
      console.log(err);
    }
  }
  return (
    <div className="container text-center ">
      <h1 className="fs-2">Create article</h1>
      <ArticleForm changHandler={changHandler} article={article}  formSubmit={formSubmit}/>
    </div>
  );
}
