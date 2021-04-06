var Nome;
var Cognome;
var ColorePreferito;
var PasswordGenerata;
var GrandezzaTesto;

Nome = prompt('Inserisci il nome!');
Cognome = prompt('Inserisci il cognome!');
ColorePreferito = prompt('Inserisci il tuo colore preferito!');

PasswordGenerata = Nome + Cognome + ColorePreferito + 21;

console.log(PasswordGenerata);


function FormattazioneTesto(selectTag) {
  GrandezzaTesto = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("PasswordGenerator").style.fontSize = GrandezzaTesto;
  document.getElementById("PasswordGenerator").style.color = "red";
}

/* document.getElementById("PasswordGenerator").style.color = "red";
document.getElementById("GrandezzaTesto").style.fontSize = FormattazioneTesto; */
document.getElementById("PasswordGenerator").innerHTML = PasswordGenerata;

