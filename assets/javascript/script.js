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

    $('.materialboxed').materialbox();
    ////

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
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "Firebase", "Spoonacular API", "Heal Thru Words API"]
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
        visit: "https://dojeda1.github.io/TriviaGame/",
        code: "https://github.com/dojeda1/TriviaGame",
        sum: "Test your knowledge of both the metric and imperial units of measurement. Each question is timed and will move onto the next if left unanswered. After each question, a fun GIF is briefly displayed according to whether or not you were correct. At the end of the game, the number of right, wrong, and unanswered responses is displayed along side your overall score. Your high scores are also shown at the bottom of the results page.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

    const furButlr = {
        title: "Fur Butlr",
        mockup: "./assets/images/fur-butlr/fur-butlr-mockup.png",
        img1: "./assets/images/fur-butlr/fur-butlr-results.jpg",
        img2: "./assets/images/fur-butlr/fur-butlr-update.jpg",
        img3: "./assets/images/fur-butlr/fur-butlr-profile.jpg",
        visit: "https://fur-butlr-app.herokuapp.com/",
        code: "https://github.com/ApexPanda/Shenron",
        sum: "A place where pet owners can meet each other and search for pet services like walkers, groomers or sitters. Fur Butlr lets you create a profile, login in, edit your page, and show off your pets.",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Materialize", "MySQL", "Node.js", "Sequelize"]
    }

    const bugMemory = {
        title: "Bug Memory",
        mockup: "./assets/images/trivia-game/trivia-mockup.png",
        img1: "./assets/images/trivia-game/trivia-start.jpg",
        img2: "./assets/images/trivia-game/trivia-correct.jpg",
        img3: "./assets/images/trivia-game/trivia-results.jpg",
        visit: "https://memory-game-react-click.herokuapp.com/",
        code: "https://github.com/dojeda1/memory-game",
        sum: "WIP",
        list: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", Node.js]
    }

    const bookFinder = {
        title: "Book Finder",
        mockup: "./assets/images/trivia-game/trivia-mockup.png",
        img1: "./assets/images/trivia-game/trivia-start.jpg",
        img2: "./assets/images/trivia-game/trivia-correct.jpg",
        img3: "./assets/images/trivia-game/trivia-results.jpg",
        visit: "https://google-books-mern.herokuapp.com/",
        code: "https://github.com/dojeda1/book-search",
        sum: "WIP",
        list: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Mongoose", "Google Books API"]
    }
    //

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
    ////
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

    // First project displayed when page is loaded
    showProject(mealPlanner);
    ////

    $(".carousel-item").on("click", function () {

        var projectId = $(this).attr("data-project-id");
        console.log(projectId);

        switch (projectId) {
            case "mealPlanner":
                showProject(mealPlanner);
                break;

            case "wizardWords":
                showProject(wizardWords);
                break;

            case "scifiRpg":
                showProject(scifiRpg);
                break;

            case "socrates":
                showProject(socrates);
                break;

            case "trivia":
                showProject(trivia);
                break;

            case "furButlr":
                showProject(furButlr);
                break;

            case "bugMemory":
                showProject(bugMemory);
                break;

            case "bookFinder":
                showProject(bookFinder);
                break;

        };

    });

    // Contact form WIP

    // $("#send-btn").on("click", function () {

    //     var name = $("#name").val();
    //     var email = $("#email").val();
    //     var message = $("#message").val();

    //     $("#name").val("");
    //     $("#email").val("");
    //     $("#message").val("");


    //     console.log(name);
    //     console.log(email);
    //     console.log(message);
    // });
    ////
});