
function Fracts() {
  return (
    <section id="facts" 
      className="shadow-dark color-white background parallax padding-50" 
      data-image-src="images/background-1.jpg" 
      style={{ backgroundImage: "url(images/background-1.jpg)" }}
    >
      <div className="row relative z-1">
        <div className="col-md-3 col-sm-6">
          {/* <!-- fact item --> */}
          <div className="fact-item text-center">
            <i className="far fa-thumbs-up icon-circle"></i>
            <h2 className="count">10</h2>
            <span>Projects completed</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          {/* <!-- fact item --> */}
          <div className="fact-item text-center">
            <i className="fas fa-mug-hot icon-circle"></i>
            <h2 className="count">180</h2>
            <span>Cup of coffee</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          {/* <!-- fact item --> */}
          <div className="fact-item text-center">
            <i className="far fa-smile icon-circle"></i>
            <h2 className="count">5</h2>
            <span>Happy customers</span>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          {/* <!-- fact item --> */}
          <div className="fact-item text-center">
            <i className="fas fa-user-friends icon-circle"></i>
            <h2 className="count">2</h2>
            <span>Collaborations</span>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  )
}

export {
  Fracts
}