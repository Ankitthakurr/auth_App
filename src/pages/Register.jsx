import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const {user,isSucces,message,isError,isLoading} = useSelector(state=> state.auth)

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password Not Match");
    } else {
      dispatch(register(formData));
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    }
  };
useEffect(()=>{
  if(user && isSucces){
    localStorage.setItem('user',JSON.stringify(user))
     navigate('/')
  }
  if(isError && message){
    toast.error(message)
  }
},[user,isSucces,message,isError])
  return (
    <>
      <h1 className="display-4 text-center">Register Page</h1>
      <form className="my-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control rounded-0 my-2"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control rounded-0 my-2"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control rounded-0 my-2"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control rounded-0 my-2"
          name="password2"
          value={password2}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success rounded-0 w-100">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
