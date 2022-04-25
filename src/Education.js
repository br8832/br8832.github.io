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
        this.certificates = [{name:"Google Data Analytics", path:"https://coursera.org/verify/professional-cert/Y4M5L7BRUDM5"},
        {name:"Google IT Automation", path:"https://coursera.org/verify/professional-cert/M86RQ9G8SZ7S"}]
    }
    details() {
        return(<>
            <h2>Education</h2>
            {Object.keys(this.college).map((item) => {
            return (item === "name") ? <h3><b>{this.college[item]}</b></h3> :  <p>{this.college[item]}</p>
            })}
            <h2>Certificates</h2>
            <ul>
            {this.certificates.map((certificate) => <li><a target="_blank" rel="noreferrer" href={certificate.path}>{certificate.name}</a></li>)}
            </ul>
            </>
        )
    }
    render() {
        return (
            /* Education */
        <section id="education" class="education">
        <div class="content-wrap">
           {this.details()}
</div> 
</section>

        )
    }
}
export default Education
