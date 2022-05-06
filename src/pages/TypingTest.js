// Imported my Typing Test from Github and only use the parts I need
import React from 'react'
import index from "./BigE/index.html"
import penguin from "./BigE/penguin.html"
import style from "./BigE/style.css"
class TypingTest extends React.Component{
    constructor(props){
        super(props);
        this.page=props.page;
    }
    render() {
       console.log(index)
       return this.page === "index" ? <div dangerouslySetInnerHTML={{__html: index}}></div> : 
       <div dangerouslySetInnerHTML={{__html: penguin}}></div>
    }

}
export default TypingTest