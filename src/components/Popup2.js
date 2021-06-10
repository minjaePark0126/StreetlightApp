import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Map from "../pages/Map.js";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1080px;
  height: 1920px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modal_overaly {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .modal_content{
    background-color: white;
    padding: 50px; 100px;
    text-align: center;
    position: relative;
    border-radius: 15px;
    border: 10px solid #FAE100;
    width: 40%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    img{
      width: 80px;
    }
    h1{
      margin: 30px 0 20px 0;
      font-size: 40px;
    }
    span{
      font-size: 40px;
      font-weight: bold;
      color: blue;
      display: block;
      margin: -10px 0 30px 0; 
    }
    p{
      margin-bottom: 50px;
      font-size: 32px;
    }
    button{
      width: 230px;
      height: 90px;
      border: 3px solid;
      font-size: 40px;
      cursor: pointer;
    }
  }
`;

function Popup() {
  return (
    <>
      <Modal>
        <div className="modal_overaly"></div>
        <div className="modal_content">
          <img src="/img/information.png" alt="안내" />
          <h1>서비스 가능 지역</h1>
          <span>경기도 부천시 역곡동</span>
          <p>점차 지역을 늘려갈 예정이니 많은 기대 부탁드립니다^^</p>
          <Link to={"/Map"}>
            <button>확인</button>
          </Link>
        </div>
      </Modal>
      <Map></Map>
    </>
  );
}

export default Popup;
