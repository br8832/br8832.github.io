import React from 'react'
import SlideShow from './SlideShow'
import CookFlex from './images/Cookflex.png'
import Quiz from './images/quiz.jpg'
import React_logo from './images/react-logo.png'
import Speech_to_Text from './images/text-to-speech.png'
class Projects extends React.Component{
    constructor (props){
        super(props);
        this.projects = [
            {name:"Cookflex", path: CookFlex, repository: "https://github.com/Dund0/FoodApp", date:"SEPTEMBER 2020 - MAY 2021 ", description: "Created a mobile app for Android in Android Studio. I worked on the backend with Firebase, a service by Google for mobile and web applications, to manage users and their data, like images and emails. "},
            {name:"Speech-to-Text Bot", path: Speech_to_Text, repository: "https://github.com/CSUN-ACM/Speech-To-Text", date:"JANUARY 2020 - MAY 2020 ", description: "Utilizing Python and its various libraries, we created a bot for converting a person's speech to text. I helped in creating the model for the bot and then testing it with PyAudio "},
            {name:"Quiz App", path: Quiz, repository: "https://github.com/br8832/COMP484", date:"JANUARY 2021 - MAY 2021", description: "Create a quiz game in meteor. I created the backend for interfacing with some API's and designed the look of our quiz game. Then, with the meteor tools, I hosted it for a short while. I enjoyed worked on the backend more with the various API's and documentation"},
            {name:"This website", path: React_logo, repository: "https://github.com/br8832/portfolio", date:"APRIL2022 - PRESENT", description: "Recreated a resume site using React. The purpose of which is to understand React better, more specifically front-end development, and update continuously my experience."}
        ]
    }
    render(){
        return(
            <SlideShow projects={this.projects} />
        )
    }
}

export default Projects