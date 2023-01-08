const box = document.querySelectorAll('.quadrados');
var txtVencedor = document.querySelector('#declararVencedor')
let playerUm = 'X';
let playerDois = 'O';
var Player = playerUm;
console.log(box);
for (let c = 0; c< box.length; c++){
    box[c].addEventListener('click', function() {

        if (box[c].textContent == ''){

        box[c].textContent = Player

        if (Player == playerUm){
            Player = playerDois
        } else {
            Player = playerUm
        }}
            function verificadorP1 () {
            if (box[0].textContent == 'X' && box[1].textContent == 'X' && box[2].textContent == 'X'){return true}
            else if (box[3].textContent == 'X' && box[4].textContent == 'X'&& box[5].textContent == 'X'){return true}
            else if (box[6].textContent == 'X' && box[7].textContent == 'X'&& box[8].textContent == 'X'){return true}
            else if (box[0].textContent == 'X' && box[3].textContent == 'X'&& box[6].textContent == 'X'){return true}
            else if (box[1].textContent == 'X' && box[4].textContent == 'X'&& box[7].textContent == 'X'){return true}
            else if (box[2].textContent == 'X' && box[5].textContent == 'X'&& box[8].textContent == 'X'){return true}
            else if (box[0].textContent == 'X' && box[4].textContent == 'X'&& box[8].textContent == 'X'){return true}
            else if (box[2].textContent == 'X' && box[4].textContent == 'X'&& box[6].textContent == 'X'){return true}
            }

            function verificadorP2 () {
            if (box[0].textContent == 'O' && box[1].textContent == 'O' && box[2].textContent == 'O'){return true}
            else if (box[3].textContent == 'O'&& box[4].textContent == 'O' && box[5].textContent == 'O'){return true}
            else if (box[6].textContent == 'O' && box[7].textContent == 'O' && box[8].textContent == 'O'){return true}
            else if (box[0].textContent == 'O' && box[3].textContent == 'O' && box[6].textContent == 'O'){return true}
            else if (box[1].textContent == 'O' && box[4].textContent == 'O' && box[7].textContent == 'O'){return true}
            else if (box[2].textContent == 'O' && box[5].textContent == 'O' && box[8].textContent == 'O'){return true}
            else if (box[0].textContent == 'O' && box[4].textContent == 'O' && box[8].textContent == 'O'){return true}
            else if (box[2].textContent == 'O' && box[4].textContent == 'O' && box[6].textContent == 'O'){return true}
            }
        
            if (verificadorP1() == true && verificadorP2 != true){
                txtVencedor.innerHTML = 'PLAYER UM VENCEU'
            }
            else if (verificadorP2 () == true && verificadorP1 != true) { 
                txtVencedor.innerHTML = 'PLAYER DOIS VENCEU'
            }

    })}
    


function reiniciar() {
    for (var c = 0; c < box.length; c++){
    box[c].textContent = ''
    txtVencedor.innerHTML = ''
    Player = playerUm}

}
