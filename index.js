let word = document.querySelector(".box2 p");
word.addEventListener("click",()=>{
    word.style.position = "absolute";
    word.style.bottom = "0";
    word.style.textAlign = "center";
    word.style.animation = "move 3s";
    word.style.animationIterationCount = "1";
})