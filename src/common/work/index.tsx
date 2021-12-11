
function Work() {
  return (
    <section id="works" className="shadow-blue white-bg padding">
      <h3 className="section-title">Portfolio</h3>
      <div className="spacer" 
        data-height="80" 
        style={{ height: "80px" }}
      />

      {/* <!-- portfolio filter (desktop) --> */}
      <ul className="portfolio-filter list-inline">
        <li className="current list-inline-item" data-filter="*">All Projects</li>
        <li className="list-inline-item" data-filter=".branding">Branding</li>
        <li className="list-inline-item" data-filter=".creative">Creative</li>
        <li className="list-inline-item" data-filter=".design">Design</li>
        <li className="list-inline-item" data-filter=".video">Video</li>
      </ul>

      {/* <!-- portfolio filter (mobile) --> */}
      <div className="pf-filter-wrapper mb-4">
        <select className="portfolio-filter-mobile">
          <option value="*">Everything</option>
          <option value=".creative">Creative</option>
          <option value=".video">Video</option>
          <option value=".design">Design</option>
          <option value=".branding">Branding</option>
        </select>
      </div>

      {/* <!-- portolio wrapper --> */}
      <div className="row portfolio-wrapper" 
        style={{ 
          position: "relative", 
          height: "407.468px" 
        }}
      >
        
        {/* <!-- portfolio item --> */}
        <div className="col-md-4 col-sm-6 grid-item video" 
          style={{ 
            position: "absolute", 
            left: "0%", 
            top: "0px"
          }}
        >
          <a href="https://jthemes.net/themes/html/bako-html/work-single.html">
            <div className="portfolio-item">
              <div className="details">
                <h4 className="title">Creative Art</h4>
                <span className="term">Art, Creative</span>
              </div>
              <span className="plus-icon">+</span>
              <div className="thumb">
                <img src="./1.jpg" alt="Portfolio-title"/>
                <div className="mask"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* <!-- more button --> */}
      <div className="load-more text-center mt-4">
        <a href="javascript:" className="btn btn-default"><i className="fas fa-circle-notch"></i> Load more</a>
        {/* <!-- numbered pagination (hidden for infinite scroll) --> */}
        <ul className="portfolio-pagination list-inline d-none">
          <li className="list-inline-item">1</li>
          <li className="list-inline-item"><a href="https://jthemes.net/themes/html/bako-html/works-2.html">2</a></li>
        </ul>
      </div>
    </section>
  )
}

export {
  Work,
}