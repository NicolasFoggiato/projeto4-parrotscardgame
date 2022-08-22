let qtdeCartas;
let personagens = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif", 
    "tripletsparrot.gif",
    "unicornparrot.gif"
];
let baralho = [];
let jogadas = 0;
let primeiraCarta;
let segundaCarta;

function paraJogar(){
     qtdeCartas = Number (prompt("Para jogar insira um número entre 4 e 14, lembrando só vale número par!"));
    if (qtdeCartas > 14 || qtdeCartas < 4 || qtdeCartas === NaN || qtdeCartas %2 !==0){
        alert("Número inválido")
        paraJogar();
    }
    comecaJogo();
     }
    paraJogar()

    function puxarCartas(){
        for (let i = 0; i < qtdeCartas; i++){
            document.querySelector('.container').innerHTML +=`
         <div class="memory-card" onclick="virarCarta(this)">
            <div class="face front"> 
                <img src='./imagens/backcarta.png'>
            </div>
            <div class="face back">
                <img src ='./imagens/${baralho[i]}'>
            </div>
        </div>

            `
        }
    }
  
    function virarCarta(card){
        
        card.classList.add("virar")
        if(primeiraCarta === undefined){
            primeiraCarta = card
        } else if(segundaCarta === undefined){
            segundaCarta = card
        }
        if(primeiraCarta.innerHTML === segundaCarta.innerHTML){
            primeiraCarta = undefined;
            segundaCarta = undefined;
            jogadas++
            
        } else{
            setTimeout(cartaVirada, 1000)
        }

    }

    function cartaVirada(){
        primeiraCarta.classList.remove("virar")
        segundaCarta.classList.remove("virar")
        primeiraCarta = undefined;
        segundaCarta = undefined;
    }

    function random() { 
        return Math.random() - 0.5; 
    }

    function comecaJogo(){
        for (let i =0; i < qtdeCartas /2; i++){
            let cartas = personagens[i]
            baralho.push(cartas);
            baralho.push(cartas);
            
        }
        baralho.sort(random)
        puxarCartas()
    }

    // if se contador de acertos for = a metade da quantidade de cartas alert finaliza jogo
// const card = document.querySelector('.container');

     

// let cardHTML = '';

// personagens.forEach(imagens => {
//     cardHTML += `
//     <div class ='memory-card'> 
//         <img class='face front' src = 'imagens/backcarta.png'>
//         <img class='face back' src = 'imagens/${imagens}'>
//         </div>
//     `
// });

// card.innerHTML = cardHTML + cardHTML;




