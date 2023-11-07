"use strict";

// Nome - Cognome del passeggero
const nomeCognome = document.getElementById("nameSurname");

nomeCognome.addEventListener("keypress", function (e) {
  console.log(e.key);
});

// Km da percorrere
let numeroKm = document.getElementById("kmDaPercorrere");
numeroKm.addEventListener("keypress", function (e) {
  console.log(e.key);
  numeroKm = parseFloat(e.key);
});

// Età del passeggero
const etaPasseggero = document.getElementById("etaPasseggero");

const maggiorenne = document.getElementById("maggiorenne");
const minorenne = document.getElementById("minorenne");
const over = document.getElementById("over");

// Calcolo prezzo totale del biglietto
let prezzoTotale = numeroKm * 0.21; //prezzo predefinito
let messaggio = "Il prezzo totale del biglietto è: "; //messaggio predefinito

// Calcolo prezzo scontato
if (etaPasseggero == minorenne) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 20) / 100;
  messaggio = "Il prezzo scontato del 20% è: ";
} else if (etaPasseggero == over) {
  prezzoTotale = prezzoTotale - (prezzoTotale * 40) / 100;
  messaggio = "Il prezzo scontato del 40% è: ";
}

// Visualizzazione prezzo in console al click del bottone
const genera = document.getElementById("genera");

genera.addEventListener("click", function () {
  console.log(messaggio, parseFloat(prezzoTotale.toFixed(2)));
});
