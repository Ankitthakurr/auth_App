import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  
 useEffect(()=>{
  !user && navigate('/login')
 },[user])

  return (
    <>
      <h1 className="display-1 text-center">Home Page</h1>
    </>
  );
};

export default Home;
