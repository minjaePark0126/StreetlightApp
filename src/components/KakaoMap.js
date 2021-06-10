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

const ZoomControl = styled.div`
  position: absolute;
  top: 950px;
  width: 100px;
  height: 200px;
  z-index: 1;
  background-color: #fff;
  left: 860px;
  div {
    display: block;
    height: 100px;
    text-align: center;
    cursor: pointer;
  }
  img {
    width: 60px;
    height: 60px;
    padding: 25px 0;
    border: none;
  }
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
  const [isLoaded] = useState(false);
  // 가로등 목록
  const [lights] = useState(JsonData);
  // 지도 정보
  const [_map, setMap] = useState();

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

        let imageSrc = "img/yellowmarker.png";

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기
          var imageSize = new kakao.maps.Size(60);

          // 마커 이미지를 생성
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성
          new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
        // useEffect 밖으로 map 정보를 가져오기 위해 useState로 함수를 만듦
        setMap(map);
      });
    };
  }, [lights]);

  // 확대 축소
  // useState로 map정보를 가져와서 지도 줌인아웃 기능을 추가함
  const zoomIn = () => {
    _map.setLevel(_map.getLevel() - 1);
  };
  const zoomOut = () => {
    _map.setLevel(_map.getLevel() + 1);
  };

  return (
    <>
      {isLoaded ? <Loading src={"/img/loading.png"} /> : ""}
      <Side>
        <center>
          <ZoomControl>
            <div onClick={zoomIn}>
              <img src="img/plus.png" alt="확대" />
            </div>
            <div onClick={zoomOut}>
              <img src="img/minus.png" alt="축소" />
            </div>
          </ZoomControl>
        </center>
      </Side>
      <Bottom>
        <center>
          <Link to={"/Starts"}>
            <img id="star" src="/img/star.png" alt="즐겨찾기" />
          </Link>
          <div>
            <img id="me" src="/img/me.png" alt="현재위치" />
          </div>
        </center>
      </Bottom>
      <MapContainer id="map" />
    </>
  );
}

export default KakaoMap;
