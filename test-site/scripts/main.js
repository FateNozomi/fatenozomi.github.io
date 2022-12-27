const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/IMG_3105.jpg") {
        myImage.setAttribute("src", "images/IMG_3095.jpg");
    } else {
        myImage.setAttribute("src", "images/IMG_3105.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Custom Mechanical Keyboard, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Custom Mechanical Keyboard, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
