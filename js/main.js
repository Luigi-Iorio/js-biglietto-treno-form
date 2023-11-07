"use strict";

genera.addEventListener("click", function () {
  // Numero di km
  let numeroKm = parseFloat(document.getElementById("kmDaPercorrere").value);

  // Età passeggero
  const etaPasseggero = document.getElementById("etaPasseggero").value;

  let minorenne = document.getElementById("minorenne").value;
  let over = document.getElementById("over").value;

  // prezzo totale
  let prezzoTotale = numeroKm * 0.21; //prezzo predefinito
  let messaggio = "Il prezzo totale del biglietto è: "; //messaggio predefinito

  // Calcolo per lo sconto
  if (etaPasseggero === minorenne) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
    messaggio = "Il prezzo scontato del 20% è: ";
  } else if (etaPasseggero === over) {
    prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100;
    messaggio = "Il prezzo scontato del 40% è: ";
  }

  // visualizzazione in console del prezzo
  console.log(messaggio, parseFloat(prezzoTotale.toFixed(2)));
});
