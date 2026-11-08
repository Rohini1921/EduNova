
// EduNova - Main JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to EduNova!");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            console.log("Welcome to your learning journey!");
        });
    }
});

