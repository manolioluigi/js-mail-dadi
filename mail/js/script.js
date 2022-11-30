//variabili
let mail, button, found;
const mailList = ["ettore@gmail.com", "pino@gmail.com", "giovanni@gmail.com", "francesco@gmail.com"]

//prendiamo la mail dall'utente
button = document.getElementById('bottone');
button.addEventListener(`click`, function(){

    mail = document.getElementById("mail").value;
    console.log(mail);

    //controlliamo che la mail sia nell'archivio

    found = false;
    
    for (let i=0; i<mailList.length; i++){
        const mailCheck = mailList[i];
        if(mailCheck === mail){
            found = true;
        }
    }

    if(found){
        document.getElementById('risultato').innerHTML = "Sei abilitato ad accedere";
        console.log("Sei abilitato ad accedere");
    } else {
        document.getElementById('risultato').innerHTML = "Non sei abilitato ad accedere";
        console.log("Non sei abilitato ad accedere");
    }

}
);