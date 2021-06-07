// 스플래시 화면(일단 메인화면)
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlueNav = styled.div`
  position: absolute;
  background-color: #157aff;
  width: 100%;
  height: 1720px;
  border: 1px solid black;
  padding-top: 200px;
  margin: 0 auto;
  color: white;
  font-size: 270px;
  text-align: center;
`;

const Find = styled.div`
  font-size: 210px;
`;

const MapImg = styled.img`
  position: absolute;
  height: 500px;
  width: 500px;
  top: 900px;
  left: 300px;
`;

const LoadingImg = styled.img`
  position: absolute;
  height: 200px;
  bottom: 150px;
  left: 440px;
`;

function Main() {
  return (
    <>
      <Link to={"/Map"}>
        <BlueNav>
          안심
          <Find>길찾기</Find>
          <MapImg src={"/img/map.png"} alt="지도" />
          <LoadingImg src={"/img/loading.png"} alt="로딩이미지" />
        </BlueNav>
      </Link>
    </>
  );
}

export default Main;
