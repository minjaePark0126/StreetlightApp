// 스플래시 화면(일단 메인화면)
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Link to={"/Menu"}>
        <div className="blue-nav">
          안심
          <br />
          <div className="find">
            길찾기
            <br />
          </div>
          <img id="mapimg" src={"/img/map.png"} alt="지도" />
          <img id="roading" src={"/img/roading.png"} />
        </div>
      </Link>
    </div>
  );
}

export default Main;
