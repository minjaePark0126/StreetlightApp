//로드중 화면 (로드 선택 후 안내화면)
import KakaoMap from "../components/KakaoMap.js";
import styled from "styled-components";
import Side from "../components/Side.js";
import Bottom from "../components/Bottom.js";

const Shortest = styled.div`
  position: absolute;
  font-size: 30px;
  z-index: 10;
  float: center;
  margin-left: 400px;
  margin-top: 50px;
`;

const ETA = styled.div`
  position: absolute;
  width: 200px;
  height: 20px;
  font-size: 20px;
  border: solid 1px black;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  background-color: whitesmoke;
  margin-left: 830px;
  z-index: 10;
  top: 1850px;
`;

function Loading() {
  return (
    <>
      <Shortest>최단거리 로드중</Shortest>
      <ETA>도착예정시간:17:08</ETA>
      <Bottom />
      <Side />
      <KakaoMap />
    </>
  );
}

export default Loading;
