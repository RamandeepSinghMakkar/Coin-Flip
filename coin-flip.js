/*we need refernces*/
const coin = document.querySelector("#coin"); /* first div id in html*/
const button = document.querySelector("#flip"); /* button id in html*/
const statusLabel = document.querySelector("#status");/* span id in html*/
const heads = document.querySelector("#headsCount"); /* span id in html ( we initialised it to 0)*/
const tails = document.querySelector("#tailsCount"); /* span id in html ( we initialised it to 0)*/


 
let headsCount = 0; /*by default 0 should be printed on screen*/
let tailsCount = 0; /*by default 0 should be printed on screen*/

function processResult(result){

    if(result === 'heads'){
        headsCount++;
        heads.innerHTML = headsCount; /*const heads in 5th line*/
    }else{
        tailsCount++;
        tails.innerHTML = tailsCount; /*const tails in 6th line*/
    }

    statusLabel.innerText = result.toUpperCase(); /*const statusLabel in 4th line*/
}


function flipCoin(){

    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails'; /*ternary operator*/

    setTimeout(() => { /* animation*/
            coin.setAttribute('class','animate-' + result);/* 1) result will come from 30 line 2)in css .animate-heads and .animate-tails both are there*/ 

            setTimeout(() => {
                    processResult(result); /* calling function from 13th line*/
            }, 2900);

    }, 100);
}

button.addEventListener("click",flipCoin); /*button reference in 3rd line*/
