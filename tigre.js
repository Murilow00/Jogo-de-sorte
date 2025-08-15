    let num1 = Math.floor(Math.random()*10); //Para ficar mais facil ou mais dificil mude o valor de no maximo 10 
    let num2 = Math.floor(Math.random()*10);
    let num3 = Math.floor(Math.random()*10);


    const delay = ms => new Promise(r => setTimeout(r,ms));


    //definindo o valor de cada slot de dinheiro

    switch(num1){
        case 0:
            num1 = "😛";
            break
        case 1:
            num1 = "❄️";
            break
        case 2:
            num1 = "🔥";
            break
        case 3:
            num1 = "💕";
            break
        case 4:
            num1 = "👍";
            break
        case 5:
            num1 = "🦈";
            break
        case 6:
            num1 = "🤓";
            break
        case 7:
            num1 = "💀"
            break
        case 8:
            num1 = "😱"
            break
        case 9:
            num1 = "🙄"
            break
        case 10:
            num1 = "🎲"
            break
    }

    switch(num2){
        case 0:
            num2 = "😛";
            break
        case 1:
            num2 = "❄️";
            break
        case 2:
            num2 = "🔥";
            break
        case 3:
            num2 = "💕";
            break
        case 4:
            num2 = "👍";
            break
        case 5:
            num2 = "🦈";
            break
        case 6:
            num2 = "🤓";
            break
        case 7:
            num2 = "💀"
            break
        case 8:
            num2 = "😱"
            break
        case 9:
            num2 = "🙄"
            break
        case 10:
            num2 = "🎲"
            break
    }

    switch(num3){
        case 0:
            num3 = "😛";
            break
        case 1:
            num3 = "❄️";
            break
        case 2:
            num3 = "🔥";
            break
        case 3:
            num3 = "💕";
            break
        case 4:
            num3 = "👍";
            break
        case 5:
            num3 = "🦈";
            break
        case 6:
            num3 = "🤓";
            break
        case 7:
            num3 = "💀"
            break
        case 8:
            num3 = "😱"
            break
        case 9:
            num3 = "🙄"
            break
        case 10:
            num3 = "🎲"
            break
    }

// Uma função para fazer essa pequena "animação"
async function Nda() {
    if(num1 == num2 && num2 == num3){

     console.log(num1); await delay(1000);
     console.log(num2); await delay(2000);
     console.log(num3); await delay(1000);
     console.log("");
     console.log(`${num1} || ${num2} || ${num3}`); await delay(1000);
     console.log("GRANDE PREMIO 🔥"); await delay(1000);
    }else

     console.log(num1); await delay(1000);
     console.log(num2); await delay(2000);
     console.log(num3); await delay(1000);
     console.log("");
     console.log(`${num1} || ${num2} || ${num3}`); await delay(1000);
     console.log("TENDE NOVAMENTE 🤣🤣"); await delay(1000);
    
}

Nda();
