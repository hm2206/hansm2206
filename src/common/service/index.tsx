import services from '../../data/services.json';

function Service() {
  return (
    <section id="services" className="shadow-blue white-bg padding">
      <h3 className="section-title">Services</h3>
      <div className="spacer" 
        data-height="80" 
        style={{ height: "80px" }}>  
      </div>

      <div className="row">
        {services.map(ser => 
          <div className="col-md-4 col-sm-6">
            {/* <!-- service item --> */}
            <div className="service-item text-center">
              <i className={`${ser.icon} icon-simple`}></i>
              <h4 className="my-3">{ser.title}</h4>
              <p className="mb-0">{ser.description}</p>
            </div>
            <div className="spacer" 
              data-height="20" 
              style={{ height: "20px" }}>
            </div>
          </div>  
        )}
      </div>
    </section>
  )
}

export {
  Service
}