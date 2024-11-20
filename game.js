let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=true;
let count=0;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (box.disabled) return;
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        count=count+1;
        if(checkwinner()) return;
        if (count==9){
            showDraw();
        }       

    });
});
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showDraw=()=>{
    msg.innerText=`The Game is a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{
    for(let pattern of win){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos3val===pos2val){
                showWinner(pos1val);
                return true;
            }
        }
    }return false;
};
const resetGame=()=>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);