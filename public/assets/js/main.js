$(document).ready(function () {

    //when you click submit, insert into database and restart project.
    $(".submit-button").on("click", createBurger);
    $(".btnDevour").on("click", updateBurger);

    function createBurger(event) {
        event.preventDefault();

        var bgName = $("#submitBurger").val().trim();
        console.log(bgName);
        if(bgName.includes("burger")){
            var newBurger = {
                bgName
            }
        }else {
            var newBurger = {
                bgName: bgName + " Burger"
            }
        }

        $.post("/api/burgers", newBurger, function (result) {
            location.reload();
        });
    }

    function updateBurger(event) {
        event.preventDefault();
        var id = $(this).data("burgername");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: 1
            }
        }).then(function () {
            location.reload();
            console.log("devoured")
        })
    }
});