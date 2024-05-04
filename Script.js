let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Resetgame");
let newGameBtn = document.querySelector("#New-Game")
let msgcontainer = document.querySelector(".msgcontainer")
let msg = document.querySelector("#msg")


let turnO = true; // playerX; playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 8, 7],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false
        } else {
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true

        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);

        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}


const resetGame = () => {
turnO= true
 enableBoxes();
 msgcontainer.classList.add("hide")
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

