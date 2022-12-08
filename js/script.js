let scoreHomeElement = document.getElementById("show-scor-home");
let counter = 0;
scoreHomeElement.innerHTML = counter;

function addHomeOne() {
  counter += 1;
  scoreHomeElement.innerHTML = counter;
}

function addHomeTwo() {
  counter += 2;
  scoreHomeElement.innerHTML = counter;
}

function addHomeThree() {
  counter += 3;
  scoreHomeElement.innerHTML = counter;
}

let scoreGuestElement = document.getElementById("show-scor-guest");
let count = 0;
scoreGuestElement.innerHTML = count;

function addGuestOne() {
  count += 1;
  scoreGuestElement.innerHTML = count;
}

function addGuestTwo() {
  count += 2;
  scoreGuestElement.innerHTML = count;
}

function addGuestThree() {
  count += 3;
  scoreGuestElement.innerHTML = count;
}
