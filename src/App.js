import React, { lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderSync from "./component/LoaderSync";
import "react-lazy-load-image-component/src/effects/blur.css";
import Item from "./screens/Item";
import Map from "./screens/Map";

// import PrivateRoute from "./PrivateRoute";

// import "./styles.sass";

const Home = lazy(() => import("./screens/Home"));
const Land = lazy(() => import("./screens/Market/NftType/Land"));
const All = lazy(() => import("./screens/Market/NftType/All"));
const Create = lazy(() => import("./screens/Create"));
const MysteryBox = lazy(() => import("./screens/MysteryBox"));
const Equipments = lazy(() => import("./screens/Equipments"));

const loadingStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#1b2026",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function App() {
  return (
    <>
      <Suspense fallback={<LoaderSync loadingStyle={loadingStyle} />}>
        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/"
              element={
                <PrivateRoute user={true} redirectPath="/signin">
                  <Home />
                </PrivateRoute>
              }
            /> */}
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/land" element={<Land />} />
            <Route path="/all" element={<All />} />
            <Route path="/mysterybox" element={<MysteryBox />} />
            <Route path="/equipment" element={<Equipments />} />
            <Route path="/item" element={<Item />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
