import { Link } from "react-router-dom";

function Menu() {
  const style1 = {
    fontSize: "225px",
    color: "#7E95EF",
    marginTop: "150px",
    fontWeight: "200px",
  };
  const style2 = {
    fontSize: "175px",
    color: "#7E95EF",
    fontWeight: "200px",
  };
  const style3 = {
    background: "lightblue",
    borderRadius: "25px",
    TextAlign: "center",
    fontSize: "45px",
    color: "white",
    display: "block",
    marginTop: "100px",
    width: "850px",
    height: "180px",
    fontSize: "120px",
  };
  const style4 = {
    position: "relative",
    top: "55px",
    background: "gray",
    /*border: 'solid 2px black',*/
    width: "1080px",
    height: "180px",
    TextAlign: "center",
    fontSize: "100px",
  };
  return (
    <div className="Menu">
      <div style={style1}>안심</div>
      <div style={style2}>길찾기</div>
      <center>
        <Link to={"/Map"}>
          <p style={style3}>길찾기</p>
        </Link>
        <Link to={"/Last"}>
          <p style={style3}>지난 경로</p>
        </Link>
        <Link to={"/Starts"}>
          <p style={style3}>즐겨찾기경로</p>
        </Link>
        <p style={style4}>광고</p>
      </center>
    </div>
  );
}

export default Menu;
