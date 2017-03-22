$(document).ready(function() {
  $("form#appointment").submit(function(event) {

    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput =  $("input#date").val();
    var timeBeginInput = $("input#timeBegin").val()
    var timeEndInput = $("input#timeEnd").val();


    $(".appName").text(nameInput);
    $(".appDescription").text(descriptionInput);
    $(".appDate").text(dateInput);
    $(".appStart").text(timeBeginInput);
    $(".appEnd").text(timeEndInput);

    event.preventDefault();
  });
});
