var bday1a = "Don’t worry, if Plan A doesn’t work, there are 25 more letters in the alphabet";
var bday1b = "Butter my butt and call me a biscuit!";
var bday2a = "Always remember: you're unique, just like everyone else";
var bday2b = "Death is hereditary";
var bday3a = "It is not my fault that I never learned to accept responsibility!";
var bday3b = "Constipated people don't give a crap";
var bday4a = "I’d like to help you out. Which way did you come in?";
var bday4b = "If you can't beat them, arrange to have them beaten";
var bday5a = "The sex was so good that even the neighbors had a cigarette";
var bday5b = "Sometimes I wake up grumpy; other times I let her sleep";
var bday6a = "Everyone hates me because I'm paranoid";
var bday6b = "Silence is golden, but duck tape is silver";
var bday7a = "I get enough exercise pushing my luck";
var bday7b = "Alcohol does not solve any problems, but then again, neither does milk.";
var bday8a = "Come over to the dark side…we’ve got candy";
var bday8b = "I’m never late. The others are just too early";
var bday9a = "As long as cocoa beans grow on trees, chocolate is fruit to me";
var bday9b = "Silence is golden. Unless you have kids. Then it’s suspicious";
var bday10a = "I put the ‘pro’ in ‘procrastinate'";
var bday10b = "Doing nothing is hard, you never know when you’re done";
var bday11a = "I’m not lazy. I’m just highly motivated to do nothing";
var bday11b = "Fart when people hug you. You’ll make them feel strong";
var bday12a = "Smile like a monkey with a new banana";
var bday12b = "Whoever said, “Out of sight, out of mind” never had a spider disappear in their bedroom.”";
var bday13a = "Don’t drink while driving – you might spill the beer"; 
var bday13b = "Whenever I’m bored, I go to my favorite place: The fridge"; 
var bday14a = "I don’t care what people think of me. Mosquitos find me attractive!";
var bday14b = "If you’re not supposed to eat at night, why is there a light in the refrigerator?"; 
var bday15a = "I’d agree with you, but then we’d both be wrong";
var bday15b = "If you don't like the fortune don't eat the cookie";
var a = document.getElementById("bdayIn").value;

function siiPhraseOpen() {
    var x = document.forms["myPhrase"]["initialIn"].value;
    //demarc
    if(x == "DG"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday1a;
        return false;
    }
    //erica
    if (x == "EG") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday1b;
        return false;
    }//tish
    else if(x == "LP"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday2a;
        return false;
    }//nikki
    else if (x == "NS") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday2b;
        return false;
        }
    //leelee
    else if(x == "LLS"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday3a;
        return false;
    }
    //ravina
    else if (x == "RS") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday3b;
        return false;
    }
    //justin
    else if(x == "JJ"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday4a;
        return false;
    }
    //rirtice
    else if (x == "RW") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday4b;
        return false;
    }
    //lennell
    else if(x == "LS"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday5a;
        return false;
    }
    //ryan
    else if (x == "RD") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday5b;
        return false;
    }
    //donnell
    else if(x == "DS"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday6a;
        return false;
    }
    //fanyana
    else if (x == "FD") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday6b;
        return false;
    }
    //marlana
    else if(x == "MC"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday7a;
        return false;
    }
    //open
    else if (x == "O1") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday7b;
        return false;
    }
    //open
    else if(x == "O2"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday8a;
        return false;
    }
    //open
    else if (x == "O3") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday8b;
        return false;
    }
    //panache
    else if(x == "PP"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday9a;
        return false;
    }
    //open
    else if (x == "O4") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday9b;
        return false;
    }
    //zyron
    else if(x == "ZP"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday10a;
        return false;
    }
    //open
    else if (x == "O5") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday10b;
        return false;
    }
    //tish cuz 1
    else if(x == "MS"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday11a;
        return false;
    }
    //tish cuz 2
    else if (x == "AS") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday11b;
        return false;
    }
    //matt
    else if(x == "MR"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday12a;
        return false;
    }
    //open
    else if (x == "O7") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday12b;
        return false;
    }
    //jennifer
    else if(x == "JR"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday13a;
        return false;
    }
    //open
    else if (x == "O8") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday13b;
        return false;
    }
    //dino
    else if(x == "DC"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday14a;
        return false;
    }
    //maurice
    else if (x == "MAS") {
        document.getElementById("phrase").innerHTML = "Phrase: " + bday14b;
        return false;
    }
    //sean
    else if(x == "SK"){
        document.getElementById("phrase").innerHTML = "Phrase: " + bday15a;
        return false;
    }
    //sean2
    else if (x == "AK") {
        document.getElem
        document.getElementById("phrase").innerHTML = "Phrase: " + bday15b;
        return false;
    }

    else {
        document.getElementById("phrase").innerHTML = "enter you initials in...geez";
        document.getElementById("phrase2").innerHTML = "like this...AB...the first letter of your name, then the second letter of your name";
        return false;
    }           
}

var mM1 = "BLACK CAT"
var mM2 = "SPEAKERS"

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";
}

function on2() {
document.getElementById("overlay2").style.display = "block";
}

function off2() {
document.getElementById("overlay2").style.display = "none";
}

function on3() {
document.getElementById("overlay3").style.display = "block";
}

function off3() {
document.getElementById("overlay3").style.display = "none";
}

function on4() {
document.getElementById("overlay4").style.display = "block";
}

function off4() {
document.getElementById("overlay4").style.display = "none";
}

function on5() {
document.getElementById("overlay5").style.display = "block";
}

function off5() {
document.getElementById("overlay5").style.display = "none";
}

function on6() {
document.getElementById("overlay6").style.display = "block";
}

function off6() {
document.getElementById("overlay6").style.display = "none";
}

function on7() {
document.getElementById("overlay7").style.display = "block";
}

function off7() {
document.getElementById("overlay7").style.display = "none";
}

function on8() {
document.getElementById("overlay8").style.display = "block";
}

function off8() {
document.getElementById("overlay8").style.display = "none";
}

function on9() {
document.getElementById("overlay9").style.display = "block";
}

function off9() {
document.getElementById("overlay9").style.display = "none";
}

function on10() {
document.getElementById("overlay10").style.display = "block";
}

function off10() {
document.getElementById("overlay10").style.display = "none";
}

function on11() {
document.getElementById("overlay11").style.display = "block";
}

function off11() {
document.getElementById("overlay11").style.display = "none";
}

function on12() {
document.getElementById("overlay12").style.display = "block";
}

function off12() {
document.getElementById("overlay12").style.display = "none";
}

 
var now = new Date();
var october1 = new Date(2022, 10, 27, 14, 58, 00, 0);
var october2 = new Date("October 29, 2015");

if (now == october1) {
    document.getElementById("MM1").style.display = "hidden";
}

