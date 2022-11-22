// Button press
document.querySelectorAll(".drum").forEach( function(drum){ drum.addEventListener("click", function(){
    var buttonText = this.innerHTML;
    soundKey(buttonText);
    buttonAnimation(buttonText);
})})
//Keyboard press
document.addEventListener("keydown", function(event){
    soundKey(event.key);
    buttonAnimation(event.key);
})

function soundKey(key){

    switch(key){

        case 'w' :
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case 'a' :
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        
        case 's' :
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case 'd' :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j' :
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k' :
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l' :
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            return;                
    }
    
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}