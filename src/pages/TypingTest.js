// Imported my Typing Test from Github and only use the parts I need
import React from 'react'
import index from "./BigE/index.html"
class TypingTest extends React.Component{
    render() {
       return <div dangerouslySetInnerHTML={{__html: index}}></div>
    }

}
export default TypingTest