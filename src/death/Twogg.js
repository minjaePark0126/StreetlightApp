//출발지 도착지 다 있는 검색창
import { Link } from "react-router-dom";

function Twogg() {
  return (
    <>
      <img id="btnChange" src={"/img/btnChange.png"} alt="바꾸기" />
      <center>
        <Link to={"/Startgg"}>
          <button className="Departure">출발지 입력</button>
        </Link>
        <Link to={"/Map"}>
          <img id="DepExit" src={"/img/exit.png"} alt="나가기" />
        </Link>
        <br></br>
        <Link to={"/Arrivegg"}>
          <button className="Arrival">도착지 입력</button>
        </Link>
      </center>
      <Link to={"/RoadMap"}>
        <img id="btnFind" src={"/img/rightarrow.png"} alt="찾기" />
      </Link>
      <div className="Rs2">
        <img id="bean" src={"/img/bean.png"} alt="콩_최근경로" />
      </div>
      <div className="Rsss2">최근 경로</div>
      <div className="Rss2"></div>
    </>
  );
}

export default Twogg;
