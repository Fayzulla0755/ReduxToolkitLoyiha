import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Main,
  Login,
  Register,
  Navbar,
  ArticleDetail,
  CreateArticle,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess } from "./slice/auth";
import { AuthService } from "./service/auth";
import { useEffect } from "react";
import { getItem } from "./helpers/persistance-storage";
import ArticleServise from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    dispatch(signUserStart());
    try {
      const response = await AuthService.getUser();

      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

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
    const token = getItem("token");
    if (token) {
      getUser();
    }
    getArticles();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="article/:id" element={<ArticleDetail />} />
        <Route path="create-article" element={<CreateArticle />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
