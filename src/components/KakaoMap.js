//최단거리로드
/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
`;

function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "http://dapi.kakao.com/v2/maps/sdk.js?appkey=a9cb6f1eaea0879aee7e0eaff3eb864b&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map"); // 지도를 표시할 div
        let options = {
          center: new kakao.maps.LatLng(37.47851974, 126.8114161), //경기도 부천시 역곡3동 100-12
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);// 지도 생성

        if (navigator.geolocation) {
    
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(function(position) {
              
              var lat = position.coords.latitude, // 위도
                  lon = position.coords.longitude; // 경도
              
              var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                  message = '<div style="padding:5px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
              
              // 마커와 인포윈도우를 표시합니다
              displayMarker(locPosition, message);
                  
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

        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
          {
            title: "경기도 부천시 역곡3동 100-12",
            latlng: new kakao.maps.LatLng(37.47851974, 126.8114161),
          },
          {
            title: "경기도 부천시 역곡3동 100-15",
            latlng: new kakao.maps.LatLng(37.47880049, 126.8111893),
          },
          {
            title: "경기도 부천시 역곡3동 100-23",
            latlng: new kakao.maps.LatLng(37.4791897, 126.8111747),
          },
        ];
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
  });

  return (
    <>
      <MapContainer id="map" />
    </>
  );
}

export default KakaoMap;
