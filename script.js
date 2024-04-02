const heading = document.getElementById('heading')
const potato = document.getElementById('potato')
const price =document.getElementById('price')
const bdt = document.getElementById('bdt')
const rating = document.getElementById('rating')
const inf = document.getElementById('inf')

function got (){
    potato.innerHTML = '<img id="potato" src="./images/Panda.jpg" alt="">'
    potato.src = "./images/Panda.jpg"
    heading.innerHTML = '<p id="Heading" style = "margin: 0%; color: white;">Panda</p>'
    price.innerHTML = '<p id="price" style = "color: white; margin: 0%;">Class:</p>'
    bdt.innerHTML = '<p id="bdt" style = "color: white; margin: 0%; padding-left: 3px;">Animal</p>'
    rating.innerHTML = '<p id="rating" style = "color: white; margin: 0%;">Main Food: Bamboo</p>'
    inf.innerHTML = '<div style = "background-color: red; color: white;"></div>'
    inf.style = "display: none;"
}

const a = inf.addEventListener('click', got)

