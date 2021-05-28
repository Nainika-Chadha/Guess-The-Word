function log_btn(){
player1_name=document.getElementById("lg1").value;
player2_name=document.getElementById("lg2").value;
localStorage.setItem("player1",player1_name);
localStorage.setItem("player2",player2_name);
window.location="game_page.html";
}