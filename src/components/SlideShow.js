import React from 'react'
import "./SlideShow.css"
import { Slide } from 'react-slideshow-image';
import "./SlideShow.css"
class SlideShow extends React.Component{
    constructor(props){
        super(props);
        // takes an array of information
        this.projects = props.projects
        this.properties = {
            indicators: () => (<div className="myIndicator"></div>),
            autoplay: true
        }
    }
    render(){
        return (
            <section id="projects" class="slideshow">
            <Slide {...this.properties}>
                {this.projects.map( (project) => { return <div class="slides"><div class='slide-item'><h2>{project.name}</h2>
                    <a target="_blank" rel="noreferrer" href={project.repository}><img alt="The repository" src={project.path}></img></a>
                    <h3>{project.date}</h3></div><div class="slide-item1"><p>{project.description}</p></div></div>})}
            </Slide>
            </section>
        )
    }
}
export default SlideShow