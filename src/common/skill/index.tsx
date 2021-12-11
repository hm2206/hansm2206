import skills from '../../data/skills.json';

function Skill() {

  return (
    <section id="skills" className="shadow-blue white-bg padding">
      <h3 className="section-title">My skills</h3>
      <div className="spacer" 
        data-height="80" 
        style={{ height: "80px" }}>  
      </div>
      
      <p className="mb-0">My most outstanding skills</p>

      <div className="row mt-5">
        {skills.map(s => 
          <div className="col-md-6">
            {/* <!-- skill item --> */}
            <div className="skill-item">
              <div className="skill-info clearfix">
                <h4 className="float-left mb-3 mt-0">{s.title}</h4>
                <span className="float-right">{s.porcentaje}%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" 
                  role="progressbar" 
                  aria-valuemin={0} 
                  aria-valuemax={100} 
                  aria-valuenow={s.porcentaje} 
                  style={{ width: `${s.porcentaje}%` }}
                />
              </div>
              <div className="spacer" 
                data-height="50" 
                style={{ height: "50px" }}
              >
              </div>
            </div>
          </div>  
        )}
      </div>
    </section>
  )
}

export {
  Skill,
}