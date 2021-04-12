import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <center>
        <div className="AP">라이트웨이(light way)</div>
        <Link to={"/Menu"}>
          <img className="Home" src={"/img/home.png"} />
        </Link>
        <button className="AP1">경기도 부천시</button>
        <img className="Exit" src={"/img/exit.png"} />
        <img className="Search" src={"/img/search.png"} />
        <img className="Share" src={"/img/share.png"} />
      </center>
    </div>
  );
}

export default Header;
