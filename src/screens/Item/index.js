import React from "react";
import styles from "./Item.module.sass";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DifferenceIcon from "@mui/icons-material/Difference";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SellIcon from "@mui/icons-material/Sell";
import GroupIcon from "@mui/icons-material/Group";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SpeedIcon from "@mui/icons-material/Speed";
import Layout from "../../component/Layout";
export default function Item({ price }) {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.back}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "25px",
            }}
          >
            <ArrowBackIosIcon
              sx={{
                color: "#7e7e7e",
                fontSize: "15px",
              }}
            />
            <Typography element="p" component="p" onClick={() => navigate(-1)}>
              Back
            </Typography>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src="./images/ship1.png" alt="" />
            </div>
            <div className={styles.imageBottom}>
              <div>
                <Typography element="p" component="p">
                  Current Price
                </Typography>
                <div className={styles.priceIcon}>
                  <MonetizationOnIcon className={styles.coin} />{" "}
                  <Typography
                    variant="p"
                    component="p"
                    className={styles.price}
                  >
                    {price} MTZ
                  </Typography>
                </div>
              </div>
              <div className={styles.buyNow}>
                <Typography element="p" component="p">
                  199/200
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    fontSize: "12px",
                    width: { lg: "150px", md: "100px" },
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <div className={styles.top}>
                <h1>RARE PLOT ISLAND</h1>
              </div>
              <div className={styles.middle1}>
                <div>
                  <p>Token ID</p>
                  <p>6182...0113</p>
                  <DifferenceIcon
                    sx={{
                      color: "#dfdfdf",
                      fontSize: "18px",
                    }}
                  />
                </div>
                <div>
                  <p>
                    <ContentCopyIcon
                      sx={{
                        color: "#26875f",
                        fontSize: "15px",
                        marginRight: "0.2rem",
                      }}
                    />
                    200 minted
                  </p>
                  <p>
                    <SellIcon
                      sx={{
                        color: "#26875f",
                        fontSize: "15px",
                        marginRight: "0.2rem",
                      }}
                    />
                    199 of 200 for sale
                  </p>
                  <p>
                    <GroupIcon
                      sx={{
                        color: "#26875f",
                        fontSize: "15px",
                        marginRight: "0.2rem",
                      }}
                    />
                    2 owner
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.middle2}>
              <h3>About</h3>
              <div>
                <p>
                  asd~çasflkasdfkasfjçaskdfjasd asçdflksadfks çsadlfksadkfj
                  açdlkfajdsçkflj asdçfkasdkfjasçjfk adsçlfkasjdfçlkasjd
                  açsdkfaskdfjçajsd adsjfçaskdfjlsakjf açsdlkfasjdkfj
                  çasdflkjsadfk asdjaskfdj asçdlfkajsdf açsdlkfajs.
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <h3>Attributes</h3>
              <div className={styles.bottomBox}>
                <div>
                  <p className={styles.heading}>Rarity</p>
                  <p className={styles.yellow}>RARE</p>
                </div>
                <div>
                  <p className={styles.heading}>Recovery</p>
                  <p>
                    <ElectricBoltIcon
                      sx={{
                        color: "#adbf2a",
                      }}
                    />
                    14
                  </p>
                </div>
                <div>
                  <p className={styles.heading}>Speed</p>
                  <p>
                    <SpeedIcon
                      sx={{
                        color: "#0667a8",
                      }}
                    />
                    10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
