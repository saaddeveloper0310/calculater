// const inputBox = document.getElementById("input-box")

function AddTask(saad) {
    const inputBox = document.getElementById("input-box")
    inputBox.value += saad
}

function AddTask1(saad) {
    const inputBox1 = document.getElementById("input-box")
    inputBox1.value =" " 
}
function AddTask2(saad) {
    const inputBox2 = document.getElementById("input-box")
    inputBox2.value = inputBox2.value.slice(0,-1) 
}
function AddTask3() {
    const inputBox3 = document.getElementById("input-box")
    inputBox3.value = eval(inputBox3.value); 
}