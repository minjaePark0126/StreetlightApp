function Side() {
  return (
    <div className="Side">
      <center>
        <div class="zoomcontrol">
          <span onclick="zoomIn()">
            <img src="img/plus.png" alt="확대" />
          </span>
          <span onclick="zoomOut()">
            <img src="img/minus.png" alt="축소" />
          </span>
        </div>
      </center>
    </div>
  );
}
export default Side;
