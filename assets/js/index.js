import Board from "./board.js";

let board = new Board(); // creates a new game board
let box;
window.onload = () => {

   

    for (let row in board.grid){
        const rowDiv = document.createElement("div")
        rowDiv.setAttribute("data-start-row", row)
        rowDiv.style.display = "flex"
        rowDiv.style.flexFlow = "row"
    
        for (let column in board.grid[row]){
            box = document.createElement("div");
            box.setAttribute("data-row", row)
            box.setAttribute("data-column", column)
            
            box.style.boxSizing = "border-box"
            box.style.border = "1px solid black"
            box.style.height = "11vw"
            box.style.width = "11vw";

            rowDiv.appendChild(box)

            box.addEventListener("click", event => {
                let row = event.target.getAttribute("data-row")
                let column = event.target.getAttribute("data-column")
                // console.log(board.makeHit(row, column))
                // console.log(column)
                let result = board.makeHit(row, column)
                if(result !== null){
                    event.target.style.backgroundColor = "green"
                    event.target.innerText = result
                    event.target.style.display = "flex"
                    event.target.style.justifyContent = "center";
                    event.target.style.alignItems = "center";
                    event.target.style.fontSize = "25px";

                    // board.numRemaining -= 1
                    console.log(board.numRemaining)
                } else {
                    event.target.style.backgroundColor = "red"
                }


                if(board.isGameOver()){
                    event.preventDefault()

                     let title = document.querySelector("h1");
                     const message = document.createElement("h2");
                     message.innerText = "YOU WIN!"
                     console.log(message)
                     title.append(message);
                }
            })
        }
        document.body.appendChild(rowDiv)
        
    }
    
}





// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here