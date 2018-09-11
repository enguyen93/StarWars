var character1 = "assets/images/luke.jpg";
var character2 = "assets/images/darthmaul.jpg";
var character3 = "assets/images/obiwan.jpg";
var character4 = "assets/images/pikachu.jpng";

var characters = [character1, character2, character3, character4];
var characterIds = ["character1", "character2", "character3", "character4"]

for (var i =0; i < characters.length; i++) {
    var characterBtn = $("<button>");
    characterBtn.attr("src", characters[i]);
    characterBtn.attr("id", characterIds[i]);
    characterBtn.attr("style", "width:150px; height: 150px;");
    characterBtn.addClass(characterIds[i]);
    $("#characters").append(characterBtn);
}