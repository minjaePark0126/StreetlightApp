//최단거리로드
/*global kakao*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import JsonData from "./bucheonLight.json";

const MapContainer = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
`;

const Loading = styled.img`
  position: absolute;
  top: 960px;
  left: 540px;
  transform: translateX(-50%) translateY(-50%);
  width: 700px;
  z-index: 10;
`;

const Side = styled.div`
  position: absolute;
  top: 0px;
  left: 80px;
  width: 80px;
  z-index: 10;
`;

const Bottom = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 80px;
  z-index: 10;
  #me {
    position: absolute;
    height: 80px;
    width: 80px;
    margin-top: 1800px;
    background-color: #ffffff;
  }
  #star {
    position: absolute;
    height: 80px;
    width: 80px;
    margin-top: 1700px;
    background-color: #ffffff;
  }
`;

function KakaoMap() {
  // 로딩중
  const [isLoaded, setIsLoaded] = useState(false);
  // 가로등 목록
  const [lights, setLights] = useState(JsonData);

  useEffect(() => {
    //지도 코드
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "http://dapi.kakao.com/v2/maps/sdk.js?appkey=a9cb6f1eaea0879aee7e0eaff3eb864b&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map"); // 지도를 표시할 div
        let options = {
          center: new kakao.maps.LatLng(37.48353937, 126.8131899), //경기도 부천시 역곡3동 126-7
          level: 1, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성

        // 마커 표시
        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [];
        positions = lights.map((item) => ({
          title: `${item.address}`,
          latlng: new kakao.maps.LatLng(item.latitude, item.longitude),
        }));
        console.log(positions);

        // 확대 축소
        function zoomIn() {
          map.setLevel(map.getLevel() - 1);
        }
        function zoomOut() {
          map.setLevel(map.getLevel() + 1);
        }

        let imageSrc = "img/yellowmarker.png";

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기
          var imageSize = new kakao.maps.Size(80, 80);

          // 마커 이미지를 생성
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
      });
    };
  }, [lights]);

  return (
    <>
      {isLoaded ? <Loading src={"/img/loading.png"} /> : ""}
      <Side>
        <center>
          <div class="zoomcontrol">
            <span onclick="zoomIn()">
              <img src="img/plus.png" alt="확대" />
            </span>
            <span onclick="zoomOut()">
              <img src="img/minus.png" alt="축소" />
            </span>
          </div>
        </center>
      </Side>
      <Bottom>
        <center>
          <img id="me" src={"/img/me.png"} />
          <Link to={"/Starts"}>
            <img id="star" src="/img/star.png" />
          </Link>
        </center>
      </Bottom>
      <MapContainer id="map" />
    </>
  );
}

export default KakaoMap;
