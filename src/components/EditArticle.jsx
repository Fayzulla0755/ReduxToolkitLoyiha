import React, { useEffect, useState } from "react";
import ArticleForm from "./ArticleForm";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailur,
  postArticleSiuccess,
  postArticleStart,
} from "../slice/article";
import ArticleServise from "../service/article";

export default function EditArticle() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [editArticle, setEditArticle] = useState({
    title: "",
    description: "",
    body: "",
  });
  const navigate = useNavigate();

  const getArticleDetailv = async (slug) => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleServise.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
      setEditArticle({
        title: response.article.title,
        description: response.article.description,
        body: response.article.body,
      });
    } catch (error) {
      console.log(error);
      dispatch(getArticleDetailFailure());
    }
  };
  useEffect(() => {
    getArticleDetailv(slug);
  }, [slug]);
  const changHandler = (e) => {
    setEditArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formSubmit = async (e) => {
    const article = editArticle
    e.preventDefault();
    dispatch(postArticleStart());
    try {
     await ArticleServise.editArticle(slug, article);
     
      dispatch(postArticleSiuccess());
      navigate("/");
    } catch (err) {
      dispatch(postArticleFailur());
      console.log(err);
    }
  };

  return (
    <div className="container text-center ">
      <h1 className="fs-2">Edit article</h1>
      <ArticleForm
        changHandler={changHandler}
        article={editArticle}
        formSubmit={formSubmit}
      />
    </div>
  );
}
