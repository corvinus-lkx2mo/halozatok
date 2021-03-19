var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

let ide = document.getElementById("pascal")
console.log("betöltődött")

for (var s = 0; s < 10; s++) {
    let sor = document.createElement("div");
    sor.classList.add("sor");
    ide.appendChild(sor);
    for (var o = 0; o <= s; o++) {

        let újSzám = document.createElement("div")
        újSzám.classList.add("elem")
        újSzám.innerText = faktoriálisR(s) / (faktoriálisR(o) * (faktoriálisR(s - o)));
        sor.appendChild(újSzám);


    }
}