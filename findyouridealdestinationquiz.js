var navigationButton= document.getElementById ("navigateButton");
navigateButton.addEventListener("click", function(){
window.location.href= "http://127.0.0.1:5502/Anasdestinations.html"});

let Question1='Spring (March-May)';
console.log("Answer 1 Ex:", Question1);
let Question2='City ';
console.log("Answer 2 Ex :",Question2);
let Question3='A Weekend ';
console.log("Answer 3 Ex :",Question3);
let Question4= 'Car';
console.log("Answer 4 Ex :",Question4);
let Question5="Relaxation ";
console.log("Answer 5 Ex :",Question5);
let Question6='Hotel'
console.log("Answer 6 Ex :",Question6);

document.getElementById("quiz").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const travel = document.querySelector('input[name="travel"]:checked');
    const season = document.querySelector('input[name="season"]:checked');
    const destination = document.querySelector('input[name="Destinantions"]:checked');
    const activity = document.querySelector('input[name="Activity"]:checked');
    const budget = document.querySelector('input[name="Budget"]:checked');

    if (!travel || !season || !destination || !activity || !budget) {
        alert("Please answer all questions!");
        return;
      }
      const resultCategory = `${travel.value}-${destination.value}`;

      if (resultCategory.includes("Solo-Beach")) {
        // Redirect to Solo Beach Trip Page
        window.location.href = "http://127.0.0.1:5502/Anasdestinations.html";}
       else {(resultCategory.includes("Family/Friends-City")) 
        // Redirect to Family/Friends City Trip Page
        window.location.href = "http://127.0.0.1:5502/erica's-destinationpage.html";
      }
  
    });

    
