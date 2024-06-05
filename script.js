function isTuesday() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    return dayOfWeek === 2;
}

function getTuesdayFact() {
    var tuesdayFacts = [
        "In Spanish, Tuesday is called 'Martes'.",
        "Tuesday is named after the Norse god of war, Tiw.",
        "Tuesday's child is full of grace, according to the nursery rhyme.",
        "In some cultures, Tuesday is considered an unlucky day.",
        "Tuesday is the most productive day of the week, according to some studies."
    ];
    return tuesdayFacts[Math.floor(Math.random() * tuesdayFacts.length)];
}

function getNotTuesdayFact() {
    var notTuesdayFacts = [
        "The Eiffel Tower can be 15 cm taller during the summer.",
        "Bananas are berries, but strawberries aren't.",
        "A day on Venus is longer than a year on Venus.",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
        "There are more stars in the universe than grains of sand on all the Earth's beaches."
    ];
    return notTuesdayFacts[Math.floor(Math.random() * notTuesdayFacts.length)];
}

function checkDay() {
    var tuesdayText = document.getElementById("tuesdayText");
    if (isTuesday()) {
        tuesdayText.textContent = "Yes, it's Tuesday!";
        tuesdayText.classList.remove("notTuesday");
        tuesdayText.classList.add("tuesday");
        tuesdayText.innerHTML += "<br>" + getTuesdayFact();
    } else {
        tuesdayText.textContent = "Nope, sorry. It's not Tuesday.";
        tuesdayText.classList.remove("tuesday");
        tuesdayText.classList.add("notTuesday");
        tuesdayText.innerHTML += "<br>" + getNotTuesdayFact();
    }
}

// Initial check on page load
checkDay();
