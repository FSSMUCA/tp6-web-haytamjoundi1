const form = document.getElementById("calc-form");
const errorMessage = document.getElementById("error-message");
const historyList = document.getElementById("history-list");

let history = []; // tableau JS

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let A = document.getElementById("numberA").value;
    let B = document.getElementById("numberB").value;
    let op = document.getElementById("operation").value;

    errorMessage.textContent = "";

    // Validation
    if (A === "" || B === "") {
        errorMessage.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    A = parseFloat(A);
    B = parseFloat(B);

    if (op === "/" && B === 0) {
        errorMessage.textContent = "Division par zéro impossible.";
        return;
    }

    // Calcul
    let result;
    switch (op) {
        case "+": result = A + B; break;
        case "-": result = A - B; break;
        case "*": result = A * B; break;
        case "/": result = A / B; break;
    }

    // Ajouter à l’historique
    const entry = `${A} ${op} ${B} = ${result}`;
    history.push(entry);

    // Mettre à jour l’affichage
    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
