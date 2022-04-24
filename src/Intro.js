import React from 'react';

class Intro extends React.Component{
    constructor (props){
        super(props);
        this.sections = ['about', 'work', 'projects','education', 'contact']
    }
    anchorList(){
        return (<nav class="navbar">
            {this.sections.map((item) =>
                {return <a rel="noreferrer" href={"#"+item}>{item[0].toUpperCase()+item.slice(1)}</a>})}
            <a class="download" target="_blank" rel="noreferrer" href="https://cdn.glitch.com/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e%2Fcomp484_hw678_br_glitch_me.pdf?v=1621121663863"><i class="far fa-file-pdf"></i> Download</a>
        </nav>)
    }
    render(){
        return(
        <header>
            {this.anchorList()}    
        <div class="content-wrap">
            <img id="about" class="profile-img column-narrow" src="https://cdn.glitch.com/306ecdbb-5d88-4a04-a6af-bcf15ec1ea0e%2FIMG_0338.JPG?v=1614983120537" alt="Your Name"></img>
            <div class="column-wide">
                <h1>Bryan Rodriguez</h1>
                <h2>Computer Science Student trying to get by</h2>
                <p>As for work experience I don't have much, but I'm a quick learner. I'm interested in web and database development. One of my proudest creations is <a href="https://comp484-typingtest-br.glitch.me/penguin.html" target="_blank">this</a></p>
            </div>
      </div>
    </header>
    );
}
}
export default Intro;
