//도착지 검색창
import { Link } from "react-router-dom";

function Arrivegg() {
  return (
    <div className="Arrivegg">
      <center>
        <Link to={"/Twogg"}>
          <button className="Arrivefind">도착지 입력</button>
        </Link>

        <div className="Rs">
          <img id="bean" src={"/img/bean.png"}></img>
        </div>
        <div className="Rsss">최근 검색</div>
        <div className="Rss"></div>
      </center>
    </div>
  );
}

export default Arrivegg;
