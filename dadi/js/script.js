let dadoUno, dadoDue;
//generare dadi

dadoUno = Math.floor(Math.random() * 6 + 1);
console.log(dadoUno);

dadoDue = Math.floor(Math.random() * 6 + 1);
console.log(dadoDue);

if(dadoUno > dadoDue){
    alert(`E' uscito: ${dadoUno} Hai vinto, congratulazioni!`);
} else if(dadoUno < dadoDue){
    alert(`E' uscito: ${dadoUno} Hai perso, peccato!`);
} else {
    alert(`E' uscito: ${dadoUno} Hai pareggiato, riprova!`);
}
