// 즐겨찾기 경로
import { Link } from "react-router-dom";

function Starts() {
  const style1 = {
    //즐겨찾기 목록
    fontSize: "100px",
    float: "left",
    marginTop: "130px",
    marginLeft: "70px",
    borderColor: "red",
    borderwidth: 3,
  };
  const style2 = {
    //구분선
    width: "90%",
    height: "1",
    backgroundColor: "black",
    marginTop: "50px",
    textAlign: "center",
    marginLeft: "70px",
  };
  const style3 = {
    //위치첫번쨰줄
    fontSize: "70px",
    float: "left",
    marginLeft: "70px",
    marginTop: "130px",
  };
  const style4 = {
    //위치두번쨰줄
    fontSize: "70px",
    float: "left",
    marginLeft: "130px",
    marginTop: "20px",
  };
  const imgfile = {
    //arrow사진
    width: "120px",
    height: "120px",
    marginTop: "130px",
    marginLeft: "200px",
    backgroundColor: "#5C6BC0",
  };
  const imgfile2 = {
    //x사진
    width: "120px",
    height: "120px",
    marginTop: "5px",
    marginLeft: "200px",
    backgroundColor: "#5C6BC0",
  };
  const imgfile3 = {
    //home사진
    width: "120px",
    height: "120px",
    marginTop: "130px",
    marginLeft: "100px",
    backgroundColor: "lightgray",
  };
  return (
    <div className="Starts">
      <div style={style1}>즐겨찾기 경로</div>
      <Link to={"/Map"}>
        <img src={"img/home.png"} style={imgfile3} />
      </Link>
      <div style={style2}>-</div>

      <div style={style3}>● 서울머시기</div>
      <div style={style4}>→경기도 머시기</div>
      <img src={"img/arrow.png"} style={imgfile} />
      <img src={"img/x.png"} style={imgfile2} />
      <div style={style3}>● 경기도 머시기</div>
      <div style={style4}>→충청도 머시기</div>
      <img src={"img/arrow.png"} style={imgfile} />
      <img src={"img/x.png"} style={imgfile2} />
      <div style={style3}>● 서울머시기</div>
      <div style={style4}>→경기도 머시기</div>
      <img src={"img/arrow.png"} style={imgfile} />
      <img src={"img/x.png"} style={imgfile2} />
    </div>
  );
}

export default Starts;
