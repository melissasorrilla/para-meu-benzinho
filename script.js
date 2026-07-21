// ===============================
// ELEMENTOS
// ===============================

const pages = document.querySelectorAll(".page");

const nextButtons = document.querySelectorAll(".next");

const openButton = document.getElementById("openBook");

const restartButton = document.getElementById("restart");

let currentPage = 0;


// ===============================
// MOSTRAR PÁGINA
// ===============================

function showPage(index){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage = index;

    if(index===3){

        letter.innerHTML="";

        indexLetter=0;

        typeLetter();

    }

}


// ===============================
// ABRIR LIVRO
// ===============================

openButton.addEventListener("click", () => {

    showPage(1);

});


// ===============================
// BOTÕES CONTINUAR
// ===============================

nextButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(currentPage < pages.length-1){

            showPage(currentPage+1);

        }

    });

});


// ===============================
// RECOMEÇAR
// ===============================

restartButton.addEventListener("click", () => {

    showPage(0);

});
// ===============================
// FRASES DAS FOTOS
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

const photoMessage = document.getElementById("photoMessage");

const messages = [

    "Amo passar o tempo com vc💚",

    "Adoro seus beijos",

    "amo todos nossos momentos",

    "somos beijoqueiros demais",

    "Te amo cada dia mais💚"

];

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        photoMessage.textContent = messages[index];

    });

});

// ===============================
// CARTA
// ===============================

const letter = document.getElementById("letter");

const letterText = `Meu benzinho, eu sou muitoo feliz por ter você na minha vida. Você é um homem incrível, inteligente, criativo, amoroso, romântico, lindíssimo, fofinho, forte, gostoso, engraçado e tantas e tantas qualidades. Você é uma pessoa admirável amor e eu te amo demais. Hoje passamos nossos aniversários longe um do outro, mas em breve passaremos agarradinhos. Feliz vidaaa delícia💚💚 


Com amor,

Melissa`;

let indexLetter = 0;

function typeLetter(){

    if(indexLetter < letterText.length){

        letter.innerHTML += letterText.charAt(indexLetter);

        indexLetter++;

        setTimeout(typeLetter,35);

    }

}
// ===============================
// ENVELOPE
// ===============================

const openEnvelope = document.getElementById("openEnvelope");

const flap = document.getElementById("flap");

const voucher = document.getElementById("voucher");

const nextFinal = document.getElementById("nextFinal");

openEnvelope.addEventListener("click",()=>{

    flap.style.transform="rotateX(180deg)";

    voucher.style.bottom="5px";

    openEnvelope.style.display="none";

    nextFinal.style.display="inline-block";

});