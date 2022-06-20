//This programme will 

import React from "react";

// App and Page functionality 

//choose username then begin.
    //text field for username, is presistent, stays on each page.
      //saves to local storage
        //check local storage for username, if detected skip create username.
          //choose username: basic page layout, texfield, confirm button. confirming username creates local storage file and takes you to next page.
            //code: basic html page layout with header and footer



//choose theme/quiz/topic or choose tasks which is more of a learning experience.
  //after username show two options, tasks or quiz. also display a symbol for opening overlay menu with the cheatsheet/s
    // quiz and tasks that leads to topic choice 



// do the quiz/ three options, one correct, continue to next question, get points at the end but not answers
    //selecting your answer takes you straight to the next question. quiz should be quick and simple
        //quiz is a more flowing experience with a faster pace



//choose tasks, here we want to see what the correct answers was and a more detailed summary at the end.
    //choose a topic and get a more detailed task oriented display?, more in depth questions and answers
      //choosing the correct answer gives checkmark, wrong answer shows x and or red background. click next to continue to next question.
          //task segment will be more static and detailed.






//cheatsheets just with some generel info like hotkeys, tips and tricks.
    //cheatsheet will have a button to display an overlay, possibly a topic selection as well with tips and tricks for specific topics.
      //transparent background? how many tips/topics?


   


                //*module section*

  //#header module#
    //contains username and overall points/score, seperate scores for tasks and quiz



  //#startpage module#
    //skipped if username detected.
      //contains the textfield for usename input + confirm button.
        //footer module on display here.


  //#mainpage module# 
    //contains all the elements + the quiz and tasks.


  //#quiz module#
    //more free-flowing faster paced simpler design


  //#tasks module#
    // more static, wrong or correct chosen answers have visual pointers/cues.
      //choose topic, javascript, html etc..


                //*ideas section*
      
//cheatsheets, on hover display text saying cheatsheets.

//on hover show seperate scores for quiz and tasks.



//app
  // header <-- username
  // mainpage --> username
    // switch betwene content
    // create user
    // quiz
    // tasks
    // cheetsheet
  // footer



















import Header from "./moduls/header"
import Main from "./moduls/main"
import Footer from "./moduls/footer"
import style from "./css/style.css"


function App() {
  const [username, setusername] = React.useState("username")




  // const quizQ = {
  //   q1:{
  //     question : "random text",
  //     answer1: [
  //       "right answer",
  //       true
  //     ],
  //     answer2: [
  //       "wrong answer",
  //       false
  //     ]
  //   }
  // }

class Question{
  constructor(question, answers, rightansnr){
    this.question = question
    this.answers = answers
    this.rightansnr = rightansnr -1
  }

  checkans(youranswer){
      if (youranswer == this.answers[this.rightansnr]){
        return true
      }else return false
  }


}

const q1 = new Question("hey", ["h1","h2"],1 )

console.log(q1.checkans("h1"));



  const [points, setPoints] = React.useState(0)

  

  return (
    <div className="container">
    <Header username={username} points={points}/>
    <Main/>
    <Footer/>
    </div>


  );
}

export default App;
