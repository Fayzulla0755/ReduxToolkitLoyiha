import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui/";
import { useNavigate } from "react-router-dom";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";
import ArticleServise from "../service/article";

export default function Main() {
  const { articles, isLoading } = useSelector((state) => state.article);
  const { loggetIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleServise.getArticles();
      dispatch(getArticlesSuccess(response.articles));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, []);

  const deliteHandler = async (slug) => {
    try {
      await ArticleServise.deleteArticle(slug);
    getArticles();

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="album py-5 ">
      <div className="container">
        {isLoading && <Loader />}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((item) => (
            <div className="col" key={item.slug}>
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    {item.title.toString().slice(0, 10)}
                  </text>
                </svg>

                <div className="card-body">
                  <p className="card-text fw-bold">{item.title}</p>
                  <p className="card-text ">
                    {item.description.toString().slice(0, 120) + "..."}
                  </p>
                  <div className="card-footer m-0 p-0 d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/article/${item.slug}`)}
                      >
                        View
                      </button>
                      {loggetIn && user.username === item.author.username && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={()=>navigate(`edit-article/${item.slug}`)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deliteHandler(item.slug)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                    <small className="text-muted">{item.author.username}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
