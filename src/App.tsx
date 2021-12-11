import { Preloader } from './common/preloader';
import { Navbar } from './common/navbar';
import { Sidebar } from './common/sidebar'; 
import Home from './modules/home/home';

function App() {

  return (
    <>
      <Preloader/>
      <div className="site-wrapper">
        <Navbar/>
        <Sidebar/>
        <main className="content float-right" style={{ float: 'right' }}>
          <Home/>
        </main>
      </div>
    </>
  )
}

export default App;