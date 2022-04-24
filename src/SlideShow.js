import React from 'react'
import { Slide } from 'react-slideshow-image';
// takes an array of information
class SlideShow extends React.Component{
    constructor(props){
        super(props);
        this.projects = [
            {name:"Cookflex", path: "https://cdn.glitch.global/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e/CookFlex.png?v=1650755736934", repository: "https://github.com/Dund0/FoodApp", date:"JANUARY 2020 - MAY 2021 ", description: "Created a mobile app for Android in Android Studio. I worked on the backend with Firebase, a service by Google for mobile and web applications, to manage users and their data, like images and emails. "},
            {name:"Speech-to-Text Bot", path: "https://cdn.glitch.global/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e/text-to-speech.png?v=1650755731891", repository: "https://github.com/CSUN-ACM/Speech-To-Text", date:"JANUARY 2020 - MAY 2021 ", description: "Utilizing Python and its various libraries, we created a bot for converting a person's speech to text. I helped in creating the model for the bot and then testing it with PyAudio "},
            {name:"Quiz App", path: "https://cdn.glitch.global/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e/quiz.jpg?v=1650755728958", repository: "https://github.com/br8832/COMP484", date:"JANUARY 2021 - MAY 2021", description: "Create a quiz game in meteor. I created the backend for interfacing with some API's and designed the look of our quiz game. Then, with the meteor tools, I hosted it for a short while. I enjoyed worked on the backend more with the various API's and documentation"},
            {name:"This website", path: "https://cdn.glitch.global/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e/react-1-logo.png?v=1650756856464", repository: "https://github.com/br8832/portfolio", date:"MARCH 2022 - APRIL2022", description: "Recreated a resume site from a class but using React. The purpose of which is to understand React better, more specifically front-end development, and update continuously my experience."}
        ]
        this.properties = {
            indicators: true,
            //indicators: i => (<div class="myIndicator">{i+1}</div>),
            autoplay: false,
    }
    }
    
    render(){
        return (
            <section class="slideshow" id="projects">
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