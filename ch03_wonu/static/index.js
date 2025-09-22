var on = document.querySelector("#on");
var off = document.querySelector("#off");
var onLED = document.querySelector("#OnLED");
var offLED = document.querySelector("#OffLED");
var countButton = document.getElementById('countButton');
let countN = 0;

on.addEventListener("click", function() {
	countN++;
    $.ajax({
        type: 'GET',
        url: '/on',
    }).done(function(result) {
        onLED.style.display = "block";
        offLED.style.display = "none";
    }).fail(function(result) {
        alert(result)
    })
})

off.addEventListener("click", function() {
	countN++;
    $.ajax({
        type: 'GET',
        url: '/off',
    }).done(function(result) {
        onLED.style.display = "none";
        offLED.style.display = "block";
    }).fail(function(result) {
        alert(result)
    })
})

countButton.addEventListener('click', function() {
    alert(countN + "번 클릭함");
    countN = 0;
});
