// Begrüssung

 const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Guten Morgen", "Schöner Nachmittag", "Guten Abend"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;


//Rechen funktion
function avg(){
    let summe = 0;
    let gewichtungen = 0;

    let divs = document.getElementById('wrapper').getElementsByTagName('div');
    
    for(var i = 0, len = divs.length; i < len; i++){
        var div = divs[i];

        let note = +div.getElementsByClassName('note')[0].value;
        let wertung = +div.getElementsByClassName('wertung')[0].value;
        
        if(note < 0 || note > 6){
            div.getElementsByClassName('note')[0].style.borderColor = "yellow";
        }
        else {
            div.getElementsByClassName('note')[0].style.borderColor = "red";
        }						
        
        if(note != ''){
            summe += note * wertung;
            gewichtungen += wertung;
        }
    }					

    document.getElementById('durchschnitt').innerHTML = (summe / gewichtungen).toFixed(2); 
}


//Reset Funktion
function resett(){

div.getElementById('note').value = '';
div.getElementById('wertung').value = '100';

}