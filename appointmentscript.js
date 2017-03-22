$(document).ready(function() {
  $("form#appointment").submit(function(event) {

    var nameInput = $("input#name").val();
    localStorage.setItem("name", nameInput.value);
    var descriptionInput = $("input#description").val();
    localStorage.setItem("description", descriptionInput.value);
    var dateInput =  $("input#date").val();
    localStorage.setItem("date", dateInput.value);
    var timeBeginInput = $("input#timeBegin").val()
    localStorage.setItem("timeBegin", timeBeginInput.value);;
    var timeEndInput = $("input#timeEnd").val();
    localStorage.setItem("timeEnd", timeEndInput.value);

    window.location.replace("confirmed.html");

    $(".appName").text(localStorage.getItem("name"));
    $(".appDescription").text(localStorage.getItem("description"));
    $(".appDate").text(localStorage.getItem("date"));
    $(".appStart").text(localStorage.getItem("timeBegin"));
    $(".appEnd").text(localStorage.getItem("timeEnd"));

    event.preventDefault();
  });
});
