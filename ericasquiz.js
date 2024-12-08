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