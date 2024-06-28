/* // stringa che chieda all'utente quanti km vuole percorrere
let number_km =  prompt('inserisci km da percorrere');
console.log(number_km);
//prezzo 
let prezzo_base = 0.21 * Number(number_km);
console.log(prezzo_base);

//stringa che chiede all'utente quanti anni ha
let eta = prompt Number ('inserisci la tua età'));
console.log(eta);

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
let prezzo = prezzo_base.toFixed(2);
console.log(prezzo);

//mostro il prezzo nella pagina
document.getElementById('prezzo_finale').innerText= `il prezzo finale è di: ${prezzo}€`;

 */
/*let input_km= document.getElementById('km');
console.log(input_km.value);
let input_eta= document.getElementById('eta');
console.log(input_eta.value);


//tasto
let button= document.getElementById('conferma');
button.addEventListener('click'  );
*/

// recupero pulsante dal dom
const btn = document.getElementById('calculate');

//quando il pulsante viene cliccato recupero i dati dei campi input, età e km 
btn.addEventListener('click', function(){
    
//quando il pulsante viene cliccato recupero i dati dei campi input, età e km 
const km = document.getElementById('km').value;
const age = document.getElementById('age').value;

//calcolo prezzo base

let final_price = km * 0.21;
let message = `<h2>Il prezzo del tuo biglietto è pari a ${final_price.toFixed(2)}</h2>` ;

//verifico età passeggero e a seconda del valore applico o meno sconto

if(age == 1){ //minorenne
    final_price = price * 0.8; //final_price = price-price 20/100
    message = `<h2>Il prezzo del tuo biglietto è pari a ${final_price.toFixed(2)}</h2>.
    In quanto minorenne hai diritto a uno sconto del 20%` ;

}
else if(age == 2){ //over 65
    final_price = price * 0.6; //final_price = price-price 40/100
    message = `<h2>Il prezzo del tuo biglietto è pari a ${final_price.toFixed(2)}</h2>.
    In quanto over 65 hai diritto a uno sconto del $0%` ;

}


//genero il messaggio
console.log(document.getElementById('message').innerHTML);
//inietto il messaggio nel dom
document.getElementById('message').innerHTML = message;

})


