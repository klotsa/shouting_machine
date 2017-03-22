$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var phraseInput = $("input#phrase").val();

    $(".phrase").text(phraseInput.toUpperCase());

    $("#shout").show();

    event.preventDefault();
  });
});
