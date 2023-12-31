// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button")


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}

const addSignature = (person) => {
  //let signature_elements = document.getElementById("sign-petition").elements; 
  
  const newSig = document.createElement('p'); 
  //newSig.innerText = "🖊️ " + signature_elements[0].value + " from " + signature_elements[1].value + " supports this."; 
  newSig.innerText = `🖊️ ${person.name} from ${person.hometown} supports this cause.`;

  

  let signatures = document.getElementById("signatures-section"); 

  signatures.appendChild(newSig); 

  event.preventDefault(); 
}

const validateForm = (event) => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;


  let person = {
    name: petitionInputs[0].value, 
    hometown: petitionInputs[1].value
  }
  

  for (let i=0; i < petitionInputs.length; i++){
    if (person.hometown.length < 2 || person.name.length < 2) {
      containsErrors = true; 
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (containsErrors==false) {
    addSignature(person); 
    toggleModal(person); 
    for (let j=0; j < petitionInputs.length; j++){
      petitionInputs[j].value = "";
      //containsErrors = false; 
    }
  }

}

signNowButton.addEventListener('click', validateForm);



themeButton.addEventListener("click", toggleDarkMode);

let animation = {
  revealDistance: 150, 
  initialOpacity: 0, 
  transitionDelay: 0, 
  transitionDuration: '2s', 
  transitionProperty: 'all', 
  transitionTimingFunction: 'ease',  
}

let revealableContainers = document.querySelectorAll(".revealable"); 

const reveal = () => {
  for (i=0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add('active'); 
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove('active'); 
    }
  }
}

window.addEventListener('scroll', reveal)

const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal"); 
  let modalContent = document.getElementById("thanks-modal-content"); 

  modal.style.display = "flex";

  modalContent.textContent = `${person.name} from ${person.hometown}, thank you for signing! :D`

  intervalId = setInterval(scaleImage, 500); 

  setTimeout( () => {
    modal.style.display = "none"; 
    clearInterval(intervalId); 
  }, 3000) 
  
}

let scaleFactor = 1 

let modalImage = document.getElementById("thanks-img")

const scaleImage = () => {
  if (scaleFactor===1){
    scaleFactor=0.8; 
  } else {
    scaleFactor=1; 
  }
  
  modalImage.style.transform = `scale(${scaleFactor})`; 
  
  
}
