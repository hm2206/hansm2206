
function Preloader() {

  return (
    <div id="preloader" style={{ display: "none" }}>
      <div className="outer">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader;