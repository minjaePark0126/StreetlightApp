//출발지 검색창
import { Link } from "react-router-dom";

function Startgg() {
  return (
    <div className="Startgg">
      <center>
        <Link to={"/Twogg"}>
          <button className="Startfind">출발지 입력</button>
        </Link>
        <div className="Rs">
          <img id="bean" src={"/img/bean.png"} alt="" />
        </div>
        <div className="Rsss">최근 검색</div>
        <div className="Rss"></div>
      </center>
    </div>
  );
}

export default Startgg;
