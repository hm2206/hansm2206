import { name, info, location, birthday, email } from '../../data/info.json';
import Curriculum from '../../assets/file/curriculum.pdf';
import Perfil from '../../assets/image/perfil.png'

function About() {

  return (
    <section id="about" className="shadow-blue white-bg padding">
      <h3 className="section-title">About Me</h3>
      <div className="spacer" data-height="80" 
        style={{ height: "80px" }}
      >
      </div>

      <div className="row">
        <div className="col-md-3">
          <img src={Perfil} 
            alt="about"
            style={{ 
              height: '100px',
              width: '100px',
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="col-md-9">
          <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
          <p className="mb-0">I am {name}, {info} from {location}. I have rich experience in web site design and building and customization</p>
          <div className="row my-4">
            <div className="col-md-6">
              <p className="mb-2">Name: <span className="text-dark">{name}</span></p>
              <p className="mb-0">Birthday: <span className="text-dark">{birthday}</span></p>
            </div>
            <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
              <p className="mb-2">Location: <span className="text-dark">{location}</span></p>
              <p className="mb-0">Email: <span className="text-dark">{email}</span></p>
            </div>
          </div>
          <a href={Curriculum} className="btn btn-default mr-3" style={{ marginRight: '0.7em' }}>
            <i className="fas fa-download"></i>Download CV
          </a>
          <a href="#contact" className="btn btn-alt mt-2 mt-md-0 mt-xs-2">
            <i className="fas fa-envelope"></i>Hire me
          </a>
        </div>
      </div>
    </section>
  )
}

export {
  About,
}