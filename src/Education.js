import React from 'react'

class Education extends React.Component{
    constructor(props){
        super(props);
        this.college = {
            name: "California State University Northridge, 2016-2021",
            GPA: "GPA: 3.9",
            degree: "Bachelor of Computer Science",
            additional_info:"Member of the Association for Computing Machinery(ACM) chapter since 2020"
        }
    }
    details() {
        return(
            Object.keys(this.college).map((item) => {
            return (item === "name") ? <h3><b>{this.college[item]}</b></h3> :  <p>{this.college[item]}</p>
            })
        )
    }
    render() {
        return (
            /* Education */
        <section id="education" class="education">
        <div class="content-wrap">
        <h2>Education</h2>
  {/* School details: copy this whole block to add more schools. */}
  {/* Add as many paragraphs as you need. */}
           {this.details()}
  {/* End of school details. */}
</div> 
</section>

        )
    }
}
export default Education
