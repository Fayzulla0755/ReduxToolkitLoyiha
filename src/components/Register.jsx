import { useEffect, useState } from "react";
import logo from "../constants/img/icon.png";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import {AuthService} from '../service/auth'
import ValidationError from "./ValidationError";
import { useNavigate } from "react-router-dom";

export default function Register() {
  // Vareble's
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();
  const {isLoading,loggetIn}= useSelector(state=>state.auth)
  const navigate = useNavigate()
//Function's
  const changHandler = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const registerHandler= async (e)=>{
    e.preventDefault()
    dispatch(signUserStart())
  
    try {
      const response = await AuthService.userRefister(user)

      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch (err) {

      dispatch(signUserFailure(err.response.data.errors) )
     
    }
  }
  useEffect(()=>{
    if(loggetIn){navigate('/')}  
    
  },[loggetIn])
 
  return (
    <div className="text-center">
      <main className="form-signin m-auto w-25">
        <form className="mt-5">
          <img className="mb-4" src={logo} alt="" width="72" />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
<ValidationError/>
          <div className="form-floating mb-1">
            <input
              name="username"
              value={user.username}
              onChange={changHandler}
              type="email"
              className="form-control"
              id="floatingInput1"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-1">
            <input
              name="email"
              value={user.email}
              onChange={changHandler}
              type="email"
              className="form-control"
              id="floatingInput2"
              placeholder="nam"
            />
            <label htmlFor="floatingInput">User name</label>
          </div>
          <div className="form-floating mb-2">
            <input
              name="password"
              value={user.password}
              onChange={changHandler}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading} onClick={registerHandler}>
            {isLoading?"Loading...":"Register"}
          </button>
        </form>
      </main>
    </div>
  );
}
