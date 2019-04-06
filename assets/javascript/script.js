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
        sum: "Cool summary",
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
        sum: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea odit architecto molestiae, laboriosam nam doloribus nihil eum quis eveniet earum! Ullam tempora tenetur amet a asperiores, laboriosam omnis perferendis!",
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
        sum: "Cool summary",
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
        sum: "Cool summary",
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
        sum: "Cool summary",
        list: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }

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