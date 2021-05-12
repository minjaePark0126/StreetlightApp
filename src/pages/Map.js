import React, { useEffect } from "react";
import Header from "../components/Header.js";
import Bottom from "../components/Bottom.js";
import Side from "../components/Side.js";
import KakaoMap from "../components/KakaoMap.js";

function Map() {
  return (
    <>
      <Header />
      <Side />
      <Bottom />
      <KakaoMap />
    </>
  );
}

export default Map;
