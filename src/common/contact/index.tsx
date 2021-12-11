
function Contact() {
  return (
    <section id="contact" className="shadow-blue white-bg padding">
      <h3 className="section-title">Get in touch</h3>
      <div className="spacer" 
        data-height={80} 
        style={{ height: "80px" }}
      />

      <div className="row">
        
        <div className="col-md-4 mb-4 mb-md-0">
          {/* <!-- contact info --> */}
          <div className="contact-info mb-5">
            <i className="icon-phone"></i>
            <div className="details">
              <h5>Phone</h5>
              <span>+44 1632 960428</span>
            </div>
          </div>
          <div className="contact-info mb-5">
            <i className="icon-envelope"></i>
            <div className="details">
              <h5>Email address</h5>
              <span>hello@bako.com</span>
            </div>
          </div>
          <div className="contact-info">
            <i className="icon-location-pin"></i>
            <div className="details">
              <h5>Location</h5>
              <span>West Palm Beach, 4669 Travis Street</span>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {/* <!-- Contact Form --> */}
          <form id="contact-form" 
            className="contact-form" 
            method="post" 
            action="https://jthemes.net/themes/html/bako-html/form/contact.php" 
          >
            
            <div className="messages"></div>
            
            <div className="row">
              <div className="column col-md-6">
                {/* <!-- Name input --> */}
                <div className="form-group">
                  <input type="text" 
                    className="form-control" 
                    name="InputName" 
                    id="InputName" 
                    placeholder="Your name" 
                    required={true} 
                    data-error="Name is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              
              <div className="column col-md-6">
                {/* <!-- Email input --> */}
                <div className="form-group">
                  <input type="email"
                    className="form-control" 
                    id="InputEmail" 
                    name="InputEmail" 
                    placeholder="Email address" 
                    required={true} 
                    data-error="Email is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="column col-md-12">
                {/* <!-- Email input --> */}
                <div className="form-group">
                  <input type="text" 
                    className="form-control" 
                    id="InputSubject" 
                    name="InputSubject" 
                    placeholder="Subject" 
                    required={true} 
                    data-error="Subject is required."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
          
              <div className="column col-md-12">
                {/* <!-- Message textarea --> */}
                <div className="form-group">
                  <textarea name="InputMessage" 
                    id="InputMessage" 
                    className="form-control" 
                    rows={5}
                    placeholder="Message" 
                    required={true} 
                    data-error="Message is required."
                  />  
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>

            <button type="submit" 
              name="submit" 
              id="submit" 
              value="Submit" 
              className="btn btn-default disabled"
            >
              <i className="icon-paper-plane"></i>Send Message
            </button>
            {/* <!-- Send Button --> */}

          </form>
          {/* <!-- Contact Form end --> */}
        </div>

      </div>

    </section>
  )
}

export {
  Contact,
}