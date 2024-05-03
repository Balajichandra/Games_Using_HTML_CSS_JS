const boxs = document.querySelectorAll('.box');
const status = document.querySelector('.status');
const btnRestart = document.querySelector('#restart');
let x = "<img src= 'X.png'>";
let o = "<img src= 'O.png'>";
x.height = '10px'; 
x.width = '10px';
const win = [
    [0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

let options = ["","","","","","","","",""];
let currentPlayer = x;
let player="X";
let running = false;
init();
function init(){
    boxs.forEach(box=>box.addEventListener('click',boxClick));
    btnRestart.addEventListener('click',restartGame);
    status.textContent = `${player} Your Turn`;
    running = true;
}
function boxClick(){
    const index = this.dataset.index;/*getting index number*/
    if(options[index]!=""/*if the index is not empty*/ || !running/*running if false*/ ){
        return;
    }
    updateBox(this,index);
    checkWinner();
}
function updateBox(box,index){
    options[index] = player;
    box.innerHTML = currentPlayer;
}
function changePlayer(){
    player=(player=='X') ? "O":"X";
    currentPlayer = (currentPlayer==x) ? o:x;
    status.textContent=`${player} Your Turn`;
}
function checkWinner(){
    let isWon = false;
    for(let i=0;i<win.length;i++){/* checking the win*/ 
        const condition = win[i];
        const box1 = options[condition[0]];
        const box2 = options[condition[1]];
        const box3 = options[condition[2]];
        if(box1=="" || box2==""||box2==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon=true;
        } 
    }
    if(isWon){
        status.textContent=`${player} Won`;
        running=false;
    } else if(!options.includes("")){
        status.textContent='Game Draw'
        running=false
    } else{
        changePlayer();
    }

}
function restartGame(){

}