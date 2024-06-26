// stringa che chieda all'utente quanti km vuole percorrere
let number_km = prompt ('inserisci km da percorrere');
console.log(number_km);
//prezzo 
let prezzo_base = 0.21 * Number(number_km);
console.log(prezzo);

//stringa che chiede all'utente quanti anni ha
let eta = Number(prompt ('inserisci la tua età'));
console.log(eta);

//variabile che contiene prezzo finale
let prezzo_finale= prezzo;



//se user ha - di 18 anni
if (eta<18) {
    //calcolare sconto
    let sconto = prezzo_base * 0.20;
    //calcono il prezzo finale
    prezzo_base = prezzo_base - sconto;
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 20%' ;
}

//se user ha + di 65 anni
else if (eta>65) {
    //calcolare sconto
    let sconto = prezzo_base * 0.40;
    //prezzo= prezo-sconto;
    prezzo_base = prezzo_base - sconto;
    document.getElementById('result').innerHTML = 'hai diritto allo sconto del 40%' ;
}

//se user ha + di 18 anni e meno di 65 anni
else  {
    document.getElementById('result').innerHTML = 'non hai diritto allo sconto' ;
}

//prezzo arrotondato a 2 decimali
let prezzo = prezzo_finale.toFixed(2);
console.log(prezzo);

//mostro il prezzo nella pagina
document.getElementById('prezzo_finale').innerText = 'il prezzo finale è di: ${prezzo}€';