// 즐겨찾기 경로
import { Link } from "react-router-dom";

function Starts() {
  const style1 = {
    //즐겨찾기 목록
    position: "absolution",
    fontSize: "80px",
    backgroundColor: "#7E95EF",
    height: "90px",
    padding: "40px",
    color: "white",
  };
  const style2 = {
    //위치첫번쨰줄
    position: "absolution",
    fontSize: "70px",
    float: "left",
    marginLeft: "30px",
    marginTop: "100px",
  };
  const style3 = {
    //위치두번쨰줄
    position: "absolution",
    fontSize: "70px",
    float: "left",
    marginLeft: "60px",
    marginTop: "30px",
  };
  const imgfile = {
    //arrow사진
    position: "absolution",
    width: "80px",
    height: "80px",
    marginTop: "100px",
  };
  const imgfile2 = {
    //x사진
    position: "absolution",
    width: "90px",
    height: "90px",
    marginBottom: "-85px",
    marginRight: "90px",
  };
  const imgfile3 = {
    //뒤로가기 사진
    position: "absolution",
    width: "80px",
    height: "80px",
    marginLeft: "-240px",
    marginRight: "180px",
  };
  const imgfile4 = {
    //downarrow 사진
    position: "absolution",
    width: "60px",
    height: "60px",
  };

  return (
    <div className="Starts">
      <div style={style1}>
        <Link to="Map">
          <img src={"img/backarrow.png"} style={imgfile3} alt="뒤로가기" />
        </Link>
        즐겨찾기 목록
      </div>

      <div style={style2}> 경기도 부천시 소사구 범박동</div>
      <div style={style3}>
        <img src={"img/downarrow.png"} style={imgfile4} alt="" />
        서울특별시 구로구 항동
      </div>

      <img src={"img/rightarrow.png"} style={imgfile} alt="오른쪽화살표" />
      <img src={"img/x.png"} style={imgfile2} alt="" />
    </div>
  );
}

export default Starts;
