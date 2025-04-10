let numberOfButtons = document.querySelectorAll(".drum").length;
for(let i =0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
    
    });
}

    document.addEventListener("keypress", function(event){
        makeSound(event.key.toLowerCase());
        buttonAnimation(event.key.toLowerCase());
    })

    function makeSound(key){
        switch(key){
        case "Kick(W)":
        case "w":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "Snare(A)":
        case "a":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "Crash(S)":
        case "s":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "Tom1(D)":
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "Tom2(J)":
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "Tom3(K)":
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "Tom4(L)":
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
    }

    }
    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector("." + currentKey);
      
          activeButton.classList.add("pressed");

          setTimeout(() => {
            activeButton.classList.remove("pressed")
          }, 100);
       
      }
