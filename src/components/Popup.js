import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Main from "../pages/Main.js";

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
    p{
      margin-bottom: 50px;
      font-size: 32px;
      span{
        font-weight: bold;
        color: blue;
      }
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
          <h1>이 웹페이지는 모바일에 최적화되어 있습니다.</h1>
          <p>
            PC화면에선 확대/축소 비율을 <span>33%</span>로 맞춰주시길 바랍니다.
          </p>
          <Link to="/Main">
            <button>확인</button>
          </Link>
        </div>
      </Modal>
      <Main></Main>
    </>
  );
}

export default Popup;
