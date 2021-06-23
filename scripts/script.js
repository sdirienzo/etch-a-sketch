function clearGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
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
}

let container = document.getElementsByClassName("container")[0];