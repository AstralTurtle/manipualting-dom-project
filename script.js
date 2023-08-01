// initialize variables
const para = "pyke is a cool champion";
const imgSrc =
	"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg";

let pCount = 0;
let imgCount = 0;
let emptyCount = 0;

// get buttons
const paraBtn = document.getElementById("p-button");
const imgBtn = document.getElementById("img-button");
const dnBtn = document.getElementById("do-nothing-button");
// get divs
const paraDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");
const emptyDiv = document.getElementById("empty");
// add event listeners
paraBtn.addEventListener("click", newParagraph);
imgBtn.addEventListener("click", newImage);
dnBtn.addEventListener("click", empty);
// get counters
const pCounter = document.getElementById("p-count");
const imgCounter = document.getElementById("img-count");
const emptyCounter = document.getElementById("nothing-count");
// counter update function
function updateCounters() {
	pCounter.innerHTML = "Paragraph Counter: " + pCount;
	imgCounter.innerHTML = "Image Counter: " + imgCount;
	emptyCounter.innerHTML = "Do Nothing Counter: " + emptyCount;
}

// functions
function newParagraph() {
	let temp = document.createElement("p");
	temp.innerHTML = para;
	temp.style.backgroundColor = "cyan";
	temp.style.fontSize = "20px";
	temp.style.fontStyle = "bold";
	paraDiv.appendChild(temp);
	imgDiv.style.display = "none";
	emptyDiv.style.display = "none";
	paraDiv.style.display = "block";
	pCount++;
	updateCounters();
}

function newImage() {
	let temp = document.createElement("img");
	temp.src = imgSrc;
	temp.style.width = "20%";
	imgDiv.appendChild(temp);
	paraDiv.style.display = "none";
	emptyDiv.style.display = "none";
	imgDiv.style.display = "block";
	imgCount++;
	updateCounters();
}

function empty() {
	imgDiv.style.display = "none";
	paraDiv.style.display = "none";
	emptyDiv.style.display = "block";
	emptyCount++;
	updateCounters();
}
