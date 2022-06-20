

export default function Questions(){
    class Question{
        constructor( type, question, answers, rightansnr){
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
      
      const q1 = new Question("html", "hey", ["h1","h2"],1 )
      
      console.log(q1.checkans("h1"));



      return( {


      })

}