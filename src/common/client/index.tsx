
function Client() {
  return (
    <section id="clients" className="shadow-dark background-blue color-white padding-50">
      {/* <!-- hidden heading for validation --> */}
      <h2 className="d-none">Clients</h2>
      {/* <!-- clients wrapper --> */}
      <div className="clients-wrapper row slick-initialized slick-slider">
        <div aria-live="polite" 
          className="slick-list draggable"
        >
          <div className="slick-track" 
            role="listbox" 
            style={{ 
              opacity: 1, 
              width: "2054px", 
              transform: "translate3d(-632px, 0px, 0px)"
            }}
          >
            <div className="col-md-3 slick-slide slick-cloned" 
              tabIndex={-1} 
              role="option" 
              aria-describedby="slick-slide11" 
              style={{ width: "158px" }} 
              data-slick-index="-4" 
              aria-hidden="true"
            >
              {/* <!-- client item --> */}
              <div className="client-item">
                <div className="inner">
                  <img src="./2.png" alt="client-name"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {
  Client,
}