let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

let winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [1,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerHTML = "O";
            // console.log(box);+
            turn0 = false;
        }else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disable = true;
        count++;
        checkwinner();
    });
});

const showWinner = (winner) =>{
    msg.innerText = 'The winner is $(winner)';
    msgContainer.classList.remove('hide'); 
}

const checkwinner = () =>{
    for(let pattern of winpattern){
        let pos1value = boxes[pattern[0]];
        let pos2value = boxes[pattern[1]];
        let pos3value = boxes[pattern[2]];

        if(pos1value != " " && pos2value != "" && pos3value != ""){
            if(pos1value == pos2value && pos2value == pos3value){
                showWinner(pos1value);
                return true;
            }
        }
    }
}