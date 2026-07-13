
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


const alerte = document.getElementById('alerte')
alerte.addEventListener('click', () => {
    alert("vous avez cliquer sur le boutton")
    }
)

const myinput = document.getElementById('myinput')
myinput.addEventListener('keydown', () => {
    if(myinput.value.length > 0){
        myinput.style.Color = "green"
    }
    });

 console.log(myinput.value.length)  

const maListe = document.getElementById('maListe');
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    if (itemInput.value.trim() !== "") {
        const nouveauLi = document.createElement('li');
        nouveauLi.textContent = itemInput.value;
        
        
        nouveauLi.addEventListener('click', () => {
            nouveauLi.remove();
        });
        
        maListe.appendChild(nouveauLi);
        itemInput.value = ""; 
    }
});


const monBouton = document.getElementById('monBouton');
const monElement = document.getElementById('monElement');
monBouton.addEventListener('click', () => {
    monBouton.classList.add('active');
    monElement.classList.remove('hidden');
});
monElement.addEventListener('click', () => {
    monElement.classList.remove('hidden');
});