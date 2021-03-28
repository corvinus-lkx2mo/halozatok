﻿window.onload = function ()
{

    document.getElementById("vissza").onclick = function vissza()
    {
        if (kérdésszám == 0) {
            kérdésszám = kérdések.length - 1;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
        else {
            kérdésszám--;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
    }
    document.getElementById("előre").onclick = function előre()
    {
        if (kérdésszám == kérdések.length) {
            kérdésszám = 0;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
        else {
            kérdésszám++;
            console.log(kérdésszám);
            kérdésMegjelenítés(kérdésszám);
            újkérdés();
        }
    }
    letóltés();
}

var kérdések
var helyesválasz
var kérdésszám

function letöltés() {
    fetch('/questions.json')
        then(response => response.json())
        then(data => letöltésBefejeződött(data));
}

    function letöltésBefejeződött(d) {
        console.log("Sikeres letöltés")
        console.log(d)
        kérdések = d;
    }
    function kérdésMegjelenítés(kérdés) {
        document.getElementById("kérdésszöveg").innerHTML = kérdések[kérdés].questionText;
        document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
        document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
        document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

    }
    function ellenőrzés1() {
        helyesválasz = kérdések[kérdésszám].correctAnswer;
        console.log(helyesválasz);
        if (helyesválasz==1) {
            válasz1.classList.add("jó")
        }
        else {
            válasz1.classList.add("rossz")
        }
}
function ellenőrzés2() {
    helyesválasz = kérdések[kérdésszám].correctAnswer;
    console.log(helyesválasz);
    if (helyesválasz == 2) {
        válasz2.classList.add("jó")
    }
    else {
        válasz2.classList.add("rossz")
    }
}
function ellenőrzés3() {
    helyesválasz = kérdések[kérdésszám].correctAnswer;
    console.log(helyesválasz);
    if (helyesválasz == 3) {
        válasz3.classList.add("jó")
    }
    else {
        válasz3.classList.add("rossz")
    }
}
function újkérdés() {
    válasz1.classList.remove("rossz");
    válasz1.classList.remove("rossz");
    válasz1.classList.remove("rossz");

    válasz1.classList.remove("jó");
    válasz1.classList.remove("jó");
    válasz1.classList.remove("jó");
}
