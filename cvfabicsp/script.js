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
      }
      this.className += " highlighted";
  		$(".tile").not("."+selectedClass).fadeOut();
      setTimeout(function() {
        $("."+selectedClass).fadeIn();
      }, 500);
	});
});
