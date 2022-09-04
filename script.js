const myheader = new AutoTyping({
    id: 'test',
    typeText: ['Frontend', 'Backend', 'Minecraft'],
    textColor: '#C435C4',
    typeSpeed: 200,
    typeDelay: 200,
    typeRandom: false,
    deleteSpeed: 100,
    deleteDelay: 100,
    typeInfinity: true,
    cursor: '',
    cursorColor: '#C435C4',
    cursorSpeed: 300
})

myheader.init()

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

const displaySection = (section) => {
    document.getElementById('frontEndSection').style.display = 'none'
    document.getElementById('backEndSection').style.display = 'none'
    document.getElementById('minecraftSection').style.display = 'none'

    document.getElementById('frontEndBlock').style.backgroundColor = 'rgb(101, 79, 143, 0)'
    document.getElementById('BackEndBlock').style.backgroundColor = 'rgb(101, 79, 143, 0)'
    document.getElementById('MinecraftBlock').style.backgroundColor = 'rgb(101, 79, 143, 0)'


    if(section === "frontEnd") {
        document.getElementById('frontEndSection').style.display = 'block'
        document.getElementById('frontEndBlock').style.backgroundColor = 'rgb(101, 79, 143, 0.4)'
    } else if(section === "backEnd") {
        document.getElementById('backEndSection').style.display = 'block'
        document.getElementById('BackEndBlock').style.backgroundColor = 'rgb(101, 79, 143, 0.4)'
    } else if(section === "minecraft") {
        document.getElementById('minecraftSection').style.display = 'block'
        document.getElementById('MinecraftBlock').style.backgroundColor = 'rgb(101, 79, 143, 0.4)'
    }
}