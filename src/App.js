import Intro from './Intro'
import Footer from './Footer'
import Education from './Education'
import Projects from './Projects'
import Work from './Work'
import {useState} from 'react'
import './App.css';

function App() {
  const [isMobile, setMobile] = useState(false);
  const toggle = () => setMobile(!isMobile)
  return (
      <><Intro isMobile={isMobile} toggle={toggle}/>
        <Work/>
        <Projects />
        <Education />
        <Footer />
     </> 
  );
}

export default App;
