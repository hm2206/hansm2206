
function Navbar() {

  return (
    <div className="mobile-header py-2 px-3 mt-4">
      <button className="menu-icon mr-2">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="https://jthemes.net/themes/html/bako-html/index.html" className="logo">
        <img src="./logo.png" alt="Bako Doe"/>
      </a>
      <a href="https://jthemes.net/themes/html/bako-html/index.html" className="site-title dot ml-2">Bako Doe</a>
    </div>
  )
}

export default Navbar;