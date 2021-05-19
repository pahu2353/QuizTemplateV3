// greets user 
let username = prompt("What is your name?");
let timeleft = prompt("Welcome, " + username + ". Please set your timer to how much time you want for the quiz (in seconds):");
let currentQuestion = 0;
let score = 0;
	let downloadTimer = setInterval(function(){
	document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
	timeleft -= 1;
	if(timeleft <= 0){
		clearInterval(downloadTimer);
		document.getElementById("countdown").innerHTML = "Finished";
		window.location.replace("thanks.html");
		}
	}, 1000);
let questions = [
   {
	"question": "What is the capital of Norway?",
	"a": "Oslo",
	"b": "Tromsø",
	"c": "Bergen",
	"d": "Stavanger",
	"image":"quizimages/norway.png",
	"answer": "a"
   },
   {
	"question": "What is the capital of the Dominican Republic?",
	"a": "Santiago",
	"b": "La Vega",
	"c": "Santo Domingo",
	"d": "San Francisco de Macorís",
	"image":"quizimages/dominicanRepublic.png",
	"answer": "c"
   },
   {
	"question": "What is the capital of Iraq?",
	"a": "Mosul",
	"b": "Basra",
	"c": "Baghdad",
	"d": "Kirkuk",
	"image":"quizimages/iraq.png",
	"answer": "c"
   },
   {
	"question": "What is the capital of Montenegro?",
	"a": "Herceg Novi",
	"b": "Podgorica",
	"c": "Nikšić",
	"d": "Pljevlja",
	"image":"quizimages/montenegro.png",
	"answer": "b"
   },
   {
	"question": "What is the capital of Cuba?",
	"a": "Holguín",
	"b": "Guantánamo",
	"c": "Santiago de Cuba",
	"d": "Havana",
	"image":"quizimages/cuba.png",
	"answer": "d"
   },
   {
	"question": "What is the capital of East Timor?",
	"a": "Dili",
	"b": "Maubara",
	"c": "Likisá",
	"d": "Suai",
	"image":"quizimages/eastTimor.png",
	"answer": "a"
   },
   {
	"question": "What is the capital of Madagascar?",
	"a": "Fianarantsoa",
	"b": "Antsirabe",
	"c": "Toamasina",
	"d": "Antananarivo",
	"image":"quizimages/madagascar.png",
	"answer": "d"
   },
   {
	"question": "What is the capital of Kenya?",
	"a": "Mombasa",
	"b": "Nakuru",
	"c": "Eldoret",
	"d": "Nairobi",
	"image":"quizimages/kenya.png",
	"answer": "d"
   },
   {
	"question": "What is the capital of Liechtenstein?",
	"a": "Schellenberg",
	"b": "Vaduz",
	"c": "Planken",
	"d": "Schaan",
	"image":"quizimages/liechtenstein.png",
	"answer": "b"
   },
   {
	"question": "What is the capital of Afghanistan?",
	"a": "Mazari Sharif",
	"b": "Kandahar",
	"c": "Kabul",
	"d": "Jalalabad",
	"image":"quizimages/afghanistan.png",
	"answer": "c"
   },
 ];
 
// server worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}


 
 function loadQuestion() {
	 
		// close light box for first question
		if (currentQuestion == 0) {
			closeLightBox();
		}
		
		// load the image
		let img = document. getElementById("image");
		img.src = questions [currentQuestion].image;
		img.style.maxWidth = "80%";
	 
	 
		// load the question and answers
		document.getElementById("question").innerHTML = questions[currentQuestion].question;
		document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
		document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;	
		document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
		document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
		
 } // loadQuestion
	
 
 function markIt(ans) {
	 
		let message = "";
		
		if (ans == questions[currentQuestion].answer) {
			
			// Add 1 to score
			score++;
			
			// display score
			document.getElementById("score").innerHTML = score + " / " + questions.length;
			
			// output message to user when answer is correct
			message = "Correct!!!! Your current score is " + score + " / " + (currentQuestion + 1) + ", or " + Math.round(score / (currentQuestion + 1) * 100) + "%"; 
			document.getElementById("message").style.backgroundColor = "green";
			document.getElementById("message").style.color = "white";
			
		} else {
			
			// output message to user when answer is incorrect
			message = "Incorrect :( Your current score is " + score + " / " + (currentQuestion + 1) + ", or " + Math.round(score / (currentQuestion + 1) * 100) + "%";
			document.getElementById("message").style.backgroundColor = "red";
			document.getElementById("message").style.color = "white";
			
		} // end of if/else
		
		//show the lightbox
		document.getElementById("lightbox").style.display = "block"; // display: block; might need to be changed later
		document.getElementById("message").innerHTML = message;
		
		// move to the next question
		currentQuestion++;
		if (currentQuestion < questions.length) {
			loadQuestion();
		} else {
			window.location.replace("thanks.html");
		}
		
 }  // markIt 
 

 function GiveMeTheAnswer(){
		score++;
		message = "...Imagine being lazy and not trying to answer the question yourself :( Oh well, your current score is " + score + " / " + (currentQuestion + 1) + ", or " + Math.round(score / (currentQuestion + 1) * 100) + "%"; 
		document.getElementById("message").style.backgroundColor = "orange";
		document.getElementById("message").style.color = "white";
		document.getElementById("lightbox").style.display = "block"; // display: block; might need to be changed later
		document.getElementById("message").innerHTML = message;
	document.getElementById("score").innerHTML = score + " / " + questions.length;
	currentQuestion++;
	if (currentQuestion < questions.length) {
		loadQuestion();
	} else {
		window.location.replace("thanks.html");
	}
}


 function closeLightBox(){
	 document.getElementById("lightbox").style.display = "none";
 } // closeLightBox

 
 // play music
 window.addEventListener("DOMContentLoaded", event => {
	const audio = document.querySelector("audio");
	audio.loop = true;
	audio.volume = 0.2;
	audio.play();
  });



  
   
