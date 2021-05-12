// (버튼)길찾기-(버튼)도착지 입력 옆에 화살표 눌렀을 때 화면
import KakaoMap from "../components/KakaoMap.js";
import styled from "styled-components";
import Side from "../components/Side.js";
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
      <div className="Road">최단거리로드<br/>17분<hr></hr>보안등로드<br/>21분</div>
      <Bottom />
      <Side />
      <KakaoMap />
    </>
  );
}

export default RoadMap;
