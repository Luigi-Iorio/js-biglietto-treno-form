"use strict";

genera.addEventListener("click", function () {
  const biglietto = document.getElementById("biglietto");
  biglietto.classList.remove("opacity-0");
  biglietto.classList.add("opacity-100");

  // Nome e Cognome
  const nomeCognome = document.getElementById("nameSurname").value;
  console.log("Il nome e cognome del passeggero è: ", nomeCognome);

  // Numero di km
  let numeroKm = parseFloat(document.getElementById("kmDaPercorrere").value);
  console.log("Il numero di km da percorrere è: ", numeroKm);

  // Età passeggero
  const etaPasseggero = document.getElementById("etaPasseggero").value;
  console.log("Il passeggero è: ", etaPasseggero);

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

  // INSERIMENTO DATI NEL BIGLIETTO

  // nome e cognome
  const nome = document.getElementById("nome");
  nome.innerHTML = nomeCognome;

  // tipologia biglietto
  const tipologia = document.getElementById("tipologia");
  tipologia.innerHTML = "Biglietto standard";

  if (etaPasseggero === minorenne) {
    tipologia.innerHTML = "Biglietto Silver - sconto 20%";
  } else if (etaPasseggero === over) {
    tipologia.innerHTML = "Biglietto Gold - sconto 40%";
  }

  // numero carrozza
  const carrozza = document.getElementById("carrozza");
  carrozza.innerHTML = Math.floor(Math.random() * 21);

  // numero Cip
  const cip = document.getElementById("codiceCip");
  cip.innerHTML = Math.floor(Math.random() * 10000);

  // costo biglietto
  const costo = document.getElementById("costo");
  costo.innerHTML = `${parseFloat(prezzoTotale.toFixed(2))} €`;
});

annulla.addEventListener("click", function () {
  const biglietto = document.getElementById("biglietto");
  biglietto.classList.add("opacity-0");
  biglietto.classList.remove("opacity-100");
});
