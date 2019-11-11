const redLight = document.querySelector('circle:nth-of-type(1)')
const yellowLight = document.querySelector('circle:nth-of-type(2)')
const greenLight = document.querySelector('circle:nth-of-type(3)')
const allLights = Array.from(document.querySelectorAll('circle'))

function randomColor() {
    return (Math.floor(Math.random() * 256))
}


redLight.addEventListener('click', () => {
    allLights.forEach((element) => {
        element.style.fill = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    })
})


// redLight.addEventListener('click', () => {
//     redLight.style.fill = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
// })

// yellowLight.addEventListener('click', () => {
//     yellowLight.style.fill = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
// })

// greenLight.addEventListener('click', () => {
//     greenLight.style.fill = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
// })