const DEFAULT_GRID_ROWS = 16;
const DEFAULT_GRID_COLUMNS = 16;
const CELL_CLASS_NAME = "cell";
const container = document.getElementsByClassName("container")[0];

function clearGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    return;
}

function createGrid(container, rows, columns) {
    document.documentElement.style.setProperty("--grid-rows", rows);
    document.documentElement.style.setProperty("--grid-columns", columns);
    document.documentElement.style.setProperty("--cell-height", `${(960/rows)}px`);
    document.documentElement.style.setProperty("--cell-width", `${(960/columns)}px`);
    for (let index = 0; index < (rows * columns); index++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("cell");
        container.appendChild(newDiv);
    }

    addHoverEventListenerToCells(getCells(CELL_CLASS_NAME));
    
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

//Init default grid on page load
createGrid(container, DEFAULT_GRID_ROWS, DEFAULT_GRID_COLUMNS);






