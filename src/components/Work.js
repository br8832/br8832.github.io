import React from 'react'

class Work extends React.Component {
    constructor(props) {
        super(props)
        this.jobs = [
        {title: "Math tutor", time:["CSUN", "2018-2020"], description:"For a time, I tutored math at CSUN. It was a first for me trying to help someone else understand something I understood. It ended because there was no more time in my schedule. I took and subsequently tutored:", 
        classes: ["Math 250 - Calc III", "Math 262 - Linear Algebra", "Math 280 - Applied Differential Equations","Math 340 - Intro Probability"]}
        ,{title: "Philosophy Tutor", time:["CSUN", "2017-2021"], description:"The title is philosophy tutor but I don't tutor really tutor philosphy. I tutor more to the formal logic side, the 230 course we take as a comp sci major. I did well in that and my teacher thought I could help other learn. I tutor other courses, but I never took the courses. They are: ", 
        classes: ["Phil 100 - General Logic", "Phil 200 - Critical Reasoning","Phil 230 - Formal Logic"]}
        ,{title: "Math Tutor", time:["Growing Minds Academic Achievement Center", "2022-2023"], description:"Using my knowledge of math and computer science, alongside my previous tutoring experience,gained from university, I now help students with the aforementioned subjects as well", 
        classes: ["Geometry", "Precalculus","Calc I","Calc II", "Statistics"]}
    ]
    }
    render(){
        return (
            <section id="work" class="work">
            <div class="content-wrap">
                <h2>Work Experience</h2>
                {this.jobs.map((job) =>
                { return(
                    <><div class="column-narrow"> 
                        <h3>{job.title}</h3>
                        {job.time.map((part) => <p>{part}</p>)}
                    </div>
                    <div class="column-wide">
                        <p>{job.description}</p>
                        <ul>
                            {job.classes.map((course) => <li>{course}</li>)}
                        </ul>
                    </div></>)
                })}
            </div>    
            </section>
        )
    }
}
export default Work
          
        