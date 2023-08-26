import { Link,Outlet } from "react-router-dom";
import logo from '../constants/img/icon.png'

export default function () {
  return (
    <>
      
     
    
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Link to={'/'} className="nav-link px-2 text-secondary">
        <img width={40} src={logo} alt="logotip" />
      </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
        <Link to={"/login"}><button type="button" className="btn btn-outline-light me-2">Login</button> </Link>
        <Link to={"/register"}><button type="button" className="btn btn-warning">Register</button></Link>
          
        </div>
      </div>
    </div>
  </header>
  <div className="container">
  <Outlet/>

  </div>
  </>
  );
}