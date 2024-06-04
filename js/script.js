// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// variabili indefinite
let prezzoScontoMinori;
let prezzoScontoEta;




// RACCOLTA DATI UTENTE
// chiedere all'utente il numero di chilometri da percorrere
const chilometriDaPercorrere = parseInt(prompt("Inserisci il numero di chilomteri da percorrere"));

// stampo in console il numero di km registrati
console.log(chilometriDaPercorrere);



// chiedere all'utente la sua età
const anniUtente = parseInt(prompt("Inserisci la tua età"));

// stampo in console l'età dell'utente
console.log(anniUtente);





// CALCOLO PREZZO BASE SENZA SCONTI
// moltiplicare i chilometri inseriti dall'utente per 0.21€ (prezzo al km)
let prezzoBiglietto = (chilometriDaPercorrere * 0.21);

// stampo in console il prezzo del biglietto senza sconti 
console.log("Il prezzo del biglietto è: ",prezzoBiglietto + "€");

// output prezzo base
document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto è: " + (prezzoBiglietto).toFixed(2) + "€");






// CALCOLO PREZZO SCONTATO SE L'UTENTE MINORENNE
// applicare lo sconto del 20% se l'utente ha meno di 18 anni
if (anniUtente < 18){
    let scontoMinori = ((prezzoBiglietto * 20) / 100);
    prezzoScontoMinori = (prezzoBiglietto - scontoMinori);

    // output prezzo minori
    document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto con lo sconto per i Minorenni è: " + (prezzoScontoMinori).toFixed(2) + "€");
}
// stampo in console il prezzo scontato del 20%
console.log("Il prezzo con lo sconto per minorenni è: ",prezzoScontoMinori + "€");






// CALCOLO PREZZO SCONTATO SE L'UTENTE >= 65 ANNI
// applicare lo sconto del 40% se l'utente ha più di 65 anni
if (anniUtente >= 65){
    let scontoEta = ((prezzoBiglietto * 40)/100);
    prezzoScontoEta = (prezzoBiglietto - scontoEta);

    // output prezzo >= 65 anni
    document.getElementById("prezzo").innerHTML = ("Il prezzo del tuo biglietto con lo sconto dai 65 anni in su è: " + (prezzoScontoEta).toFixed(2) + "€");
}
// stampo in console il prezzo scontato del 40%
console.log("Il prezzo con lo sconto dai 65 anni in su è: ",prezzoScontoEta + "€");


