import { name, info, links } from '../../data/info.json';
import Perfil from '../../assets/image/perfil.png'

function Sidebar() {

  return (
    <header className="left float-left shadow-dark" id="header">
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      <div className="header-inner d-flex align-items-start flex-column mCustomScrollbar _mCS_1 mCS_no_scrollbar">
        <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" 
          tabIndex={0} 
          style={{ maxHeight: "none" }}
        >
          <div id="mCSB_1_container" 
            className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" 
            style={{ 
              position: "relative", 
              top: "0px", 
              left: "0px"
            }} 
            dir="ltr"
          >
        <a href="https://jthemes.net/themes/html/bako-html/index.html">
          <img src={Perfil} 
            alt={name} 
            className="mCS_img_loaded"
            style={{ 
              width: '75px',
              objectFit: 'contain'
            }}
          />
        </a>
        <a href="https://jthemes.net/themes/html/bako-html/index.html" 
          className="site-title dot mt-3"
        >
          {name}
        </a>
        <span className="site-slogan">{info}</span>
        
        {/* <!-- navigation menu --> */}
        <nav>
          <ul className="vertical-menu scrollspy">
            <li><a href="https://jthemes.net/themes/html/bako-html/#home" className="nav-link active"><i className="icon-home"></i>Home</a></li>
            <li><a href="https://jthemes.net/themes/html/bako-html/#about" className="nav-link"><i className="icon-user"></i>About</a></li>
            <li><a href="https://jthemes.net/themes/html/bako-html/#services" className="nav-link"><i className="icon-bulb"></i>Services</a></li>
            <li><a href="https://jthemes.net/themes/html/bako-html/#resume" className="nav-link"><i className="icon-graduation"></i>Resume</a></li>
            <li><a href="https://jthemes.net/themes/html/bako-html/#works" className="nav-link"><i className="icon-grid"></i>Works</a></li>
            <li><a href="https://jthemes.net/themes/html/bako-html/#contact" className="nav-link"><i className="icon-phone"></i>Contact</a></li>
          </ul>
        </nav>
        
        {/* <!-- footer --> */}
        <div className="footer mt-auto">

          {/* <!-- social icons --> */}
          <ul className="social-icons list-inline">
            {links.map(l => 
                <li className="list-inline-item">
                  <a href={l.url}>
                    <i className={l.icon}></i>
                  </a>
              </li>
              )}  
          </ul>

          {/* <!-- copyright --> */}
          <span className="copyright">© {new Date().getFullYear()} {name}</span>
        </div>
      </div>
      <div id="mCSB_1_scrollbar_vertical" 
        className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" 
        style={{ display: "none" }}
      >
        <div className="mCSB_draggerContainer">
          <div id="mCSB_1_dragger_vertical" 
            className="mCSB_dragger" 
            style={{ 
              position: "absolute",
              minHeight: "30px", 
              height: "0px", 
              top: "0px", 
              display: "block",
              maxHeight: "395px"
            }}
          >
            <div className="mCSB_dragger_bar" 
              style={{ lineHeight: "30px" }}
            >
          </div>
        </div>
        <div className="mCSB_draggerRail"></div></div></div></div></div>
    </header>
  )
}

export {
  Sidebar,
}