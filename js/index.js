document.getElementById("btn").onclick = function(){myFunction()}

function myFunction(){
    var items = Array("Jimmy's Famous American Tavern","Pizza Nova","Mitch's Seafood","Ketch Grill and Taps","Point Loma Seafoods" );
    var item = items[Math.floor(Math.random()*items.length)];
    console.log(item);
    document.getElementById("choice").innerHTML=item; 
}