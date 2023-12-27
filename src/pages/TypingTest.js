// Imported my Typing Test from Github and only use the parts I need
import React from 'react'
import '../components/BigE.css'
import * as BigE from '../components/BigE.js'
//https://static.wikia.nocookie.net/mrfz/images/c/c5/Emperor.png/revision/latest?cb=20200511132114
import Emperor from '../images/BigE.jpeg'
import LoyalToTheBeat from '../images/LoyalToTheBeat.jpeg'
class TypingTest extends React.Component{
    
    render() {
       return (<>
       
       <div className="flexbox">
       <div className="flexbox-item">
          <div id="scores" style={{maxWidth:'600px',zIndex:9999,'left':'100px','top':'0px','display':'none'}}>
                 <table>  
                   <thead>
                     <tr>
                       <th colSpan="4">Big E's stats</th>
                     </tr>
                   </thead>
                   <tbody style={{color:'white'}}>
                     <tr><td>Section</td><td>Percentage</td><td>Errors</td><td>Time</td></tr>
                   </tbody>  
                 </table>
                           
               </div>  
         <div style={{zIndex:9999}} id="visual-text">
         </div>
         <img style={{width:'fit-content',height:'-webkit-fit-content'}}alt='get penguin img' src={LoyalToTheBeat}/>
       </div>
       <div className="flexbox-item" style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',
       backgroundImage: `url(${Emperor})`}}>
         
      <section style={{'maxWidth': '600px'}} className="test-area">
                 <table style={{display:'none','fontSize':'1.2em'}}>  
                   <thead >
                     <tr>
                       <th colSpan="4">Your scores</th>
                     </tr>
                   </thead>
                   <tbody style={{'color':'white'}}>
                   <tr><td>Section</td><td>Percentage</td><td>Errors</td><td>Time</td></tr>
                   </tbody>  
                 </table> 
               <div id="origin-text">
                   <p>How FAST!!! can you type </p>
                   <p>Type as you see (line break included)</p>
                   <p>Note: If you fall behind Big E, he won't wait for you</p>
                   <p>In fact, he'll put you up to his pace</p>
                   <p>Good luck, starts at around 00:18:00</p>
               </div>
               <div className="test-wrapper" >
                   <textarea id="test-area"  name="textarea" rows="6" placeholder="Your move"></textarea>
               </div>
               <div className="meta">
                   <section id="clock">
                       <div style={{color:'white'}} className="timer">00:00:00</div>
                   </section>
                    <button className="penguin" style={{display:'none'}} onClickCapture={window.location.reload} >Go again?</button>
                    <button className="penguin" title="He's tough" onClickCapture={()=>{BigE.begin()}}>Begin?</button>
               </div>
           </section>
         </div>
       </div>
       </>)
    }

}
export default TypingTest