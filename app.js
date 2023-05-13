var input = document.getElementById("Inp")
input.value = 0
// var Val = input.value

// console.log(parseInt(input.value)+ 2 +1)
function Inc(){
    var dis = parseInt(input.value) + 1
    input.style.color = "green"
    input.value = dis

}

function Res(){
    input.value = 0
    input.style.color = "white"
}

function Dec(){
    var dis = parseInt(input.value) - 1
    input.style.color = "red"
    input.value = dis
}