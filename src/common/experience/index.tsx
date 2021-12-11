
function Experience() {
  return (
    <section id="resume" className="shadow-blue white-bg padding">
      <h3 className="section-title">Experience</h3>
      <div className="spacer" 
        data-height="80" 
        style={{ height: "80px" }}
      />

      {/* <!-- timeline --> */}
      <div className="timeline">
        <div className="entry">
          <div className="title">
            <span>2019 - Present</span>
          </div>
          <div className="body">
            <h4 className="mt-0">Academic Degree</h4>
            <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.</p>
          </div>
        </div>
        <span className="timeline-line"></span>
      </div>
    </section>
  )
}

export {
  Experience,
}