function playGame() {
  let userScore = 0;
  let cpuScore = 0;
  let round = 0;

  const gameContainer = document.querySelector(".shifumiContainer"),
    userResultImg = document.querySelector(".resultImg1"),
    cpuResultImg = document.querySelector(".resultImg2"),
    resultText = document.querySelector(".results"),
    optionImages = document.querySelectorAll(".cardGrid div.container"),
    userScoreElement = document.querySelector(".userScore"),
    cpuScoreElement = document.querySelector(".cpuScore");

  // Conditions de victoires
  const outcomes = {
    RR: { result: "égalité", won: 0 },
    RP: { result: "Vous avez perdu...", won: -1 },
    RS: { result: "Vous avez ", won: 1 },
    PP: { result: "égalité", won: 0 },
    PR: { result: "Vous avez", won: 1 },
    PS: { result: "Vous avez perdu...", won: -1 },
    SS: { result: "égalité", won: 0 },
    SR: { result: "Vous avez perdu...", won: -1 },
    SP: { result: "Vous avez", won: 1 },
  };

  optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
      if (round >= 10) {
        resultText.textContent =
          userScore === cpuScore
            ? "Personne ne gagne. Vous êtes aussi forts l'un l'autre."
            : userScore > cpuScore
              ? "tu as gagné la partie! Bien joué!"
              : "l'ordinateur à gagné la partie...";
        return;
      }

      let countdown = 3;
      resultText.textContent = countdown;

      let countdownInterval = setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          gameContainer.classList.remove('start');
        } else {
          resultText.textContent = countdown;
        }
      }, 1000);

      setTimeout(() => {
        gameContainer.classList.remove("start");

        let userValue = ["R", "P", "S"][index];
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuValue = ["R", "P", "S"][randomNumber];

        let outcome = outcomes[userValue + cpuValue];

        if (outcome.won === 1) {
          resultText.textContent = `${outcome.result} Gagné!`;
          userScore++;
        } else if (outcome.won === -1) {
          resultText.textContent = outcome.result;
          cpuScore++;
        } else {
          resultText.textContent = outcome.result;
        }


        // changer toi par la variable qui contiendra le pseudo
        userResultImg.textContent = `Toi : ${userScore}`;
        cpuResultImg.textContent = `CPU : ${cpuScore}`;

        round++;
      }, 2500);
    });
  });
}

let gameRulesButton = document.querySelector(".gameRulesButton");
let gameRulesDiv = document.querySelector(".gameRules");

let popup = document.createElement("div");
popup.style.display = 'none';
popup.style.position = 'absolute';
popup.style.width = '70%';
popup.style.height = '70%';
popup.style.backgroundColor = '#000';
popup.style.padding = '0% 10%';
popup.style.zIndex = '1000';
popup.style.opacity = '0.3';


let popupText = document.createElement("p");
popupText.textContent = `La pierre bat le ciseaux / Le ciseaux bat le papier / Le papier bat la pierre`;
popupText.style.color = '#fff';

popup.appendChild(popupText);
gameRulesDiv.appendChild(popup);

gameRulesButton.addEventListener("click", function (event) {
  event.stopPropagation();
  popup.style.display = 'block';
});

document.addEventListener("click", function () {
  popup.style.display = 'none';
});

playGame();


document.getElementById('image1').addEventListener('click', function () {
  animateImage('image1', 415, -200);
});

document.getElementById('image2').addEventListener('click', function () {
  animateImage('image2', 0, -200);
});

document.getElementById('image3').addEventListener('click', function () {
  animateImage('image3', -415, -200);
});

function animateImage(imageId, targetX, targetY) {
  var image = document.getElementById(imageId);
  image.style.setProperty('--target-x', targetX + 'px');
  image.style.setProperty('--target-y', targetY + 'px');
  image.classList.add('animate');
  setTimeout(function () {
    image.classList.remove('animate');
  }, 5000);

}

document.getElementById('image1').addEventListener('click', function () {
    animateImage2('imgBot', 0, -150);
});

document.getElementById('image2').addEventListener('click', function () {
  animateImage2('imgBot', 0, -150);
});

document.getElementById('image3').addEventListener('click', function () {
  animateImage2('imgBot', 0, -150);
});

function animateImage2(imageId, targetX, targetY) {
  var image = document.getElementById(imageId);
  image.style.setProperty('--target-x2', targetX + 'px');
  image.style.setProperty('--target-y2', targetY + 'px');
  image.classList.add('animate2');
  setTimeout(function () {
    image.classList.remove('animate2');
  }, 5000);
  

}
