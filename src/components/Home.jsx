import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <h1>Worg</h1>
    </>
  );
};

export default Home;
