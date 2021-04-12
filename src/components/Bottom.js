import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div className="Bottom">
      <img id="btnChange" src={"/img/btnChange.png"}></img>
      <center>
        <img id="me" src={"/img/me.png"} />
        <img id="star" src="/img/star.png" />
        <button className="Departure">출발지</button>
        <img id="DepExit" src={"/img/exit.png"} />
        <br></br>
        <button className="Arrival">도착지</button>
        <img id="ArrExit" src={"/img/exit.png"} />
      </center>
      <Link to={"/Roadmap"}>
        <img id="btnFind" src={"/img/btnFind.png"}></img>
      </Link>
    </div>
  );
}

export default Bottom;
