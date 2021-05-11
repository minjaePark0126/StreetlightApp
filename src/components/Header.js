import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <center>
      <Link to={"/Twogg"}>
        <button className="AP2">길찾기</button>
        </Link>
        <Link to={"/Find"}>
        <button className="AP1">장소 검색</button>
        </Link>
      </center>
    </div>
  );
}

export default Header;
