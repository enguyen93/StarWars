var character1 = "assets/images/luke.jpg";
var character2 = "assets/images/darthmaul.jpg";
var character3 = "assets/images/obiwan.jpg";
var character4 = "assets/images/pikachu.jpng";
var characterArr = [];
var enemyArr = [];
var defenderArr = [];
attackPower = 6;
counterAttackPower = 6;
var characters = [character1, character2, character3, character4];
var characterIds = ["character1", "character2", "character3", "character4"]

for (var i = 0; i < characters.length; i++) {
    var characterBtn = $("<button>");
    characterBtn.attr("src", characters[i]);
    characterBtn.attr("id", characterIds[i]);
    characterBtn.attr("hp", 50);
    characterBtn.attr("attackPower", attackPower);
    characterBtn.attr("counterAttackPower", counterAttackPower);
    characterBtn.attr("style", "width:150px; height: 150px;");
    characterBtn.addClass(characterIds[i]);
    $("#characters").append(characterBtn);
}

//http://jsfiddle.net/LJHQW/1/
//need to figure out how to move the button to a different container/class when clicked on


function attack () {
    $("#character1").on("click", function () {
        $("#character2")
    })   
}



// $("#character1").on("click", function () {
//     enemyArr.append(character2);
//     console.log(enemyArr);
// })

//example code that moves luke to enemies container
// $("#character1").on("click", function() {
//     $("#enemyArrHTML").append($("#character2"));
//     $("#enemyArrHTML").append($("#character3"));
//     $("#enemyArrHTML").append($("#character4"));

// });

//need to have the player choose 1 character
//then the rest of the characters have to move themselves
//to the enemy box
//then the player should be able to choose 1 from the enemy box
//and move that 1 character from the enemy box to the dfndr box
















//----DO NOT USE THIS, JUST FOR REFERENCE----
//this function chooses the char, splices it out of the array, and then pushes the rest into the enemyArr
// function charChoose1() {
//     $("#character1").on("click", function () {
//         console.log(characterIds);
//         characterIds.splice(characterIds.indexOf("character1"), 1);
//         console.log(characterIds);
//         enemyArr += characterIds;
//         console.log(enemyArr);
//         $("#enemyArrHTML").append($("#character2"), $("#character3"), $("#character4"));
//     });
// }
// function charChoose2() {
//     $("#character2").on("click", function () {
//         console.log(characterIds);
//         characterIds.splice(characterIds.indexOf("character2"), 1);
//         console.log(characterIds);
//         enemyArr += characterIds;
//         console.log(enemyArr);
//         $("#enemyArrHTML").append($("#character1"),$("#character3"),$("#character4"));
//     });
// }
// function charChoose3() {
//     $("#character3").on("click", function () {
//         console.log(characterIds);
//         characterIds.splice(characterIds.indexOf("character3"), 1);
//         console.log(characterIds);
//         enemyArr += characterIds;
//         console.log(enemyArr);
//         $("#enemyArrHTML").append($("#character1"),$("#character2"),$("#character4"));
//     });
// }
// function charChoose4() {
//     $("#character4").on("click", function () {
//         console.log(characterIds);
//         characterIds.splice(characterIds.indexOf("character4"), 1);
//         console.log(characterIds);
//         enemyArr += characterIds;
//         console.log(enemyArr);
//         $("#enemyArrHTML").append($("#character1"),$("#character2"),$("#character3"));
//     });
// }
// charChoose1();
// charChoose2();
// charChoose3();
// charChoose4();