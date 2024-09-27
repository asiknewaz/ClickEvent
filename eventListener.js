const myBox = document.getElementById("myBox");
myBox.addEventListener("click",event=>{
    event.target.style.backgroundColor = "red"
    console.log(event)
})

