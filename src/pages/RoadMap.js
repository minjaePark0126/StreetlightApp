// (버튼)길찾기-(버튼)도착지 입력 옆에 화살표 눌렀을 때 화면
import KakaoMap from "../components/KakaoMap.js";
import styled from "styled-components";
import Bottom from "../components/Bottom.js";

const Time = styled.div`
  img {
    position: absolute;
    top: 1400px;
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
      <Bottom />
      <KakaoMap />
    </>
  );
}

export default RoadMap;
