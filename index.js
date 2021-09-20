var l=document.querySelectorAll(".drum").length;

for(var i=0; i<l ;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function()
  {
     var buttonContent=this.innerHTML;
     activeButton(buttonContent);

     switch( buttonContent )
     {
       case "w":  var music = new Audio("sounds/tom-1.mp3");
                  music.play(); break;
        case "a":   var music = new Audio("sounds/tom-2.mp3");
                    music.play(); break;
        case "s":  var music = new Audio("sounds/tom-3.mp3");
                    music.play(); break;
        case "d":  var music = new Audio("sounds/tom-4.mp3");
                      music.play(); break;
        case "j":  var music = new Audio("sounds/snare.mp3");
                   music.play(); break;
        case "k":   var music = new Audio("sounds/crash.mp3");
                       music.play(); break;
        case "l": var music = new Audio("sounds/kick-bass.mp3");
                    music.play(); break;
        
     }
  });
}
document.addEventListener("keypress", function(event)
{
  var name = event.key;
    activeButton(name);
  switch(name)
  {
    case "w":  var music = new Audio("sounds/tom-1.mp3");
                  music.play(); break;
        case "a":   var music = new Audio("sounds/tom-2.mp3");
                    music.play(); break;
        case "s":  var music = new Audio("sounds/tom-3.mp3");
                    music.play(); break;
        case "d":  var music = new Audio("sounds/tom-4.mp3");
                      music.play(); break;
        case "j":  var music = new Audio("sounds/snare.mp3");
                   music.play(); break;
        case "k":   var music = new Audio("sounds/crash.mp3");
                       music.play(); break;
        case "l": var music = new Audio("sounds/kick-bass.mp3");
                    music.play(); break;
  }
}
);
  function activeButton(ck)
  {
      var active=document.querySelector("."+ck);
      active.classList.add("pressed");

      setTimeout(function() {
        
        active.classList.remove("pressed");
    }, 100);
  }

 