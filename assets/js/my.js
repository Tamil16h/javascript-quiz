function Question(obj)
		{
			var objKey = Object.keys(obj);
			if (objKey.length !== 3)
			{
				this.question = "Invalid question object passed";
			}
			else
			{
				this.question = obj[objKey[0]];
				this.options	= obj[objKey[1]];	//array of options
				this.answer = obj[objKey[2]];		//the correct answer
			}
		}

		//create Question methods

		Question.prototype.displayQuestion = function(){
				var html = this.question;
				 	html += "<br><br>";
				 	this.options.forEach(function(val){
				 		html += "<input type='radio' name='option' class='options' value='"+val+"'>"+val+"</input><br>";
				 	});
				 	//html += "</ul>";
				return html;
		}

		Question.prototype.isCorrect	= function(reply){
				return reply === this.answer;
		}




var JSON = [{"question":"When a gas is turned into a liquid, the process is called","options":["Condensation","Evaporation","Sublimation","Deposition"],"answer":"Condensation"},
					{"question":"Which of the following is most likely to cause a rise in the average temperature of earth's atmosphere in future?","options":["Atomic warfare","CO2 from fossil fuels","Dust clouds from volcanoes","Depletion of earth's ozone layer"],"answer":"CO2 from fossil fuels"},
					{"question":"Which of the following elements is a metal","options":["S","Se","I","Ga"],"answer":"Ga"},
					{"question":"Pollination by birds is called","options":["Autogamy","Ornithophily","Entomophily","Anemophily"],"answer":"Ornithophily"},
					{"question":"The fastest-running terrestrial animal is","options":["Cheetah","Lion","Man","Jaguar"],"answer":"Cheetah"},
					{"question":"As you go down into a well, your weight","options":["inscreases slightly","decreases slightly","remain the same","none of the above"],"answer":"decreases slightly"},
					{"question":"The branch of medical science which is concerned with the study of disease as it affects a community of people is called","options":["Epidemiology","Oncology","Paleontogy","Pathology"],"answer":"Epidemiology"},
					{"question":"If a metal can be drawn into wires relatively easily it is called","options":["Malleable","Ductile","Extractive","Tactile"],"answer":"Ductile"},
					{"question":"Cystitis is the infection of which of the following?","options":["Liver","Urinary bladder","Pancreas","Lung"],"answer":"Urinary bladder"},
					{"question":"Which of the following is primarily composed of calcium carbonate?","options":["Fish scales","Shark teeth","Oyster shells","Whale bones"],"answer":"Oyster shells"},
					{"question":"Yeast, used in making bread is a","options":["Fungus","Plant","Bacteria","Seed"],"answer":"Fungus"},
					{"question":"A gas used as a disinfectant in drinking water is","options":["Hydrogen","Oxygen","Fluorine","Chlorine"],"answer":"Chlorine"},
					{"question":"Vacuoles are bound by a definite membrane in plant cells called","options":["Plasma membrane","Tonoplast","Cell wall","None of the above"],"answer":"Tonoplast"},
					{"question":"The theory which advocates that living beings can arise only from other living beings is termed","options":["Bio-genesis","Abiogenesis","Catastrophism","Cosmozoic"],"answer":"Bio-genesis"},
					{"question":"The wonder pigment chlorophyll is present in","options":["Mitochondria","Centrosomes","Quantosomes","Lysosomes"],"answer":"Quantosomes"},
					{"question":"Titan is the largest natural satellite of planet","options":["Mercury","Venus","Neptune","Saturn"],"answer":"Saturn"},
					{"question":"The solar eclipse occurs when","options":["the sun comes in between the moon and the earth","the earth comes in the between the sun and the moon","the moon comes in between the sun and the earth","None of the above"],"answer":"the moon comes in between the sun and the earth"},
					{"question":"The smallest functional and structural unit of kidney is called as","options":["Neuron","Nephron","Granulocyte","Reticulocyte"],"answer":"Nephron"},
					{"question":"The removal of top soil by water or wind is called","options":["Soil wash","Soil erosion","Soil creep","Silting of soil"],"answer":"Soil erosion"},
					{"question":"The speed of light with the rise in the temperature of the medium","options":["Increases","Decreases","Remains unaltered","Drop sharply"],"answer":"Remains unaltered"},
					{"question":"The oxide of Nitrogen used in medicine as anaesthetic is","options":["Nitrogen dioxide","Nitric oxide","Nitrous oxide","Nitrogen pentoxide"],"answer":"Nitrogen pentoxide"},
					{"question":"The intencity of Earthquakes is measured on","options":["Richter scale","Secant scale","Mercalli scale","Beaufort scale"],"answer":"Richter scale"},
					{"question":"The hardest substance available on earth is","options":["Platinum","Diamond","Graphite","Gold"],"answer":"Platinum"},
					{"question":"The gas predominantly responsible for global warning is","options":["Carbon dioxide","Carbon monoxide","Nitrous oxide","Nitrogen peroxide"],"answer":"Carbon dioxide"},
					{"question":"The dynamo is a device for converting","options":["Heat energy into electrical energy","Mechanical energy into electrical energy","Magnetic energy into electrical energy","None of the above"],"answer":"Mechanical energy into electrical energy"},
					{"question":"The disease diphtheria affects","options":["Lungs","Body joints","Intestine","Throat"],"answer":"Throat"},
					{"question":"The cell that lacks a nucleus is","options":["Flame cell","Spermatozoan","Red blood corpuscles in man","White blood corpuscles"],"answer":"Red blood corpuscles in man"},
					{"question":"The blue colour of the clear sky is due to","options":["Diffraction of light","Dispersion of light","Reflection of light","Refraction of light"],"answer":"Dispersion of light"},
					{"question":"Thalassaemia is a hereditary disease affecting","options":["Lungs","Blood","Heart","Kidney"],"answer":"Blood"},
					{"question":"Small pox is caused by","options":["Bacteria","Fungus","Algae","Virus"],"answer":"Virus"},
					{"question":"Persons with which blood group are called universal donors?","options":["A","AB","B","O"],"answer":"O"}];

		var counter = 1;		//keep track of the number of question	
		var score = 0;			//the candidate score
		var displayElement = document.getElementById("question");  //to display question
		var nextButton = document.getElementById("next");	//next button element
		var timerr = document.getElementById("timer");		//timer element
		var intTag = null;									//the setInterval that created timer

		displayOnBrowserLoad();

		setTimeout(showQuestion,5000);	//display first question after 4 seconds
		setTimeout(startTimer,5000);			//start timer countdown after 4 seconds





		function displayOnBrowserLoad()
		{
			 displayElement.innerHTML = "Question will be displayed here"; // Display this when the browser loads

		}

		function showQuestion()
		{
			var randInt = Math.floor(Math.random()*(JSON.length));	//get a random int within the range of json elements
			var questObject = new Question(JSON[randInt]);			//instantiate Question object
			
			displayElement.innerHTML = (counter)+". "+questObject.displayQuestion();
			nextButton.value = "Next";								//keep the text on the button as "Next"

			window.questObject = questObject; 						 //assign Question instance to window global object
																	//so that i can access from another function
		}


		/* This keep track of candidate's answer for every question,
		 * increment score if correct,
		 * increment counter,
		 * call showQuestion() on every call,
		 * then open a pop up to display result
		 */

		function nextQuestion()
		{	

			if(nextButton.value == "Start Again")		
			{
				startTimer();
			}

			var picked = "";
			var input = document.getElementsByClassName("options");
			for(var i=0;i<input.length;i++)
			{
				if(input[i].checked)
				{
					picked = input[i].value;
				}
			}
			if(questObject.isCorrect(picked))
			{
				score += 1;		//increment score by 1
			}
			counter +=1 ;		//increment question number

			showQuestion();

			if(counter===11)
			{
				terminateQuiz();	
			}
		}

		/* This resets all variables to initial values
		 * and stops the timer
		 */
		function terminateQuiz()
		{
				displayOnBrowserLoad();	
				alert("Your score is "+score);
				counter = 0;
				score = 0;
				nextButton.value = "Start Again";
			 	clearInterval(intTag);
			 	timerr.innerHTML = "--:--"
		}


		function startTimer()
		{
			var min = 0;
			var sec = 60;
			var m;
			var s;
			intTag = setInterval(function(){
				sec -= 1;
				if(sec==-1)
				{
					min -= 1;
					sec = 60;
				}
				m = (min<10) ? ("0"+min):min;
				s = (sec<10) ? ("0"+sec):sec;
				timerr.innerHTML = m+":"+s;

			},1000);
		}

		//if timer displays "00:00"
		//it shows time is up, then terminate the quiz
		setInterval(function(){
			if(timerr.innerHTML == "00:00")
			{
				terminateQuiz();
			}
		},1000);