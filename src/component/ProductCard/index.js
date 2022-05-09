import React from "react";
import styles from "./ProductCard.module.sass";
// import {  BsCoin } from "react-icons/bs";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CssBaseline, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import styled from "@emotion/styled";
// import { amber } from "@mui/material/colors";

export default function ProductCard({
  image,
  title,
  price,
  quantity,
  linking,
}) {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <div
        className={styles.container}
        onClick={() => {
          navigate(linking);
        }}
      >
        <div className={styles.image}>
          <img src={image} alt="img" />
          <Typography variant="p" component="p">
            {title}
          </Typography>
        </div>
        <div className={styles.lowerSection}>
          <Typography variant="p" component="p">
            {quantity}
          </Typography>
          <div>
            <MonetizationOnIcon className={styles.coin} />
            <Typography variant="p" component="p">
              {price} MTZ
            </Typography>
          </div>
          <div className={styles.cart}>
            <ShoppingCartIcon className={styles.cartIcon} />
          </div>
        </div>
      </div>
    </>
  );
}
