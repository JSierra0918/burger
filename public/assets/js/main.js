$(document).ready( function (){

    //when you click submit, insert into database and restart project.
    $(".submit-button").on("click", createBurger);

    function createBurger(event){
        event.preventDefault();

      var bgName =  $("#submitBurger").val();
      console.log(bgName);
      var newBurger = {
          bgName
      }
      
    $.post("/api/burgers", newBurger,function (result){

        location.reload();
    })
    }

});
