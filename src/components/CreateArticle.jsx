import React, { useState } from "react";

import { Input } from "../ui";
export default function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    description: "",
  });
  const changHandler = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="container text-center ">
      <h1 className="fs-2">Create article</h1>
      <form>
        <div className="w-75 mx-auto ">
          <input
            type="text"
            className="form-control my-1 "
            name="title"
            id="floatingInput"
            placeholder="Title"
            value={article.title}
            onChange={changHandler}
          />
          
          <textarea
          rows={5}

            value={article.description}
            onChange={changHandler}
            className="form-control  my-1 "
            name="description"
            placeholder="Description"
            id="floatingTextarea"
          ></textarea>
          <textarea 
          rows={15}
            value={article.body}
            onChange={changHandler}
            className="form-control  my-1 "
            name="body"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <button className="w-100 btn btn-lg btn-primary my-1" type="submit"  >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
