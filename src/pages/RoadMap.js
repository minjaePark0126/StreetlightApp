// (버튼)길찾기-(버튼)도착지 입력 옆에 화살표 눌렀을 때 화면
import { Link } from "react-router-dom";
import KakaoMap from "../components/KakaoMap.js";
import styled from "styled-components";

const Road = styled.div`
  position: absolute;
  width: 150px;
  height: 125px;
  font-size: 25px;
  padding: 20px;
  text-align: center;
  background-color: #7e95ef;
  color: white;
  border-radius: 10px;
  margin-left: 850px;
  margin-top: 1700px;
  z-index: 10;
`;

function RoadMap() {
  return (
    <>
      <Road>
        <Link to={"Loading"}>
          최단거리로드
          <br />
          17분
        </Link>
        <hr></hr>보안등로드
        <br />
        21분
      </Road>
      <KakaoMap />
    </>
  );
}

export default RoadMap;
