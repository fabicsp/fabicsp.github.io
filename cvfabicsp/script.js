window.onload = $(function(){
  // console.log("hi");
  // $(".tile").not(".contact").fadeOut();
});

$(function() {
		var selectedClass = "";
		$(".headline").click(function(){
      var pheaders = $(".headline");
  		selectedClass = $(this).attr("data-rel");
      if ($(".highlighted").length > 0) {
        $(".highlighted").removeClass( "highlighted" );
        // $(".highlighted")[0].className = "headline";
      }
      this.className += " highlighted";
  		$(".tile").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        $("."+selectedClass).fadeIn();
        // $("#portfolio").fadeTo(500, 1);
      }, 500);
	});
});
