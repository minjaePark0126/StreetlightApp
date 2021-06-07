//장소 검색 화면//Rs큰상자//Rss작은상자
import { Link } from "react-router-dom";

function Find() {
  return (
    <div className="Find">
      <Link to={"/Map"}>
        <img id="back" src="/img/leftarrow.png" alt="뒤로가기" />
      </Link>
      <center>
        <input className="Spacefind" type="text" placeholder="장소 검색" />

        <div className="Rs">
          <img id="bean" src={"/img/bean.png"} alt="콩" />
        </div>
        <div className="Rsss">최근 검색</div>
        <div className="Rss"></div>
      </center>
    </div>
  );
}

export default Find;
