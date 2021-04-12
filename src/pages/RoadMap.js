// (메뉴)길찾기 - (버튼)길찾기
import Map from "./Map.js";
import styled from "styled-components";

const Time = styled.div`
  img {
    position: absolute;
    top: 1130px;
    left: 750px;
    z-index: 10;
    width: 300px;
  }
`;

function RoadMap() {
  return (
    <>
      <Time>
        <img src={"img/time.png"}></img>
      </Time>
      <Map />
    </>
  );
}

export default RoadMap;
