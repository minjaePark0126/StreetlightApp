//출발지 도착지 다 있는 검색창
import { Link } from "react-router-dom";

function Twogg() {
  return (
    <div className="Twogg">
      <img id="btnChange" src={"/img/btnChange.png"}></img>
      <center>
        <Link to={"/Startgg"}>
          <button className="Departure">출발지 입력</button>
        </Link>
        <Link to={"/Map"}>
          <img id="DepExit" src={"/img/exit.png"} />
        </Link>
        <br></br>
        <Link to={"/Arrivegg"}>
          <button className="Arrival">도착지 입력</button>
        </Link>
      </center>
      <Link to={"/RoadMap"}>
        {/* 원래는 /Tworoad 였음. 임시로 RoadMap 넣어둠 */}
        <img id="btnFind" src={"/img/rightarrow.png"}></img>
      </Link>
      <div className="Rs2">
        <img id="bean" src={"/img/bean.png"}></img>
      </div>
      <div className="Rsss2">최근 경로</div>
      <div className="Rss2"></div>
    </div>
  );
}

export default Twogg;
