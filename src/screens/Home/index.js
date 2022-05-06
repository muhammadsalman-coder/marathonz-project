import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../component/Layout";
import { test } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, []);
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <Layout>
        <Typography variant="h1">I am from Home</Typography>
      </Layout>
    </>
  );
};

export default Home;
