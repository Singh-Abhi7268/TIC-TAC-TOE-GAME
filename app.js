let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//4th-1
const resetgame=()=>{
   turnO=true; 
   enableboxes();
   msgcontainer.classList.add("hide");
}
//1st-1
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked");
   if(turnO){
    box.innerText="0";
    turnO=false;
   }
   else{
    box.innerText="X";
    turnO=true;
   }
   box.disabled=true;

   checkwinner();
});
})
//3rd
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//4th-2
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}

//2nd
const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}

//1st-2
const checkwinner=()=>{
   for(let pattern of winpatterns) {
    let pos1val= boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val= boxes[pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!="" ){
      if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);

        showwinner(pos1val);
      }
    }
    
   }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);