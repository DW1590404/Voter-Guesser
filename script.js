const voters = [
  {
    name: "Sarah Thompson",
    race: "White",
    gender: "female",
    occupation: "Public School Teacher",
    family: "Sarah grew up in a politically mixed household. Her father was a unionized factory worker and a loyal Democrat; her mother, a stay-at-home parent, leaned conservative, often listening to talk radio shows with Sarah around",
    religion: "Attended a moderate Methodist church, which emphasized social justice and community service, influencing her early moral framework",
    environment: "She remembers watching the news during the Gulf War and the 1992 Clinton election. Her family discussed politics casually, so she grew up thinking voting was a civic duty",
    education: "High school teachers encouraged critical thinking and civic engagement. Sarah took AP Government and volunteered during the 2000 elections",
    event: "The 9/11 attacks had a profound impact. Initially supported Bush's response, but by the time of the Iraq War in 2003, she had grown skeptical of foreign intervention",
    party: "Democrat",
    opParty: "Republican",
    explain: "Sarah leans left because her identity as a female public educator, combined with moderate Christian values, higher education, and a background of civic-minded family influence, led her to embrace progressive politics focused on social equity, education, and public service.",
    imagePath: "images/voter1.jpg"
  },
  {
    name: "Marcus Delgado",
    race: "Hispanic (Mexican-American)",
    gender: "male",
    occupation: "Small Business Owner (Auto Repair Shop)",
    family: "Marcus was raised in a traditional Catholic household. His father, a Vietnam veteran, emphasized discipline and patriotism; his mother worked long shifts as a nurse. Political discussions were rare, but values like hard work and personal responsibility were central",
    religion: "Grew up attending Catholic church and school regularly, where he learned to value order, tradition, and moral clarity",
    environment: "In his San Antonio neighborhood, respect for police and military service was common. Friends joined the military after high school, reinforcing a sense of national pride and duty",
    education: "Marcus graduated from high school and completed a vocational program in auto repair. He started working young, which shaped a practical, self-reliant outlook",
    event: "The aftermath of 9/11, small business frustrations with taxes and regulations, and COVID-era mandates shaped his political stance over time",
    party: "Republican",
    opParty: "Democrat",
    explain: "Marcus leans right because his life experiences—shaped by working-class self-reliance, religious tradition, male socialization, and business ownership—align more closely with conservative principles of economic freedom, cultural stability, and limited government.",
    imagePath: "images/voter2.jpg"
  },
  {
    name: "Emily Nguyen",
    race: "Asian American",
    gender: "female",
    occupation: "Software Engineer",
    family: "Emily was raised by immigrant parents who prioritized education and hard work, often sharing stories of sacrifice and opportunity in America.",
    religion: "She grew up attending a non-denominational Christian church that emphasized charity, inclusion, and community service.",
    environment: "Her diverse public high school fostered discussions on social justice, technology ethics, and environmental issues, shaping her early views.",
    education: "Emily earned a computer science degree at a state university where she volunteered for climate activism and progressive campus groups.",
    event: "The 2016 presidential election and controversies around tech privacy and ethics sparked her growing political awareness.",
    party: "Democrat",
    opParty: "Republican",
    explain: "Emily leans left because her tech career, progressive social values, and community-focused upbringing align with Democratic priorities on equity and innovation.",
    imagePath: "images/voter3.jpg"
  },
  {
    name: "James Wilson",
    race: "White",
    gender: "male",
    occupation: "Construction Worker",
    family: "James was raised in a rural family that valued self-reliance, blue-collar work, and skepticism of government interference, with little political discussion at home.",
    religion: "Raised Protestant but later became less active in religion, focusing more on practical concerns than doctrine.",
    environment: "His small town community had strong working-class values where political discussions often centered around economic survival and distrust of elites.",
    education: "After high school, James entered the workforce directly, gaining years of experience in construction and witnessing economic challenges firsthand.",
    event: "The 2008 recession and subsequent job insecurity profoundly shaped his views on government policies and economic regulation.",
    party: "Republican",
    opParty: "Democrat",
    explain: "James leans right because his working-class background, limited formal education, and focus on economic self-sufficiency align with conservative ideals.",
    imagePath: "images/voter4.jpg"
  },
  {
    name: "Latisha Brown",
    race: "Black",
    gender: "female",
    occupation: "Social Worker",
    family: "Latisha grew up in an urban neighborhood where conversations about racial inequality, social justice, and community activism were central in her family.",
    religion: "Her Baptist faith emphasized service, community uplift, and activism, which deeply influenced her worldview.",
    environment: "She attended public schools that actively engaged students in discussions about civic rights and social responsibility.",
    education: "Latisha earned a master's in social work, completing internships focused on community health and racial equity programs.",
    event: "The rise of the Black Lives Matter movement and national healthcare debates strengthened her political activism and Democratic affiliation.",
    party: "Democrat",
    opParty: "Republican",
    explain: "Latisha leans left because her personal experiences with systemic inequality and commitment to social justice align closely with progressive policies.",
    imagePath: "images/voter5.jpg"
  },
  {
    name: "Michael O’Connor",
    race: "White",
    gender: "male",
    occupation: "Police Officer",
    family: "Michael was raised in a family of law enforcement officers who valued authority, discipline, and public service as core family values.",
    religion: "Raised Catholic, his religious background stressed responsibility, tradition, and respect for social order.",
    environment: "Growing up in a suburban area with a strong police presence, Michael was exposed early to the importance of law and order.",
    education: "After high school, he attended the police academy and has since focused on community policing and public safety initiatives.",
    event: "Recent national debates on policing and public safety policies have shaped his conservative political views.",
    party: "Republican",
    opParty: "Democrat",
    explain: "Michael leans right due to his career in law enforcement and a worldview centered on authority, discipline, and social stability.",
    imagePath: "images/voter6.jpg"
  },
  {
    name: "Ana Morales",
    race: "Hispanic",
    gender: "female",
    occupation: "Nurse",
    family: "Ana grew up in a close-knit Hispanic family that emphasized caring for others, hard work, and maintaining cultural traditions.",
    religion: "She was raised Catholic but developed progressive social views influenced by her experiences in healthcare.",
    environment: "Her urban upbringing included exposure to immigrant communities and grassroots healthcare advocacy efforts.",
    education: "Ana completed nursing school and has worked in public health clinics serving underserved populations.",
    event: "The COVID-19 pandemic and ongoing healthcare access debates greatly influenced her political perspectives.",
    party: "Democrat",
    opParty: "Republican",
    explain: "Ana leans left because her healthcare work and cultural background shape her support for expanded social services and equity.",
    imagePath: "images/voter7.jpg"
  },
  {
    name: "David King",
    race: "White",
    gender: "male",
    occupation: "Military Veteran / Logistics Specialist",
    family: "David was raised in a military family where patriotism, discipline, and respect for tradition were fundamental values.",
    religion: "His Protestant upbringing emphasized service, tradition, and strong family bonds.",
    environment: "Growing up on military bases exposed him to diverse environments but also to strict hierarchical structures.",
    education: "He completed vocational training after high school and served 8 years in the military focusing on logistics and support.",
    event: "Concerns about national security, veterans’ welfare, and defense policies strongly influenced his political outlook.",
    party: "Republican",
    opParty: "Democrat",
    explain: "David leans right due to his military background and prioritization of patriotism, national security, and traditional values.",
    imagePath: "images/voter8.jpg"
  },
  {
    name: "Rachel Simmons",
    race: "White",
    gender: "female",
    occupation: "Journalist",
    family: "Rachel grew up in a family that valued open discussion, critical thinking, and engagement with current events.",
    religion: "Raised in a secular household, she was exposed to various religious and philosophical perspectives growing up.",
    environment: "She attended competitive public schools with a strong emphasis on debate, writing, and civic education.",
    education: "Rachel graduated with a journalism degree and interned at progressive news outlets focusing on accountability and transparency.",
    event: "Concerns over misinformation, media bias, and social equality have driven her political engagement.",
    party: "Democrat",
    opParty: "Republican",
    explain: "Rachel leans left due to her education in journalism, commitment to truth, and focus on social justice.",
    imagePath: "images/voter9.jpg"
  },
  {
    name: "Carlos Rivera",
    race: "Hispanic",
    gender: "male",
    occupation: "Truck Driver",
    family: "Carlos was raised in a working-class Hispanic family that valued practical skills, hard work, and economic stability.",
    religion: "He was raised culturally Catholic but is less religious in daily life.",
    environment: "Grew up in a rural area where family ties and traditional values were important influences.",
    education: "Carlos completed high school and quickly entered the workforce by earning a commercial driver’s license.",
    event: "Economic policies affecting labor and trade, as well as frustrations with government regulations, shaped his political views.",
    party: "Republican",
    opParty: "Democrat",
    explain: "Carlos leans right because his working-class values and preference for economic self-reliance align with conservative policies.",
    imagePath: "images/voter10.jpg"
  }
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

  setTimeout(showVoter, 8000);
});

showVoter();
