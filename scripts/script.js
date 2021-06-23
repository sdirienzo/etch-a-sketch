const GRID_SIZE = 720;
const MAX_CELLS_PER_SIDE = 100;
const MIN_CELLS_PER_SIDE = 1;
const DEFAULT_GRID_ROWS = 16;
const DEFAULT_GRID_COLUMNS = 16;
const CELL_CLASS_NAME = "cell";

const container = document.getElementsByClassName("container")[0];
const changeSizeBtn = document.getElementById("change-btn");

function clearGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    return;
}

function createGrid(container, rows, columns) {
    document.documentElement.style.setProperty("--grid-rows", rows);
    document.documentElement.style.setProperty("--grid-columns", columns);
    document.documentElement.style.setProperty("--cell-height", `${(GRID_SIZE/rows)}px`);
    document.documentElement.style.setProperty("--cell-width", `${(GRID_SIZE/columns)}px`);
    for (let index = 0; index < (rows * columns); index++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        container.appendChild(newDiv);
    }

    colorGrid(getCells(CELL_CLASS_NAME));
    
    return;
}

function getCells(className) {
    return document.getElementsByClassName(className);
}

function colorGrid(cellNodeList) {
    for (let index = 0; index < cellNodeList.length; index++) {
        let cell = cellNodeList[index];
        cell.addEventListener("mouseover", function(event) {
            cell.style.backgroundColor = "black";
            return;
        });
    }
    return;
}

function getGridSizeFromUser() {
    //Will not handle strings that cannot convert to integer
    return parseInt(prompt("Enter grid size 1 - 100"));
}

function isValidGridSize(size) {
    if (size < MIN_CELLS_PER_SIDE || size > MAX_CELLS_PER_SIDE) {
        return false;
    } else {
        return true;
    }
}

function changeGridSize() {
    let size = 0;
    do {
        size = getGridSizeFromUser();
    } while (!isValidGridSize(size));
    
    clearGrid(container);

    createGrid(container, size, size);
}

//Init default grid on page load
createGrid(container, DEFAULT_GRID_ROWS, DEFAULT_GRID_COLUMNS);

changeSizeBtn.addEventListener("click", function() {
    changeGridSize();
});