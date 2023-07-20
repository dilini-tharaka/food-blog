function navigate(link) {
    window.location = link;
}

function sendMessage() {
    var message = document.getElementById("message");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var isValid = true;

    // error messages
    var mobileError = document.getElementById("error-mobile");
    var emailError = document.getElementById("error-email");
    var messageError = document.getElementById("error-message");
    var nameError = document.getElementById("error-name");

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const mobileRegex = /^(?:7|0|(?:\+94))7[0, 1, 2, 4, 5, 6, 7, 8]{1}[0-9]{7}$/;

    if(!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
        emailError.style.display = "block";
        isValid = false;
    } else {
        email.style.border = "none";
        emailError.style.display = "none";
    }
    
    if(!mobileRegex.test(mobile.value)) {
        mobile.style.border = "2px solid red";
        mobileError.style.display = "block";
        isValid = false;
    } else {
        mobile.style.border = "none";
        mobileError.style.display = "none";
    }
    
    if(message.value == "") {
        message.style.border = "2px solid red";
        messageError.style.display = "block";
        isValid = false;
    } else {
        message.style.border = "none";
        messageError.style.display = "none";
    }
    
    if(name.value == "") {
        name.style.border = "2px solid red";
        nameError.style.display = "block";
        isValid = false;
    } else {
        name.style.border = "none";
        nameError.style.display = "none";
    }

    if(isValid){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message Sent Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        message.value = "";
        name.value = "";
        email.value = "";
        mobile.value = "";
    }
}

var img = document.getElementById("dontwaste");
let margin = 0;
var worker;

function moveObject() {
    worker = setInterval(function(){
        if(margin > (window.innerWidth - dontwaste.clientWidth - 50)) {
            clearInterval(worker);
        }
        img.style.marginLeft = margin + "px";
        margin += 1;
    }, 2);
}

window.addEventListener("scroll", function() {
    if(window.scrollY > 1200) {
        if(worker == null) {
            moveObject();
        }
    } 
});



const carousel = document.getElementById("carousel");
const images = [
    "./img/carousel-1.jpg",
    "./img/carousel-3.jpg",
    "./img/carousel-2.jpg",
];

let currennt = 0;
function moveRight() {
    currennt++;
    if(currennt == images.length) {
        currennt = 0;
    }
    carousel.src = images[currennt];
}

function moveLeft() {
    currennt--;
    if(currennt == -1) {
        currennt = images.length - 1;
    }
    carousel.src = images[currennt];
}

setInterval(moveRight, 3000);

function makeLarge() {
    var img = document.getElementById("logo");
    img.style.transform = "scale(1.05)";
}

function makeNormal() {
    var img = document.getElementById("logo");
    img.style.transform = "scale(1)";
}

// var index = 0;
// setInterval(() => {
//     if(index == 0) {
//         makeLarge();
//         index = 1;
//     } else {
//         makeNormal();
//         index = 0;
//     }
// }, 200);