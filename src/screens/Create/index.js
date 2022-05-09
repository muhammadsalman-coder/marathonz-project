import { Typography, Box } from "@mui/material";
import React from "react";
import Layout from "../../component/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Create = () => {
  return (
    <Layout>
      <Box>
        <Box sx={{ width: "100%" }}>
          <LazyLoadImage
            effect="blur"
            src="images/banner.png"
            alt="img"
            width="100%"
          />
          {/* <img src="images/banner.png" alt="img" width="100%" /> */}
        </Box>
        <Box sx={{ my: 3, textAlign: "center", color: "#fff" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", my: 2 }}
            componenet="h3"
          >
            Building games for the Metaverse
          </Typography>
          <Typography variant="subtitle1" component="p">
            Anyone can build 3D games fro free. No coding <br /> required.
            Contribute to a vast metaverse, filled with
            <br /> amazing creations and experiences.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Create;
