let boxes = document.querySelectorAll("#box");
let newGame = document.querySelector("#restart");
let msg =document.querySelector("#msg");
let winnerAnnouncement = document.querySelector(".winnerAnnouncement");
let Reset = document.querySelector("#reset");

let turnO = true;
const wining =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
newGame.addEventListener("click",()=>{
    console.log("nhgfd");
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        winnerAnnouncement.classList.add("hide");
        Reset.disabled=false;

    })
})
Reset.addEventListener("click",()=>{
    console.log("nhgfd");
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        // winnerAnnouncement.classList.add("hide");

    })
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("button clicked");
        // box.innerText ="X";
        if(turnO){
            box.innerText ="O";
            
            turnO = false;
        }else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    })
})
const buttonDisable=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const Draw=(positionOne)=>{
    msg.innerText = ("Draw");
    winnerAnnouncement.classList.remove("hide");
    Reset.disabled=true;
    };


const showWinner=(positionOne)=>{
msg.innerText = `Congratulation, Winner is ${positionOne}`;
winnerAnnouncement.classList.remove("hide");
Reset.disabled=true;
};
const checkWinner=(()=>{
    for(wins of wining){
       
          let positionOne= box[wins[0]].innerText;
          let positionTwo =box[wins[1]].innerText;
          let positionThree= box[wins[2]].innerText;

          if(positionOne !=""&& positionTwo!="" &&positionThree!=""){
            if(positionOne === positionTwo&& positionTwo===positionThree){
                buttonDisable();
                showWinner(positionOne);   
            }

            
          }else if(positionOne !=""&& positionTwo!="" &&positionThree!=""){
            if(positionOne != positionTwo && positionTwo!=positionThree || positionOne!=positionThree ){
                Draw();
                   
            }
    
    
        }}
})