import {Education, Footer, Intro, Projects, Work} from './components'
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
