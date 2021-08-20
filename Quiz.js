class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   question.input1.hide();
   question.input2.hide();
   question.title.hide();
   question.button.hide();
   question.question.hide();
   

    //write code to change the background color here
background("YellowGreen");
    //write code to show a heading for showing the result of Quiz
text("RESULT",300,300);
    //call getContestantInfo( ) here
getContestantInfo();

    //write condition to check if contestantInfor is not undefined
if (allContestants!==undefined){

    //write code to add a note here
fill("blue");
text("NOTE: The contestants who gave the correct answer are highlighted in green"
,100,500);
    //write code to highlight contest who answered correctly
for (var plr in allContestants){

var correctAnswer = "2";
if (correctAnswer === allContestants[plr].answer){
  fill("green");
  text(contestant.name,contestant.answer,300,600)
}
else{
  fill("red");
}
}



  }    
  }

}
