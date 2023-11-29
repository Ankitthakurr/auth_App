import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { user, isSucces, message, isError, isLoading } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setFormData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (user && isSucces) {
      localStorage.setItem("user", JSON.stringify(user));
      Navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isSucces, message, isError]);

  return (
    <>
      <h1 className="display-4 text-center">Login Page</h1>
      <form onSubmit={save} className="my-5">
        <input
          placeholder="email"
          type="email"
          className="form-control my-2 rounded-0"
          value={email}
          // onChange={(e)=> setFormData({email : e.target.value , password})}
          onChange={onChange}
          required
        />
        <input
          placeholder="password"
          type="password"
          className="form-control my-2 rounded-0"
          value={password}
          onChange={onChange}
          required
          // onChange={(e)=> setFormData({email , password: e.target.value})}
        />
        <button className="w-100 btn btn-success rounded-0" type="Submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
