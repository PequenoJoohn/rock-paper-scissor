/**
 * Escolher uma das opções
 * rock
 * paper
 * scissors
 * Extras ------
 * scissors cut paper,
 * paper covers rock,
 * rock crushes lizard,
 * lizard poisens Spock,
 * Spock smashes scissors,
 * scissors decapotates lizard,
 * lizard eats paper,
 * paper disproves Spock,
 * Spock vaporises rock,
 * and as it always has,
 * rock crushes scissors.
 */

/**
 * Capture all click buttons
 * And add to variables
 */
let win;
let locked = false;
let chooses = ["rock", "paper", "scissors"];
let player = {
  choose: "",
  score: 0,
};

let robot = {
  choose: "",
  score: 0,
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelector(".buttons");
const battle = document.querySelector(".battle");
const battleMobile = document.querySelector(".battle-mobile");
const battleListPlayer = document.querySelector(".battle li:nth-child(1)");
const battleListRobot = document.querySelector(".battle li:nth-child(3)");
const allChooses = document.querySelectorAll(".battle li");
const winner = document.querySelector(".battle li:nth-child(2)");
const winnerMobile = document.querySelector(".battle-mobile li");
const restart = document.querySelector("#restart");
const restartMobile = document.querySelector(".battle-mobile #restart");
const score = document.querySelector("#score");

const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

console.log("# Hello Everyone \n");

// Handle Clicks
rock.addEventListener("click", () => {
  if (player.choose === "") {
    player.choose = "rock";
    buttons.style.display = "none";
    if (player.choose) {
      battle.style.display = "flex";
      battleMobile.style.display = "flex";
      handleCreateChoose();
    }
  }
});

paper.addEventListener("click", () => {
  if (player.choose === "") {
    player.choose = "paper";
    buttons.style.display = "none";
    if (player.choose) {
      battle.style.display = "flex";
      battleMobile.style.display = "flex";
      handleCreateChoose();
    }
  }
});

scissors.addEventListener("click", () => {
  if (player.choose === "") {
    player.choose = "scissors";
    buttons.style.display = "none";
    if (player.choose) {
      battle.style.display = "flex";
      battleMobile.style.display = "flex";
      handleCreateChoose();
    }
  }
});

function handleCreateChoose() {
  robot.choose = chooses[Math.floor(Math.random() * chooses.length)];
  const createHtml = (
    oponent
  ) => `<button class="button border-${oponent.choose}" id="paper">
  <img src="images/icon-${oponent.choose}.svg" alt="">
  </button>`;
  battleListPlayer.insertAdjacentHTML("beforeend", createHtml(player));

  const chooseRobot = setInterval(() => {
    battleListRobot.insertAdjacentHTML("beforeend", createHtml(robot));
    startBattle(player, robot);
    clearInterval(chooseRobot);
  }, 2000);
}

//Let's Battle
function startBattle(player, robot) {
  if (player.choose === "rock" && robot.choose === "scissors") {
    win = `you win`;
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(1) button::before {
     animation: pulse-winner 2s infinite;
    }`;

    score.textContent = player.score += 1;

    return win;
  } else if (robot.choose === "rock" && player.choose === "scissors") {
    win = "you lose";
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(3) button::before {
     animation: pulse-winner 2s infinite;
    }`;

    return win;
  } else if (player.choose === "scissors" && robot.choose === "paper") {
    win = `you win`;
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(1) button::before {
     animation: pulse-winner 2s infinite;
    }`;

    score.textContent = player.score += 1;

    return win;
  } else if (robot.choose === "scissors" && player.choose === "paper") {
    win = "you lose";
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(3) button::before {
     animation: pulse-winner 2s infinite;
    }`;

    return win;
  } else if (player.choose === "paper" && robot.choose === "rock") {
    win = `you win`;
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(1) button::before {
     animation: pulse-winner 2s infinite;
    }`;

    score.textContent = player.score += 1;

    return win;
  } else if (robot.choose === "paper" && player.choose === "rock") {
    win = "you lose";
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    styleSheet.innerHTML = `.battle li:nth-child(3) button::before {
        animation: pulse-winner 2s infinite;
    }`;

    return win;
  } else if (player.choose === robot.choose) {
    win = "draw";
    winner.querySelector("p").textContent = win;
    winnerMobile.querySelector("p").textContent = win;
    winner.style.display = "block";
    winnerMobile.style.display = "block";
    resetPulse();

    return win;
  }
}
// End Battle

// Reset Effect Winner
function resetPulse() {
  styleSheet.innerHTML = `.battle li:nth-child(1) button::before {
    animation: none !important;
    }`;

  styleSheet.innerHTML = `.battle li:nth-child(3) button::before {
    animation: none !important;
    }`;
}

// Restart The Game
restart.addEventListener("click", () => {
  player.choose = "";
  buttons.style.display = "flex";
  battle.style.display = "none";
  battleMobile.style.display = "none";
  resetPulse();
  battleListPlayer.querySelector("button").remove();
  battleListRobot.querySelector("button").remove();
  winner.querySelector("p").textContent = "";
  winner.style.display = "none";
});

restartMobile.addEventListener("click", () => {
  player.choose = "";
  buttons.style.display = "flex";
  battle.style.display = "none";
  battleMobile.style.display = "none";
  resetPulse();
  battleListPlayer.querySelector("button").remove();
  battleListRobot.querySelector("button").remove();
  winnerMobile.querySelector("p").textContent = "";
  winnerMobile.style.display = "none";
});
