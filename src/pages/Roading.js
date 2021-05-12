//로드중 화면 (로드 선택 후 안내화면)
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

function Roading() {
  return (
    
    <>
      <div className="Roading">최단거리 로드중</div>
      <div className="ETA">도착예정시간:17:08</div>
      <Bottom />
      <Side />
      <KakaoMap />
    </>
  );
}

export default Roading;

