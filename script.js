console.log("page loaded...");


//let clip = document.querySelector('#clip');
function onHover(element) {
    element.play();

}
function offHover(element) {
    element.pause()
    increment()
}

let views = document.querySelector("#views")
//console.log(views)

let numClicks = 0
function increment() {
    numClicks++
    views.innerText = numClicks
}


