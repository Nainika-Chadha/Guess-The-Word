player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("pl1_name").innerHTML=player1_name + " : ";
document.getElementById("pl2_name").innerHTML=player2_name + " : ";

document.getElementById("pl1_score").innerHTML=player1_score;
document.getElementById("pl2_score").innerHTML=player2_score;

document.getElementById("que").innerHTML="Question Turn- "+player1_name;
document.getElementById("ans").innerHTML="Answer Turn- "+player2_name;

function send_ans(){
word=document.getElementById("ansme").value;
w1=word.toLowerCase();

c1=w1.charAt(1);
len=Math.floor(w1.length/2);
c2=w1.charAt(len);
l1=w1.length-1;
c3=w1.charAt(l1);

r1=w1.replace(c1,"_");
r2=r1.replace(c2,"_");
r3=r2.replace(c3,"_");
console.log(r3);

Question="<h4 id='Qn'>Q.  " +r3+ "</h4>";
Answer="<span id='sp'><h4>Answer : </h4></span>&nbsp;&nbsp;&nbsp;<input id='ip' placeholder='Your Answer'><br><br>";
Check="<button id='bt' onclick='check()'>Check</button>";
row=Question+Answer+Check;
document.getElementById("output").innerHTML=row;
document.getElementById("ansme").innerHTML=" ";
}

function check(){

}