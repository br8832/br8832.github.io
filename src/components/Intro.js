import React from 'react'
import resume from '../images/Bryan_Rodriguez_Resume.docx'
import me from '../images/me.png'
class Intro extends React.Component{
    constructor (props){
        super(props);
        this.sections = ['about', 'work', 'projects','education', 'contact']
        this.link = "/portfolio/TypingTest"
    }

    anchorList(){
        return (<nav className="navbar">
            {this.sections.map((item) =>
                {return <a rel="noreferrer" href={"#"+item}>{item[0].toUpperCase()+item.slice(1)}</a>})}
            <a className="download" target="_blank" rel="noreferrer" href={resume} download="Bryan_Rodriguez_Resume.docx"><i class="far fa-file-pdf"></i>Download</a>
        </nav>)
    }
    showMobileMenu(){
        const border = window.innerWidth < 768
        let menu = document.getElementsByTagName('aside')[0];
        menu.style.display = border ? 'inherit' : "none"
        
    }
    clearMenu(location){
            let menu = document.getElementsByTagName('aside')[0];
            menu.className = "";
            menu.style.display = 'none';
            window.location.href="#"+location;
    }

    mobileMenu(){
        return(
            <aside className="initialMobileMenu">
                <span onClick={this.clearMenu} className='popup-close'><i className="fas fa-times"></i></span>
                <ul>
                {this.sections.map((item) =>
                {return <li key={item} onClick={() => {this.clearMenu(item)}}><a rel="noreferrer" href={"#"+item}>{item[0].toUpperCase()+item.slice(1)}</a></li>})}
                </ul>
            </aside>
        )

    }
    render(){
        //window.addEventListener('resize',this.showMobileMenu) - for testing on desktop
        return(
        <header>
            {this.anchorList()}
            <span onClick={this.showMobileMenu} className="popup-close"><i className="fas fa-bars"></i></span>
            {this.mobileMenu()}    
        <div style={{paddingTop:"50px"}} className="content-wrap">
            <img id="about" className="profile-img column-narrow" src={me} alt="Your Name"></img>
            <div className="column-wide">
                <h1>Bryan Rodriguez</h1>
                <h2>Computer Science Student trying to get by</h2>
                <p>I am a Computer Science graduate at CSU, Northridge. I am interested in career opportunity for software engineering such as mobile app/web/database development. I'm willing to take on new technologies to improve my own skills and contribute to any future projects. 
                    One of my proudest creations is <a style={{color:'rebeccapurple'}} href={this.link} rel="noreferrer" >this</a></p>
            </div>
      </div>
    </header>
    );
}
}
export default Intro;
