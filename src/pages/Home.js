import {Education, Footer, Intro, Projects, Work} from '../components'
import React from "react"
import '../App.css';
class Home extends React.Component{ 
  render() {
      return<>
        <Intro />
        <Work/>
        <Projects />
        <Education />
        <Footer />
    </>
     }
  }
export default Home