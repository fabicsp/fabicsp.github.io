'use strict';

var myform = $("form#myform");
console.log(myform.submit);
myform.submit(function(event){
	event.preventDefault();
  var service_id = "default_service";
  var template_id = "template_IL8Qsimh";
  var nameFromTheUser = $(".yourname").val();
  var emailFromTheUser = $(".from_email").val();
  var commentFromTheUser = $(".user_comment").val();
  console.log(nameFromTheUser, emailFromTheUser, commentFromTheUser);
  if(nameFromTheUser =="" || emailFromTheUser==""|| commentFromTheUser==""){
    $('.notallcompleted').show();
  }else {
    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){
    	alert("Sent!");
       myform.find("button").text("Send");
       $('.notallcompleted').hide();
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  }
  return false;
});
