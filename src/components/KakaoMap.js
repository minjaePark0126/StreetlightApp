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

        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function(position) {
      
      var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
      
      var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다
      
      // 마커와 인포윈도우를 표시합니다
      //displayMarker(locPosition, message);
          
    });
  
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  
  var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
      message = 'geolocation을 사용할수 없어요..'
      
  displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({  
      map: map, 
      position: locPosition
  }); 
  
  var iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
  });
  
  // 인포윈도우를 마커위에 표시합니다 
  infowindow.open(map, marker);
  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);      

      
}    
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
kakao.maps.event.addListener(map, 'zoom_changed', function() {        
    
    // 지도의 현재 레벨을 얻어옵니다
    var level = map.getLevel();
    });

    
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
         
          map.setLevel(map.getLevel()- 1);
        }
        function zoomOut() {
          
          map.setLevel(map.getLevel()+ 1);
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
          <div class="me">
          <span onclick="displayMarker(locPosition, message)">  
          <img id="me" src={"/img/me.png"} />
          </span>
          </div>
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
