import React from 'react'

class Work extends React.Component {
    constructor(props) {
        super(props)
        this.jobs = [
        {title: "Philosophy Tutor", time:["CSUN", "2017-2021"], description:"After doing well in my formal logic course for my computer science major, my teacher thought I could aid my peers and clarify their questions. Officially called an Instructional Student Assistant (ISA), I conducted 1 on 1 in-person sessions for my peers", 
        classes: ["Phil 100 - General Logic", "Phil 200 - Critical Reasoning","Phil 230 - Formal Logic"]}
        , {title: "Math Tutor", time:["CSUN", "2018-2020"], description:"Much like my formal logic course, after doing well in my linear algebra course, the head of the math tutoring department contacted me about tutoring for math.  I tutored Calculus I – III, Probability, Differential Equations, and Linear Algebra. As an ISA for math, tutoring was not only 1 on 1, but also in small groups during finals.", 
        classes: ["Math 250 - Calc III", "Math 262 - Linear Algebra", "Math 280 - Applied Differential Equations","Math 340 - Intro Probability"]}
        ,{title: "Math Tutor", time:["Growing Minds Academic Achievement Center", "2022-2023"], description: "Using my knowledge of math and computer science, alongside my previous tutoring experience gained from university, I helped students with the aforementioned subjects. All sessions were 1 on 1 in-person or online, depending on the student's preference.", 
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
          
        