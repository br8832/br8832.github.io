import Intro from './Intro'
import Footer from './Footer'
import Education from './Education'
import Projects from './Projects'
import './App.css';

function App() {
  return (
      <><Intro />
      <section id="work" class="work">
          <div class="content-wrap">
            <h2>Work Experience </h2>

            {/*Job Details: copy this whole block to add more jobs*/} 
            <div class="column-narrow">
              <h3>Math tutor</h3>
              <p>CSUN</p>
              <p>2018-20</p>
            </div>
            {/* Add as many paragraphs as you need. */}
            <div class="column-wide">  
              <p>For a time, I tutored math at CSUN. It was a first for me trying to help someone else understand something I understood. It ended because there was no more time in my schedule. I took and subsequently tutored:</p>
              <ul>
                <li>Math 250 - Calc III</li>
                <li>Math 262 - Linear Algebra</li>
                <li>Math 280 - Applied Differential Equations</li>
                <li>Math 340 - Intro Probability</li>
              </ul>
            </div>
            
            {/* Job Details: copy this whole block to add more jobs   */}
            <div class="column-narrow">
              <h3>Philosophy Tutor</h3>
              <p>CSUN</p>
              <p>2017-Present</p>
            </div>
            {/* Add as many paragraphs as you need. */}
            <div class="column-wide">
              <p>The title is philosophy tutor but I don't tutor really tutor philosphy. I tutor more to the formal logic side, the 230 course we take as a comp sci major. I did well in that and my teacher thought I could help other learn. I tutor other courses, but I never took the courses. They are: </p>
              <ul>
                <li>Phil 100 - General Logic</li>
                <li>Phil 200 - Critical Reasoning</li>
                <li>Phil 230 - Formal Logic</li>
              </ul>
            </div>
          </div>
        </section>
        <Projects />
    <Education />
    <Footer />
     </> 
  );
}

export default App;
