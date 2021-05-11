// 길찾기
/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header.js";
import Bottom from "../components/Bottom.js"
import Side from "../components/Side.js";

const MapContainer = styled.div`
  position: relative;
  width: 1080px;
  height: 1920px;
`;

function Map() {
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
          center: new kakao.maps.LatLng(37.483459711221386, 126.8130955827308), //경기도 부천시 괴안동
          level: 1, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성
       

        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
          {
            title: "로데오거리1-1",
            latlng: new kakao.maps.LatLng(37.5395131, 127.0700084),
          },
          {
            title: "로데오거리1-16",
            latlng: new kakao.maps.LatLng(37.5408526, 127.0662875),
          },
          {
            title: "중곡제방길1",
            latlng: new kakao.maps.LatLng(37.5716952, 127.0795179),
          },
          {
            title: "중곡제방길2",
            latlng: new kakao.maps.LatLng(37.5715306, 127.0794905),
          },
          {
            title: "중곡제방길3",
            latlng: new kakao.maps.LatLng(5713389, 127.0794548),
          },
          {
            title: "중곡제방길4",
            latlng: new kakao.maps.LatLng(37.5711675, 127.0794161),
          },
          {
            title: "중곡제방길5",
            latlng: new kakao.maps.LatLng(37.5710164, 127.0793773),
          },
          {
            title: "중곡제방길6",
            latlng: new kakao.maps.LatLng(37.5708385, 127.079418),
          },
          {
            title: "중곡제방길6",
            latlng: new kakao.maps.LatLng(37.5709081, 127.0793497),
          },
          {
            title: "중곡제방길7",
            latlng: new kakao.maps.LatLng(37.5707705, 127.0793165),
          },
          {
            title: "중곡제방길8",
            latlng: new kakao.maps.LatLng(37.5706306, 127.0792635),
          },
          {
            title: "중곡제방길9",
            latlng: new kakao.maps.LatLng(37.5704254, 127.0792136),
          },
          {
            title: "중곡제방길10",
            latlng: new kakao.maps.LatLng(37.5702178, 127.0791525),
          },
          {
            title: "중곡제방길11",
            latlng: new kakao.maps.LatLng(37.5700532, 127.0790855),
          },
          {
            title: "중곡제방길11-1",
            latlng: new kakao.maps.LatLng(37.5697761, 127.0791182),
          },
          {
            title: "중곡제방길12",
            latlng: new kakao.maps.LatLng(37.5698095, 127.0789934),
          },
          {
            title: "중곡제방길13",
            latlng: new kakao.maps.LatLng(37.5696492, 127.0789349),
          },
          {
            title: "중곡제방길14",
            latlng: new kakao.maps.LatLng(37.5695116, 127.0788734),
          },
          {
            title: "중곡제방길15",
            latlng: new kakao.maps.LatLng(37.5693761, 127.0788005),
          },
          {
            title: "중곡제방길16",
            latlng: new kakao.maps.LatLng(37.5692655, 127.0787503),
          },
          {
            title: "중곡제방길17",
            latlng: new kakao.maps.LatLng(37.5691279, 127.0786916),
          },
          {
            title: "중곡제방길18",
            latlng: new kakao.maps.LatLng(37.5689068, 127.0785683),
          },
          {
            title: "중곡제방길19",
            latlng: new kakao.maps.LatLng(37.5686831, 127.0784422),
          },
          {
            title: "중곡제방길20",
            latlng: new kakao.maps.LatLng(37.5685228, 127.0783468),
          },

          //강변역로
          {
            title: "강변역로1-1",
            latlng: new kakao.maps.LatLng(37.5364994, 127.0934021),
          },
          {
            title: "강변역로1-2",
            latlng: new kakao.maps.LatLng(37.5362181, 127.0935338),
          },
          {
            title: "강변역로1-3",
            latlng: new kakao.maps.LatLng(37.5359864, 127.0936398),
          },
          {
            title: "강변역로1-4",
            latlng: new kakao.maps.LatLng(37.5358111, 127.0937539),
          },
          {
            title: "강변역로1-5",
            latlng: new kakao.maps.LatLng(37.5356465, 127.093789),
          },
          {
            title: "강변역로1-6",
            latlng: new kakao.maps.LatLng(37.5355764, 127.0937084),
          },
          {
            title: "강변역로1-7",
            latlng: new kakao.maps.LatLng(37.5354437, 127.0935507),
          },
          {
            title: "강변역로1-8",
            latlng: new kakao.maps.LatLng(37.5353143, 127.0933897),
          },
          {
            title: "강변역로1-9",
            latlng: new kakao.maps.LatLng(37.5351455, 127.0932008),
          },
          {
            title: "강변역로1-10",
            latlng: new kakao.maps.LatLng(37.5350344, 127.0930705),
          },
          {
            title: "강변역로1-11",
            latlng: new kakao.maps.LatLng(37.5349291, 127.0929448),
          },
          {
            title: "강변역로1-12",
            latlng: new kakao.maps.LatLng(37.5347639, 127.0927563),
          },
          {
            title: "강변역로1-13",
            latlng: new kakao.maps.LatLng(37.5346395, 127.0926028),
          },
          {
            title: "강변역로1-14",
            latlng: new kakao.maps.LatLng(37.5346292, 127.0923903),
          },
          {
            title: "강변역로1-15",
            latlng: new kakao.maps.LatLng(37.5346501, 127.0921839),
          },
          {
            title: "강변역로1-16",
            latlng: new kakao.maps.LatLng(37.5346861, 127.0919434),
          },
          {
            title: "강변역로1-17",
            latlng: new kakao.maps.LatLng(37.5354965, 127.0940414),
          },
          {
            title: "강변역로1-19",
            latlng: new kakao.maps.LatLng(37.5353196, 127.093943),
          },
          {
            title: "강변역로1-20",
            latlng: new kakao.maps.LatLng(37.5353016, 127.0940603),
          },
          {
            title: "강변역로1-21",
            latlng: new kakao.maps.LatLng(37.5351159, 127.0941825),
          },
          {
            title: "강변역로1-22",
            latlng: new kakao.maps.LatLng(37.5350063, 127.0942681),
          },
          {
            title: "강변역로1-23",
            latlng: new kakao.maps.LatLng(37.534882, 127.0943677),
          },
          {
            title: "강변역로1-24",
            latlng: new kakao.maps.LatLng(37.5346983, 127.0945147),
          },
          {
            title: "강변역로1-24",
            latlng: new kakao.maps.LatLng(37.534659, 127.0949005),
          },
        ];
        function zoomIn() {
          map.setLevel(map.getLevel() - 1);
      }
      function zoomOut() {
          map.setLevel(map.getLevel() + 1);
      }
        // 지도에 교통정보를 표시하도록 지도타입을 추가
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        let imageSrc = "img/marker.png";

        for (var i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기
          var imageSize = new kakao.maps.Size(35, 35);

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
      <Header />
      <Side />
      <Bottom />
      <MapContainer id="map" />
      
      
    </>
  );
}

export default Map;
