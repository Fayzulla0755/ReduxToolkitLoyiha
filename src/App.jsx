import { Route, RouterProvider,  createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components";


function App() {
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Navbar/>}>
        <Route index element={<Main/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>

      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
