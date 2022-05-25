const months = [1,2,3,4,5,6];
const random = Math.floor(Math.random() * months.length);


// function kostka1(){
//     const random = Math.floor(Math.random() * months.length);
//     if (random == 1){
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png")
//     }
//     else if (random == 2){
//         document.querySelector(".img1").setAttribute("src", "images/dice2.png")
//     }
//     else if (random == 3){
//             document.querySelector(".img1").setAttribute("src", "images/dice3.png")
//     }
//     else if (random == 4){
//         document.querySelector(".img1").setAttribute("src", "images/dice4.png")
//     }
//     else if (random == 5){
//         document.querySelector(".img1").setAttribute("src", "images/dice5.png")
//     }
//     else if (random == 6){
//         document.querySelector(".img1").setAttribute("src", "images/dice6.png")
//     }
// }

// function kostka2(){
//     const random = Math.floor(Math.random() * months.length);
//     if (random == 1){
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png")
//     }
//     else if (random == 2){
//         document.querySelector(".img2").setAttribute("src", "images/dice2.png")
//     }
//     else if (random == 3){
//             document.querySelector(".img2").setAttribute("src", "images/dice3.png")
//     }
//     else if (random == 4){
//         document.querySelector(".img2").setAttribute("src", "images/dice4.png")
//     }
//     else if (random == 5){
//         document.querySelector(".img2").setAttribute("src", "images/dice5.png")
//     }
//     else if (random == 6){
//         document.querySelector(".img2").setAttribute("src", "images/dice6.png")
//     }
// }

function kostka3(){
    const random1 = Math.floor(Math.random() * 6) +1;
    const random2 = Math.floor(Math.random() * 6) +1;
    if (random1 == 1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    }
    else if (random1 == 2){
        document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    }
    else if (random1 == 3){
            document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    }
    else if (random1 == 4){
        document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    }
    else if (random1 == 5){
        document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    }
    else if (random1 == 6){
        document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    }

    if (random2 == 1){
        document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    }
    else if (random2 == 2){
        document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    }
    else if (random2 == 3){
            document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    }
    else if (random2 == 4){
        document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    }
    else if (random2 == 5){
        document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    }
    else if (random2 == 6){
        document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    }

    if(random1 == random2){
        document.querySelector("h2").innerText = "🚩 Remis 🚩"
        document.querySelector("h2").style.visibility = "visible"
    }
    else if(random1 > random2){
        document.querySelector("h2").innerText = "🚩 Wygrał Player 1"
        document.querySelector("h2").style.visibility = "visible"
    }
    else if(random2 > random1){
        document.querySelector("h2").innerText = "Wygrał Player 2 🚩"
        document.querySelector("h2").style.visibility = "visible"
    }
}
