//장소 검색 화면//Rs큰상자//Rss작은상자
import { Link } from "react-router-dom";

function Find() {
  return (
    <div className="Find">
        <Link to={"/Map"}>
      <img id="back" src="/img/leftarrow.png" />
      </Link>
      <center>
      <button className="Spacefind">장소 검색</button>
      
      <div className="Rs">
        <img id="bean" src={"/img/bean.png"}></img>
        
      </div>
      <div className="Rsss">
        최근 검색
        </div>
      <div className="Rss">
      </div>
      
      
      </center>

    </div>
  );
}

export default Find;