import { name, description } from '../../data/info.json';

function Banner() {

  return (
    <section className="hero background parallax shadow-dark d-flex align-items-center" 
      id="home" data-image-src="images/hero.jpg" 
      style={{ 
        backgroundImage: "url(images/hero.jpg)"
      }}>
			<div className="cta mx-auto mt-2">
				<h1 className="mt-0 mb-4">I’m {name}<span className="dot"></span></h1>
				<p className="mb-4">{description.join(" ")}</p>
				<a href="#" 
          className="btn btn-default btn-lg mr-3"
          style={{ marginRight: '0.7em' }}
        >
          <i className="fas fa-cube"></i>View Portfolio
        </a>
				<div className="spacer d-md-none d-lg-none d-sm-none" 
          data-height="10" 
          style={{ height: "10px" }}
        >  
        </div>
				<a href="#" 
          className="btn btn-border-light btn-lg"
        >
          <i className="fas fa-envelope"></i>Hire me
        </a>
			</div>
			<div className="overlay"></div>
		</section>
  )
}

export {
  Banner,
}