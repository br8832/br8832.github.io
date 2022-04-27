import React from 'react'
class Footer extends React.Component{
    constructor (props){
        super(props);
        this.socialMedia = [
            <a href="mailto:bryan2098@hotmail.com"><i class="fas fa-envelope"></i>bryan2098@hotmail.com</a>,
            <a href="https://www.github.com/br8832" target="_blank" rel="noreferrer"><i class="fab fa-github"></i>Github</a>,
            <a href="https://www.linkedin.com/in/bryan-rodriguez-5b473516b/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i>LinkedIN</a>
        ]
    }
    render() {
        return (
            <footer>
                <div class="content-wrap">
                    <h2>Let's Keep in Touch!</h2>
                    <div class="contact-info" id="contact">
                        {this.socialMedia}
                    </div>
                <p>Copyright&trade; 2021 by Bryan Rodriguez</p>
                </div>
            </footer>
        )
    }
}
export default Footer
