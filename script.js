function checkCoordinates() {
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;

    // Hier könntest du die tatsächlichen Koordinaten für den Vergleich festlegen
    var correctLatitude = "50";
    var correctLongitude = "7";

    if (latitude === correctLatitude && longitude === correctLongitude) {
        showSuccess();
    } else {
        showError();
    }
}

function showSuccess() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Du hast es geschafft!</p><canvas id='confetti'></canvas>";
    setTimeout();

    // Starte die Konfetti-Animation
    //startConfetti();
}
    // Nach einer Verzögerung von z.B. 3 Sekunden (3000 Millisekunden) weiterleiten
function setTimeout() {
    window.location.href = "geschafft.html";
};

function startConfetti() {
    var confettiSettings = { target: 'confetti' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function showError() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Falsche Koordinaten. Bitte versuche es erneut.</p>";
}