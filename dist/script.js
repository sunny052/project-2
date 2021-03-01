var button = document.querySelector(".exit");
var box = document.querySelector(".box");

button.addEventListener('mouseenter', function(elm){moveRandom(elm.target);});

function moveRandom(elm){ 
 elm.style.position ='absolute'; 
 elm.style.top = Math.floor(Math.random()*90+5)+'%'; 
 elm.style.left = Math.floor(Math.random()*90+5)+'%'; 
  console.log(elm.style.left);
} 


// List of colors to cycle through
var spectrum = ['yellow', 'blue', 'green', 'red'];
var cycle = spectrum.length-1;

// Cycle speed (milliseconds: lower value = faster)
var speed = 300;

// Cycle to the next color in [spectrum] at a rate of [speed] ms, then epeat at end of array.
var i = 0;
    window.setInterval(function(){
    document.getElementById('h3').style.color = spectrum[i];
    if (i < cycle) i++;
    else i = 0;
}, speed);