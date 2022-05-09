import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { test } from "../../redux/action";
import styles from "./Home.module.sass";
import Dropdown from "../../component/Dropdown";
import ProductCard from "../../component/ProductCard";
import { Typography } from "@mui/material";
import Layout from "../../component/Layout";
const Home = () => {
  const data = [
    {
      title: "Common plot Island",
      image: "./images/ship1.png",
      price: 250,
      quantity: "450/2000",
    },
    {
      title: "Rare plot Island",
      image: "./images/ship2.png",
      price: 700,
      quantity: "260/1500",
    },
    {
      title: "Mythical plot Island",
      image: "./images/ship3.png",
      price: 1500,
      quantity: "120/1000",
    },
    {
      title: "Mythical plot Island",
      image: "./images/ship4.png",
      price: 2500,
      quantity: "20/500",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, [dispatch]);
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.textSection}>
          <div className={styles.head}></div>
          <Typography variant="h4" component="h1">
            Welcome to Marathonz Marketplace
          </Typography>
          <Typography variant="p" component="p">
            Here you can find new characters, lands, special items and much more
          </Typography>
        </div>
        <div className={styles.sort}>
          <p>Sort by</p>
          <Dropdown />
        </div>
        <div className={styles.nftCardSection}>
          <Typography variant="h5" component="h3">
            NFTs for Sale
          </Typography>
          <p>1251 results</p>
          <div className={styles.cardContainer}>
            {data.map((v) => {
              return (
                <ProductCard
                  image={v.image}
                  linking={"/item"}
                  title={v.title}
                  price={v.price}
                  quantity={v.quantity}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
