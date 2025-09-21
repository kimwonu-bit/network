let count = 0;
let number;
let goSubmit;

document.addEventListener("DOMContentLoaded", () => {
  number = document.getElementById("number");
  const button = document.getElementById("count");
  goSubmit = document.getElementById("goSubmit");

  button.addEventListener("click", () => {
    count++;
    number.textContent = count;
  });

  goSubmit.addEventListener("click", function() {
    location.href = 'http://10.150.0.202:5000/save/' + count;
    count = 0;
    number.innerHTML = count;
  });
});

