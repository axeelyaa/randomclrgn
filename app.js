var btn = document.getElementById('btn');

function getNewColor(){
    var symbols, color;
    symbols = "0123456789ABCDEF";

color = "#";
for(var i = 0; i < 6; i++){
    
    color = color + symbols[Math.floor(Math.random() * symbols.length)];

}

document.body.style.background = color;
document.getElementById('text').innerHTML = color;

navigator.clipboard.writeText(color);

btn.innerHTML = "Copied - Generate Another?";}btn.addEventListener('click', function(){
    getNewColor();
})
