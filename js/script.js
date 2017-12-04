
$(function() {
  //All JS goes within these brackets  
  
  $("#age-submit").click(function(){
    
    //select the box with id of age
    //get the value from that box
    var ageString = $("#age").val();

    //convert string to number
    var age = parseInt(ageString);

    //check if age is greater than 21
    if ( age >= 45 ) {
      //if age is greater than 21 show the next question
      $("#answer").text("Congrats! You are older than Goop herself!");
      $("#club-img").attr("src", "http://i.perezhilton.com/wp-content/uploads/2014/09/gwyneth-paltrow-laughing-ha-ha-ha(1).gif");
      $("#age-form").hide();
    } else {
      $("#answer").text("Sorry, looks like you are not older than Goop");
      $("#club-img").attr("src", "http://cineplex.media.baselineresearch.com/images/76303/76303_full.jpg");
       $("#age-form").hide();
    }
    
  });

