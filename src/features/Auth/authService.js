import axios from "axios";

let Register = async (formdata) => {
  // let responce = await axios.post("api/user/register", formdata);
  // return responce.data;
  let responce = await axios.post("api/user", formdata);
  return responce.data;
};
let Login = async (formdata) => {
  let responce = await axios.post("api/user/login", formdata);
  return responce.data;
};

let services = {
  Register,
  Login ,
};

export default services;
