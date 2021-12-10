
function Navbar() {

  return (
    <nav className="navbar navbar-light bg-blue">
      <div className="container-fluid">
        <a className="navbar-brand navbar-icon" href="#">
          <i className="fas fa-bars"></i>
        </a>
        <div className="navbar-right">
          <img src="https://jthemes.net/themes/html/bako-html/images/logo.png" alt="" 
            className="navbar-image"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;