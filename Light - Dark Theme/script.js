'use strict';

const toggler = document.querySelector('.btn')

toggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme")
    document.body.classList.toggle("dark-theme")

    // changing the text
    const className = document.body.className
    if (className == "light-theme") {
        toggler.innerHTML = "Dark"
    } else {
        toggler.innerHTML = "Light"
    }

    console.log(`current class name: ${className}`)
})