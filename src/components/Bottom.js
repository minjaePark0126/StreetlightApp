import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div className="Bottom">
      <center>
        <img id="me" src={"/img/me.png"} />
        <Link to={"/Starts"}>
        <img id="star" src="/img/star.png" />
        </Link>
      </center>
      </div>
  );
}

export default Bottom;
