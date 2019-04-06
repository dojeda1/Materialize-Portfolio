$(document).ready(function () {
    // Materialize functions
    $(".sidenav").sidenav();

    $(".modal").modal();

    $('.parallax').parallax();

    $('.scrollspy').scrollSpy({
        scrollOffset: 100
    });

    $('.carousel').carousel({
        indicators: true
    });

    //   Carousel Selection

    const mealPlanner = {
        title: "Meal Planner",
        mockup: "./assets/images/meal-planner/meal-planner-mockup.png",
        img1: "./assets/images/meal-planner/meal-planner-search.jpg",
        img2: "./assets/images/meal-planner/meal-planner-fav.jpg",
        img3: "./assets/images/meal-planner/meal-planner-cal.jpg",
        visit: "https://stephanfalcon.github.io/PlusUltraProject/",
        code: "https://github.com/stephanfalcon/PlusUltraProject",
        sum: "Using the Spoonacular API, Meal Planner allows you to look up recipes with optional dietary restrictions and save them to your favorites. You can view recipe cards to see a meal's ingredients and instructions. From the Calendar page, you can choose any recipe from your favorites, add it to a meal period on your weekly calendar, and save the plan for later. Both the favorites and the weekly meal plan are stored using Firebase's realtime database.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Firebase", "Spoonacular API"]
    }

    const wizardWords = {
        title: "Wizard Words",
        mockup: "./assets/images/wizard-words/wizard-words-mockup.png",
        img1: "./assets/images/wizard-words/wizard-words-guess.jpg",
        img2: "./assets/images/wizard-words/wizard-words-lose.jpg",
        img3: "./assets/images/wizard-words/wizard-words-win.jpg",
        visit: "https://dojeda1.github.io/Word-Guess-Game/",
        code: "https://github.com/dojeda1/Word-Guess-Game",
        sum: "This version of the traditional Hangman game is fashioned after the wizarding world of Harry Potter. The game displays what letters you have previously guessed, how many guesses you have left, as well as your wins and losses. The design was inspired by the Marauder's Map and uses jQuery for a number of cool fade-in and fade-out animations.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

    const scifiRpg = {
        title: "Sci-fi RPG",
        mockup: "./assets/images/scifi-rpg/scifi-rpg-mockup.png",
        img1: "./assets/images/scifi-rpg/scifi-rpg-lose.jpg",
        img2: "./assets/images/scifi-rpg/scifi-rpg-win.jpg",
        img3: "./assets/images/scifi-rpg/scifi-rpg-fight.jpg",
        visit: "https://dojeda1.github.io/Space-RPG-Game/",
        code: "https://github.com/dojeda1/Space-RPG-Game",
        sum: "Choose one of 4 classic Sci-fi characters to play as and try to defeat all of the remaining opponents. Each character has different health, strength, and leveling up stats and you must choose defenders in particular orders to obtain victory.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

    const socrates = {
        title: "Trial of Socrates",
        mockup: "./assets/images/socrates/socrates-mockup.png",
        img1: "./assets/images/socrates/socrates-prompt.jpg",
        img2: "./assets/images/socrates/socrates-results.jpg",
        img3: "./assets/images/socrates/socrates-choices.jpg",
        visit: "https://dojeda1.github.io/Socrates-Game/",
        code: "https://github.com/dojeda1/Socrates-Game",
        sum: "This is a text based adventure game inspired by the ancient tale of when Socrates was sentenced to death by a jury of his fellow Athenians. Playing as the philosopher himself, you make branching choices powered by IF/ELSE functions in JavaScript that lead to alternate endings. The goal is to find the historical ending or simply explore alternate timelines. ",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

    const trivia = {
        title: "Trivia Game",
        mockup: "./assets/images/trivia-game/trivia-mockup.png",
        img1: "./assets/images/trivia-game/trivia-start.jpg",
        img2: "./assets/images/trivia-game/trivia-correct.jpg",
        img3: "./assets/images/trivia-game/trivia-results.jpg",
        visit: "https://dojeda1.github.io/Socrates-Game/",
        code: "https://github.com/dojeda1/Socrates-Game",
        sum: "Test your knowledge of both the metric and imperial units of measurement. Each question is timed and will move onto the next if left unanswered. After each question, a fun GIF is briefly displayed according to whether or not you were correct. At the end of the game, the number of right, wrong, and unanswered responses is displayed along side your overall score. Your high scores are also shown at the bottom of the results page.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

    //   const placeholder = {
    //       title: "Trivia Game",
    //       mockup: "./assets/images/trivia-game/trivia-mockup.png",
    //       img1: "./assets/images/trivia-game/trivia-start.jpg",
    //       img2: "./assets/images/trivia-game/trivia-correct.jpg",
    //       img3: "./assets/images/trivia-game/trivia-results.jpg",
    //       visit: "https://dojeda1.github.io/Socrates-Game/",
    //       code: "https://github.com/dojeda1/Socrates-Game",
    //       sum: "Cool summary",
    //       list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    //   }

    function showProject(object) {

        $("#p-title").text(object.title);
        $("#p-mockup").attr("src", object.mockup);
        $("#p-visit-btn").attr("href", object.visit);
        $("#p-code-btn").attr("href", object.code);
        $("#p-about").text(object.sum);
        $("#p-img-1").attr("src", object.img1);
        $("#p-img-2").attr("src", object.img2);
        $("#p-img-3").attr("src", object.img3);
        $("#p-list").html("");

        object.list.forEach(function (entry) {
            console.log(entry);
            var listItem = $("<li>");
            listItem.text(entry);
            $("#p-list").append(listItem);
        });
    }

    showProject(mealPlanner);

    $(".carousel-item").on("click", function () {

        var projectId = {};
        var check = $(this).attr("data-project-id");
        console.log(check);

        if (check === "mealPlanner") {
            projectId = mealPlanner;
            console.log(projectId)
        } else if (check === "wizardWords") {
            projectId = wizardWords;
            console.log(projectId)
        } else if (check === "scifiRpg") {
            projectId = scifiRpg;
            console.log(projectId)
        } else if (check === "socrates") {
            projectId = socrates;
            console.log(projectId)
        } else if (check === "trivia") {
            projectId = trivia;
            console.log(projectId)
        }

        showProject(projectId);

    });

    // Contact form WIP

    $("#send-btn").on("click", function () {

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        $("#name").val("");
        $("#email").val("");
        $("#message").val("");


        console.log(name);
        console.log(email);
        console.log(message);
    });
});