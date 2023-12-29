import React from 'react'
import '../components/BigE.css'
//https://static.wikia.nocookie.net/mrfz/images/c/c5/Emperor.png/revision/latest?cb=20200511132114
import Emperor from '../images/BigE.jpeg'
import LoyalToTheBeat from '../images/LoyalToTheBeat.jpeg'
class TypingTest extends React.Component{
  constructor(props){
    super(props)
    this.state={
      clicked:false
    }
    //Big E's flow
 this.penguin = {
  0: "Yeah, It’s the Emperor y’all, uh Don’t start with me I’ll bring an end to all Uh, Uh-huh, Uh, yeah, listen You better kneel to the Boss",
  1: "I ain’t come to play, I just come to slay Best believe today’s your lucky day, once I touch the stage Top spot forever, bruh these number never fluctuates Hottest thing alive when I shine I set the sun ablaze Make the Winter season feel like Summer days Forward ‘cause there ain’t no other way, no matter what awaits I am unafraid, I’ll never runaway Best to do it, done it, did it, flipped it ‘bout a hundred ways I’m just saying...",
  2: "Right?! I’m a winner bruh, you never equipped to win the fight Against the Emperor, listen up are you men or mice? I’m the pinnacle, quite formidable. Never seen the likes Of originals, making miracles, Y’all don’t see the light?! Y’all got your eyes closed. Off into my zone Fly like a meteor, I’m in the media, they want to be up in my throne Ride in the whip, yall gotta quit, got all of this on my own Tryin’ to hit me up on my phone, all that they get is the dial tone Take it all til there’s nothing’s left, that’s just how you get it right Yeah, they dying to be me, it’s no wonder that they can’t get a life Every time that they see me trying to eat off me like parasites No surprise. Only room at the top for one so step aside This is Big E, get me, these posers are merely lowercase Out of this world, at a loss for words, you don’t clearly know your place I put it down plain, I’m in the fast lane moving at a tortoise pace So unbothered I got a permanent poker face, enjoy the race",
  3: "I ain’t come to play, I just come to slay Best believe today’s your lucky day, once I touch the stage Still number one, bruh these numbers never fluctuate Put your drive to the test, see me, better pump your breaks Crew got more runners than the Summer games Forward ‘cause there ain’t no other way, no matter what it takes I am unafraid, I’ll never runaway Best to do it, done it, did it, flipped it ‘bout a hundred ways I’m just saying...",
  4: "Though! Yo! You dealing with a pro! Had to let’em know They get ate like Ocho Don’t make me embarrass you, keep that on the low low P.L. crew up in this piece and your crew is a no show Loco, testing me and li’l homie solo Legend in the streets, on the mic a virtuoso They say that they’re ready, for their sake, I really hope so Out here making history you better snap a photo Fakers out here hating on me they don’t want this work Trying to knock me off the throne but your boy been known to swerve Wanna off me just get on but these peons are absurd Ambitions of ascension but I keep their dreams deferred Wanna knock me off the top but I’m laughing while they’re reaching I will never stop shining down on them like beacons Grinding thru the weekend and I don’t need a reason Full throttle is my motto ‘til I’m riding off the deep end",
  5: "Doubt you want a problem, but keep on talking then it’s bout to be They said the sky’s the limit but they lied ‘cause ain’t no topping me You ain’t as live as me. How can there be a rivalry? Loneliest at the top you see I’m enjoying my privacy I am feeling so fresh worked to be the best Workin hard and playing hard and I don’t need no rest Livin' like a King nothing but winners on my team Going hard I know the cost, just blowing off some steam This is how I get it done just trying to have a little fun I walk through fire, make rivers run, I been the one, not two So listen up, my dude, every member of my crew Since little ones, weren’t putting up with simpletons or fools No giving up can’t lose won’t take what I can’t use Spread my wing and stretching out cuz I’m about to get loose. The Emperor will get on with anyone you choose Let’em tell it on the news. When it’s said and done I’m through!"
}
this.sections = {
  1: 'Bridge1',
  2: 'Verse1',
  3: 'Bridge2',
  4: 'Verse2',
  5: 'Verse3'
}
//fun REGEXP shenanigans
//In glitch, you can't have a line break in a string, at least as far as I tested it
// but instead of me going through to make it look better, which would be tedious, I 
// let JavaScript REGEXP and STRING.split() do the work
this.matcher = /(?<![tT]he)(?<=[a-z.?!])\s(?=[A-Z])(?!I\s[tsgkdc][oehna][uiteno]|Summer|Off|Only|Big|Never|E,|Ocho|King|How|When|Yo!|You\sd|They\sg|I’m\s[alret][\sabinh][dojurw])/;
//The full text looked clunky, so this holds seperate pieces of the above penguin array
this.penguin_holder = {};
this.index = 1;
this.stopSetInterval = {};
this.start = {};
this.breakpoints = [18.1,43.7,93.2,118,168.01,218];

this.errors = 0;
this.currentUserText = "";
this.currentVerse = "";
this.yourScores = {};
}

  //A completely unncessary script
componentDidMount(){
  //console.log(this.reloadCount)
  if(!sessionStorage.getItem('reloadCount')) {
    sessionStorage.setItem('reloadCount', 1);
    alert('forgive the bad css. Will look into it at somepoint. Also refresh if you want to stop music')
  } 
this.testArea = document.querySelector("#test-area");
this.originText = document.querySelector("#origin-text");
this.extra = document.querySelector("#visual-text");
this.theTimer = document.querySelector(".timer");
this.yourScoreboard = document.querySelectorAll("tbody")[1];
this.testWrapper = document.querySelector(".test-wrapper");
}

//update the HTML to display text
penguinLines = (index,start, end,target) =>
{
  target.innerHTML="";
  for (var i=start; i < end; i++)
  {
    var element = document.createElement("template");
    element.innerHTML = (target==this.originText) ? '<p>'+this.penguin_holder[index][i]+'</p>' :
    ((index==2) ? '<p style="margin-top:0;margin-bottom:1.5em;">'+this.penguin_holder[index][i]+'</p>' : '<p style="margin-top:0;">'+this.penguin_holder[index][i]+'</p>');
    target.appendChild(element.content.firstChild);
  }
}
begin =()=> {
//play the audio
if(!this.state.clicked)
{
let bigE = document.querySelectorAll("img")[0]
var theme = require('../images/EmperorTheme.mp3')
bigE.className= "BigE"
let bgm = new Audio(theme);
bgm.volume = 0.25; // adjust this as you need, i like 0.5  
bgm.play()
  for(var key in this.penguin)
  {
    this.yourScores[key] = "";
    this.penguin_holder[key] = this.penguin[key].split(this.matcher);
  }
  this.yourScores[0] = {"wpm": 0, "incorrect": 0, "time": "00:18:10", "percentage" : 1};
  this.start = new Date();
  this.stopSetInterval = setInterval(this.timer,10);
  //play all verses in sync on a delay
  setTimeout(this.intro,this.breakpoints[0]*1000);
  setTimeout(this.Bridge1,this.breakpoints[1]*1000);
  setTimeout(this.Verse1,this.breakpoints[2]*1000);
  setTimeout(this.Bridge2,this.breakpoints[3]*1000);
  setTimeout(this.Verse2,this.breakpoints[4]*1000);
  setTimeout(this.Verse3,this.breakpoints[5]*1000);
}
this.setState({clicked: true})
}
//I don't expect you to beat Big E, so here is a projected time
adjusted = (index) =>
{
  let previous = this.yourScores[index-1]["time"];
  let interval = this.breakpoints[index] - this.breakpoints[index - 1];
  let projectedTimeInSeconds = interval/(this.yourScores[index]["percentage"]);
  let adjustedTime = this.convertTime(projectedTimeInSeconds + this.timerConvert(previous));
  this.yourScores[index]["time"] = adjustedTime;
  return adjustedTime;
  
}
//change time in seconds to our Timer format
convertTime = (time)=>
{
  let timeInMilliSeconds = time * 1000;
  var hours = Math.floor((timeInMilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((timeInMilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((timeInMilliSeconds % (1000 * 60)) / 1000);
  var hundreths =  Math.floor((timeInMilliSeconds % 1000)/10);
  return (hours==0) ? ("0"+mins).slice("-2")+":"+("0"+secs).slice("-2")+":"+("0"+hundreths).slice("-2") : ("0"+hours).slice("-2")+":"+("0"+mins).slice("-2")+":"+("0"+secs).slice("-2")+"."+("0"+hundreths).slice("-2");
}
//dislay the stats at the end
displayScores = () =>
{
  let penguinScoreboard = document.querySelector("#scores");
  let body = penguinScoreboard.querySelector("tbody");
  var template = document.createElement("template");
  for(var i=1; i<6; i++)
    {
        let wpm = Math.floor(60*(this.penguin[i].split(" ").length/(this.breakpoints[i] - this.breakpoints[i - 1])))
        template.innerHTML = '<tr><td>'+this.sections[i]+'</td><td>100%</td><td>0</td><td>'+this.convertTime(this.breakpoints[i])+'</td></tr>';
        body.appendChild(template.content.firstChild);
        let result = (this.timerConvert(this.yourScores[i]["time"]) > this.breakpoints[i]) ? this.yourScores[i]["time"] : this.adjusted(i);
        let string = '<tr><td>'+this.sections[i]+'</td><td>'+Math.floor(this.yourScores[i]["percentage"]*100)+'%</td><td>'+this.yourScores[i]["wpm"]+'</td><td>'+result+'</td></tr>';
        template.innerHTML = string; 
        this.yourScoreboard.appendChild(template.content.firstChild);
    }
  penguinScoreboard.style.display="inherit";
}

// clean up code to calculate some fun little stats
cleanup=()=>{
  if(this.testArea.hasAttribute("disabled"))
    {
      this.testArea.removeAttribute("disabled");
    }
  this.currentUserText = this.testArea.value;
  this.testWrapper.style.borderColor = "gray";
  if(this.currentVerse.length !== this.currentUserText.length)
    {
      this.storeTime(this.convertTime(this.breakpoints[this.index]));
      //avoid divide by 0 later and give you a benefit of the doubt
      this.yourScores[this.index]["percentage"] = (this.testArea.value.length != 0) ? this.testArea.value.length/this.currentVerse.length : 0.1;
      this.yourScores[this.index]["wpm"] = this.wpm();
    }
  this.yourScores[this.index]["incorrect"] = this.checkAgainstVerse(this.currentUserText, this.currentVerse);
  this.index++;
}
// Below are the various functions that handle the flow of the track
Verse3=()=>
{
  this.extra.style.display = "none";
  this.cleanup();
  clearInterval(this.stopSetInterval);
  this.displayScores();
  document.querySelector(".penguin").style.display = "inherit";
  document.querySelectorAll(".penguin")[1].style.display = "none";
  document.querySelectorAll("table")[1].style.display = "inherit";
  this.testWrapper.style.display="none";
  this.originText.style.display="none";
}
Verse2=()=>
{
  this.extra.style.display = "none";
  this.cleanup();
  let halfway = this.penguin_holder[this.index].length/2;
  this.penguinLines(this.index, 0, halfway, this.extra);
  this.penguinLines(this.index, halfway, this.penguin_holder[this.index].length, this.originText);  
  this.extra.style.display = "inherit";
  this.currentVerse = this.penguin[this.index];
  this.testArea.value = "";
}
Bridge2=()=>
{
  this.extra.style.display = "inherit";
  this.cleanup();
  let halfway = this.penguin_holder[this.index].length/2;
  this.penguinLines(this.index, 0, halfway, this.extra);
  this.penguinLines(this.index, halfway, this.penguin_holder[this.index].length, this.originText);  
  this.currentVerse = this.penguin[this.index];
  this.testArea.value = "";
}
Verse1=()=>
{
  
  this.extra.style.display = "none";
  this.cleanup();
  this.penguinLines(this.index, 0, this.penguin_holder[this.index].length, this.originText);
  this.currentVerse = this.penguin[this.index];
  this.testArea.value = "";
}
Bridge1=()=>
{
  
  this.cleanup();
  let halfway = this.penguin_holder[this.index].length/2;
  this.penguinLines(this.index, 0, halfway, this.extra);
  this.penguinLines(this.index, halfway, this.penguin_holder[this.index].length, this.originText);  
  this.extra.style.display = "inherit";
  this.currentVerse = this.penguin[this.index];
  this.testArea.value = "";
}
intro=()=>
{
  this.penguinLines(this.index, 0, this.penguin_holder[this.index].length, this.originText);
  this.testArea.value = "";
  this.testArea.addEventListener("input",this.textCheck);
  this.currentVerse = this.penguin[this.index];
}


//tally the incorrect letters
checkAgainstVerse = (user, target)=>
{
  let currentIndex = 0; 
  var incorrectLetters = 0;
  for(var i=0; i < user.length; i++)
    {
      if(user[i] == "\n" &&  target[i] == " ")
        {
          continue;
        }
      else
        {
      incorrectLetters = (user[currentIndex] !== target[currentIndex]) ? incorrectLetters + 1 : incorrectLetters;
        }
    }
  return incorrectLetters;
}
// Like the assignment this cares for notifying the user if they are on the right track
// A simple color change shows if it is right, but red for wrong felt like too much
// So this check only shows if you, up to a certain point, typed it correctly;
textCheck=(event)=>{
  
  if(event.inputType == "insertText" || event.inputType == "deleteContentBackward" || event.inputType == "insertLineBreak")
  { 
      if(this.currentVerse.length != this.testArea.value.length)
        {
          let rightnow = this.testArea.value.length - 1;
          let result = this.testArea.value[rightnow] == this.currentVerse[rightnow];
          if(this.testArea.value[rightnow] == "\n" || this.testArea.value[rightnow] == "'")
            result = true;
          if(!result)
            result = false;
          this.testWrapper.style.borderColor = result ? "dodgerblue": "gray";
        }
      else
        {
          this.storeTime(this.theTimer.innerHTML);
          this.testArea.disabled = "disabled";
        }
    }
  if(event.inputType == "insertFromPaste")
    {
      this.testArea.value = "";
      alert("Oops!!! Lost all progress");
    }
}
timer =()=> 
{ 
  var now = new Date().getTime(); 
  var t = now - this.start.getTime();
  //a lot of math, but it's just unit conversion
  var mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var secs = Math.floor((t % (1000 * 60)) / 1000);
  var hundreths =  Math.floor((t % 1000)/10);
  this.theTimer.innerHTML = ("0"+mins).slice("-2")+":"+("0"+secs).slice("-2")+":"+("0"+hundreths).slice("-2");
}

// for now disregard errors
wpm=()=>
{    
    let time = this.theTimer.innerHTML.split(":");
    let total_seconds = parseInt(time[0] * 60, 10) + parseInt(time[1], 10) + parseFloat(time[2] / 100);
    let wpm = Math.floor(this.testArea.value.length / 5 / (total_seconds / 60));
    return wpm;
    
}
storeTime=(time)=>
// stores the time and also keeps the ranking correct, with top3[0] being the fastest time
{
  if(this.yourScores[this.index]["time"])
  {
    this.yourScores[this.index]["time"] = time;
  }
  else
    {
      var temp = {"wpm": 0, "incorrect": 0, "time": time, "percentage" : 1};
      this.yourScores[this.index] = temp;
    }
}
timerConvert=(time)=>
{
  let newT = time.split(":");
  return parseInt(newT[0] * 60, 10) + parseInt(newT[1], 10) + parseFloat(newT[2] / 100);
}
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
                    <button className="penguin" style={{display:'none'}} onClick={()=>window.location.reload(false)} >Go again?</button>
                    <button className="penguin" title="He's tough" onClick={this.begin}>Begin?</button>
               </div>
           </section>
         </div>
       </div>
       </>)
    }

}
export default TypingTest