
const change = document.getElementById('change')
change.addEventListener('click', () => {
    change.textContent = "texte apres avoir mis le js"
    }
)

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    btn.style.color = "white"
    btn.style.backgroundColor = "black"
    }
)

const text = document.getElementById('text')
text.addEventListener('click', () => {
    text.textContent = "Avec le js"
    }
)

const myimage = document.getElementById('myimage')
myimage.addEventListener('click', () => {
    myimage.src = 'img/images.jpeg'
}
    )

const background = document.getElementById('background')
background.addEventListener('click', () => {
    background.style.backgroundColor = "green"
}
    ) 
    
const clicked = document.getElementById('clicked')
clicked.addEventListener('click', () => {
    background.style.fontWeight = "bold"
    }
)    