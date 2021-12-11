import { Banner } from '../../common/banner';
import { About } from '../../common/about';
import { Skill } from '../../common/skill';
import { Fracts } from '../../common/fracts';
import { Service } from '../../common/service';
import { Experience } from '../../common/experience';
import { Work } from '../../common/work';
import { Client } from '../../common/client';
import { Contact } from '../../common/contact';

function Home() {
  return (
    <>
      <Banner/>
      <About/>
      <Skill/>
      <Fracts/>
      <Service/>
      {/* <Experience/> */}
      {/* <Work/> */}
      {/* <Client/> */}
      {/* <Contact/> */}
    </>
  )
}

export default Home;