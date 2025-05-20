const voters = [
  {
    name: "Sarah Thompson",
    race: "White",
    gender: "female",
    occupation: "Public School Teacher",
    family: "Sarah grew up in a politically mixed household...",
    religion: "Attended a moderate Methodist church...",
    environment: "She remembers watching the news during the Gulf War...",
    education: "High school teachers encouraged critical thinking...",
    event: "The 9/11 attacks had a profound impact...",
    party: "Democrat",
    opParty: "Republican",
    explain: "Sarah leans left because her identity as a female...",
    imagePath: "images/voter1.jpg"
  },
  // ...repeat for voter2, voter3, etc.
];

let currentIndex = 0;
let correctGuesses = 0;

const nameEl = document.getElementById("voterName");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const religion = document.getElementById("religion");
const environment = document.getElementById("environment");
const education = document.getElementById("education");
const event = document.getElementById("event");
const image = document.getElementById("voterImage");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");

const showVoter = () => {
  if (currentIndex >= voters.length) {
    nameEl.textContent = "Thanks for playing!";
    info1.textContent = `You got ${correctGuesses} out of ${voters.length} correct.`;
    guessInput.style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
    return;
  }

  const voter = voters[currentIndex];
  nameEl.textContent = `Voter ${currentIndex + 1}: ${voter.name}`;
  info1.textContent = `${voter.name} is a ${voter.race} ${voter.gender} working as a ${voter.occupation}.`;
  info2.textContent = `Family Background: ${voter.family}`;
  religion.textContent = `Religion: ${voter.religion}`;
  environment.textContent = `Environment: ${voter.environment}`;
  education.textContent = `Education: ${voter.education}`;
  event.textContent = `Key Event: ${voter.event}`;
  image.src = voter.imagePath;
  result.textContent = "";
};

document.getElementById("submitBtn").addEventListener("click", () => {
  const guess = guessInput.value.trim().toLowerCase();
  const voter = voters[currentIndex];

  if (guess === voter.party.toLowerCase()) {
    correctGuesses++;
    result.textContent = `✅ Correct! ${voter.explain}`;
  } else if (guess === voter.opParty.toLowerCase()) {
    result.textContent = `❌ Incorrect. ${voter.explain}`;
  } else {
    result.textContent = "⚠️ Please enter 'Democrat' or 'Republican'";
    return;
  }

  currentIndex++;
  guessInput.value = "";

  setTimeout(showVoter, 2000);
});

showVoter();
