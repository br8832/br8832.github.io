import React from 'react'
import resume from './images/Resume.docx'
import me from './images/me.jpg'
class Intro extends React.Component{
    constructor (props){
        super(props);
        this.state = props.isMobile;
        this.toggle = props.toggle;
        this.sections = ['about', 'work', 'projects','education', 'contact']
    }

    anchorList(){
        return (<nav class="navbar">
            {this.sections.map((item) =>
                {return <a rel="noreferrer" href={"#"+item}>{item[0].toUpperCase()+item.slice(1)}</a>})}
            <a class="download" target="_blank" rel="noreferrer" href={resume} download="Bryan_Rodriguez_Resume.docx"><i class="far fa-file-pdf"></i>Download</a>
        </nav>)
    }
    showMobileMenu(){
        const border = window.innerWidth < 768
        let menu = document.getElementsByTagName('aside')[0];
        menu.style.display = border ? 'inherit' : "none"
        
    }
    clearMenu(){
            let menu = document.getElementsByTagName('aside')[0];
            menu.className = "";
            menu.style.display = 'none'
    }

    mobileMenu(){
        return(
            <aside class="initialMobileMenu">
                <span onClick={this.clearMenu} class='popup-close'>X</span>
                <ul>
                {this.sections.map((item) =>
                {return <li key={item} onClick={this.clearMenu}><a rel="noreferrer" href={"#"+item}>{item[0].toUpperCase()+item.slice(1)}</a></li>})}
                </ul>
            </aside>
        )

    }
    render(){
        window.addEventListener('resize',this.showMobileMenu)
        return(
        <header>
            {this.anchorList()}
            {this.mobileMenu()}    
        <div style={{paddingTop:"50px"}} class="content-wrap">
            <img id="about" class="profile-img column-narrow" src={me} alt="Your Name"></img>
            <div class="column-wide">
                <h1>Bryan Rodriguez</h1>
                <h2>Computer Science Student trying to get by</h2>
                <p>As for work experience I don't have much, but I'm a quick learner. I'm interested in web and database development. One of my proudest creations is <a style={{color:'rebeccapurple'}}href="https://comp484-typingtest-br.glitch.me/penguin.html" rel="noreferrer" target="_blank">this</a></p>
            </div>
      </div>
    </header>
    );
}
}
export default Intro;
