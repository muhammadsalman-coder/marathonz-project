import React from "react";

import styles from "./MysteryBox.module.sass";
import Dropdown from "../../component/Dropdown";
import ProductCard from "../../component/ProductCard";
import Layout from "../../component/Layout";
const MysteryBox = () => {
  const data = [
    {
      title: "Mystery Box",
      image: "./images/mystery.png",
      price: 15,
      // quantity: "450/2000",
    },
    {
      title: "5x Mystery Box",
      image: "./images/mystery.png",
      price: 75,
      // quantity: "260/1500",
    },
    {
      title: "10x Mystery Box",
      image: "./images/mystery.png",
      price: 150,
      // quantity: "120/1000",
    },
    {
      title: "25x Mystery Box",
      image: "./images/mystery.png",
      price: 375,
      // quantity: "20/500",
    },
  ];

  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.textSection}>
          <div className={styles.head}></div>
          <h1>Welcome to Marathonz Marketplace</h1>
          <p>
            Here you can find new characters, lands, special items and much more
          </p>
        </div>
        <div className={styles.sort}>
          <p>Sort by</p>
          <Dropdown />
        </div>
        <div className={styles.nftCardSection}>
          <h3>NFTs for Sale</h3>
          <p>1251 results</p>
          <div className={styles.cardContainer}>
            {data.map((v) => {
              return (
                <ProductCard
                  image={v.image}
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

export default MysteryBox;
