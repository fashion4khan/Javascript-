const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = paresInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height === "" || height === isNaN(height) || height < 0) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else if (height === "" || height === isNaN(height) || height < 0) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
