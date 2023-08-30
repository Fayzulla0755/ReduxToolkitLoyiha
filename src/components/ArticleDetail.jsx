import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import ArticleServise from "../service/article";
import moment from "moment/moment";
import { Loader } from "../ui";

export default function ArticleDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  const getArticleDetailv = async (slug) => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleServise.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      console.log(error);
      dispatch(getArticleDetailFailure);
    }
  };
  useEffect(() => {
    getArticleDetailv(id);
  }, [id]);

  return articleDetail === null ? (
    <Loader />
  ) : (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
          <p className="col-md-8 fs-4">{articleDetail.description}</p>

          <p className="text-muted">
            <strong>Created at:</strong>{" "}
            {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
          </p>
          <div>{articleDetail.body}</div>
        </div>
        <div className="W-100 d-flex justify-content-end align-items-center  ">
          {articleDetail.author.username}
          <img
            style={{ borderRadius: "50%" }}
            src={articleDetail.author.image}
            alt={articleDetail.author.username}
          />
        </div>
      </div>
    </div>
  );
}
