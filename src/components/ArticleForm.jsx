import React from 'react'
import { useSelector } from 'react-redux'

export default function ArticleForm({article,changHandler,formSubmit}) {
    const {isLoading} = useSelector(state=>state.article)
  return (
    <form onSubmit={e=>formSubmit(e)}>
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
           {isLoading?"Loading...": "Create"}
          </button>
        </div>
      </form>
  )
}
