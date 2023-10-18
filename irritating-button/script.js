const myButton = document.querySelector("button");
function handleMouseOver() {
    const newHeight = Math.floor(Math.random() * window.innerHeight);
    const newWidth = Math.floor(Math.random() * window.innerWidth);
    myButton.style.top = `${newHeight}px`;
    myButton.style.left = `${newWidth}px`;
}

function handleClick() {
    myButton.style.backgroundColor = "green";
    myButton.style.color = "yellow";
    myButton.innerText = "You have made it!"
    setTimeout(() => {
        const choice = confirm("Wanna Restart?");
        console.log(choice);
        if (choice) {
            window.location.reload();
        }
        else {
            myButton.removeEventListener("mouseover", handleMouseOver);
            myButton.removeEventListener("click", handleClick);
        }
    }, 0);
}
myButton.addEventListener("mouseover", handleMouseOver);
myButton.addEventListener("click", handleClick);