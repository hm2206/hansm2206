import './styles.scss'; 

function Banner() {

  return (
    <div className="card banner">
      <div className="card-body d-flex align-items-center">
        <div className='banner__content'>
          <h1 className='mb-4'>I'm Hans Medina</h1>
          <p className='mb-4'>
            He lay on his armour-like back, and if he lifted his head a little he could see his 
            brown belly, slightly domed and divided by arches into stiff sections.
          </p>

          <a href="#" className='btn banner__btn btn-lg'>
            <i className="fas fa-cubes"></i> View Portfolio
          </a>
          <div className='banner__space'></div>
          <a href="#" className='btn banner__btn light btn-lg mr-3'>
            <i className="far fa-file-pdf"></i> Resumen
          </a>
        </div>

        <div className='banner__background'></div>
      </div>
    </div>
  )
}

export default Banner;