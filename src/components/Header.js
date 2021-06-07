import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 1080px;
  z-index: 10;
`;

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

function Header() {
  return (
    <HeaderContainer>
      <center>
        <Link to={"/Find"}>
          <LocationSearch>장소 검색</LocationSearch>
        </Link>
        <Link to={"/Twogg"}>
          <StreetFind>길찾기</StreetFind>
        </Link>
      </center>
    </HeaderContainer>
  );
}

export default Header;
