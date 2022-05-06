import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderSync from "./component/LoaderSync";
import PrivateRoute from "./PrivateRoute";
import Create from "./screens/Create";
import All from "./screens/Market/NftType/All";
import Land from "./screens/Market/NftType/Land";

// import "./styles.sass";

const Home = lazy(() => import("./screens/Home"));
const Signin = lazy(() => import("./screens/Signin"));
function App() {
  return (
    <>
      <Suspense fallback={<LoaderSync />}>
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
            <Route path="/signin" element={<Signin />} />
            <Route path="/land" element={<Land />} />
            <Route path="/all" element={<All />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
