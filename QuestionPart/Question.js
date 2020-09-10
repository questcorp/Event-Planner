var questions =
[//Question for time
"I have spare time to work on my Multiple sources of income.",
"I spend quite a bit of my time on non-productive and on activities that does not improve my financials.",
"My job (or my primary source of income) does not occupy too much of my time.",
"I want to use more of my time to create more income sources.",
//Question for money
"I have some savings which I want to put into something that would give me a higher return",
"I have other investment which I believe I should divest into other investment types to reduce risk.",
"I have money set aside to put into new ventures.",
"I know where and how  I can get the money to put into income generating opportunities."
];
window.onload = function(){
	document.getElementById('QEnter').addEventListener("click",displayQuestion);
	Goto(document.getElementsByClassName('Page')[0]);
}
function Goto(value){
	reset();
	count = value.value-1;
	checkResponse(count);
	for(var i=1;i<9;i++){
		document.getElementsByClassName('Order')[i-1].innerHTML = "Q"+i;
	}
	//alert(count);
	document.getElementById('Title').innerHTML ='Question '+value.value;
	document.getElementById('Question').innerHTML = questions[count];
	var pageCountColor = document.getElementsByClassName('Page')[count];
	var orderContent = document.getElementsByClassName('Order')[count];
	var nextButton = document.getElementById('Next');
	var backButton = document.getElementById('Back');
	if(count == 0){
		nextButton.innerHTML = "Next &#x25BA";
    backButton.style.color = "transparent";
		backButton.style.backgroundColor = "transparent";
		backButton.style.border = "none";
	}
	else{
		nextButton.innerHTML = "Next &#x25BA";
    backButton.style.color = "#f8f8f8";
		backButton.style.backgroundColor = "#FFD200";
		backButton.style.border = "2px solid #f8f8f8";
	}
	document.getElementsByClassName('Order')[count].innerHTML = "&#x25BC";
}
function checkResponse(value){
	if(ans[value]!=-1){
		saveData(document.getElementsByClassName('Reaction')[ans[value]]);
	}
}

function nextQuest(){
	if(count <=7 && ans[count]!=-1){
		count +=1;
		Goto(document.getElementsByClassName('Page')[count]);
	}
	else if(ans[count]==-1){
		Goto(document.getElementsByClassName('Page')[count]);
	}
	else{
		count = 7;
		Goto(document.getElementsByClassName('Page')[count]);
	}
}
function prevQuest(){
	if(count >=0){
		count -=1;
		Goto(document.getElementsByClassName('Page')[count]);
	}
	else{
		count = 0;
		Goto(document.getElementsByClassName('Page')[count]);
	}
}
function displayQuestion(){
	document.getElementsByClassName('answer')[0].style.display = 'block';
	document.getElementsByClassName('Intro')[0].style.display = 'none';
}
