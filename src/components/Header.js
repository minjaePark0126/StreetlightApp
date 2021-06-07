import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  width: 1080px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding: 40px;
    width: 100%;
    height: 90px;
    background: #157aff;
    color: white;
    font-size: 80px;
  }
`;

const MapImg = styled.img`
  position: absolute;
  left: 920px;
  top: 15px;
  width: 120px;
  z-index: 10;
`;

const Back = styled.img`
  position: absolute;
  left: 35px;
  top: 40px;
  width: 80px;
  z-index: 10;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        {/* <LocationSearch>장소 검색</LocationSearch>
      <StreetFind>길찾기</StreetFind> */}
        <div>안심 지도</div>
      </HeaderContainer>
      <Link to="/">
        <Back src={"img/backarrow.png"} alt="뒤로가기" />
      </Link>
      <MapImg src={"/img/map.png"} alt="지도" />
    </>
  );
}

export default Header;

/*
const LocationSearch = styled.button`
  position: absolute;
  border: solid 8px black;
  border-color: black;
  width: 780px;
  height: 120px;
  background-color: white;
  display: block;
  color: black;
  font-size: 50px;
  text-align: left;
  margin-top: 20px;
  margin-right: 100px;
`;

const StreetFind = styled.button`
  position: absolute;
  border: solid 8px black;
  border-color: black;
  height: 120px;
  width: 120px;
  background-color: #7e95ef;
  display: block;
  color: rgb(255, 255, 255);
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-left: 850px;
  cursor: pointer;
`;
*/
