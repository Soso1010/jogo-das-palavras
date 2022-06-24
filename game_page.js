player1Name = localStorage.getItem("player1Name"); //busca o nome do jogador1 no armazenamento local e o armazena em uma variável 
//faça o mesmo para o jogador2
player2Name = localStorage.getItem("player2Name");

player1Score = 0; //define a variável para armazenar a pontuação do jogador1 e seu valor para 0
//faça o mesmo para o jogador2
player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : "; //atualiza o nome do jogador1 nos respectivos elementos HTML, usando seu id
//faça o mesmo para o jogador2
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1Score ; //atualiza a pontuação do jogador1 nos elementos HTML, usando o id player1Score
//faça o mesmo para o jogador2
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ; //atualiza o elemento HTML, usando o id criado antes
//com o nome do jogador que é a vez de responder (que é o jogador1)
//faça o mesmo com o jogador2
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

//código para o botão enviar (crie a função send)
function send(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log("palavra em caixa baixa=" + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthDivide2= Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide2);
    console.log(charAt2);

    lengthMinus1=word.length - 1;
    charAt3=word.charAt(lengthMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = "<h4 id= 'wordDisplay'> P. " +removeCharAt3+ "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row= question_word + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}

questionTurn="player1";
answerTurn="player2";

function check(){
    getAnswer=document.getElementById("inputCheckBox").value;
    answer=getAnswer.toLowerCase();
    console.log("resposta - " + answer);

    if(answer==word){
        if(answerTurn=="player1"){
            player1Score=player1Score + 1;
            document.getElementById("player1Score").innerHTML=player1Score;
        }
        else{
            player2Score=player2Score + 1;
            document.getElementById("player2Score").innerHTML=player2Score;
        
        }
    }
    
        if(questionTurn=="player1"){
           questionTurn="player2";
            document.getElementById("playerQuestion").innerHTML="turno de pergunta - " + player2Name;
        }
        else{
            questionTurn="player1";
            document.getElementById("playerQuestion").innerHTML="turno de pergunta - " + player1Name;
        




        }
        
        if(answerTurn=="player1"){
            answerTurn="player2";
             document.getElementById("playerAnswer").innerHTML="turno de resposta - " + player2Name;
         }
         else{
             answerTurn="player1";
             document.getElementById("playerAnswer").innerHTML="turno de resposta - " + player1Name;
         
         }
         document.getElementById("output").innerHTML="";
    }
   





