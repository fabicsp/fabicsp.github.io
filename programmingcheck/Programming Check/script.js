'use strict';

$(function() {
	Papa.parse("data.csv", {
		download: true,
		complete: function(results) {
			$.each(results.data, function(i, lines) {
				var row = $("<tr/>");
				$.each(lines, function(j, cell) {
					if (cell !== ""){
						row.append($("<td/>").text(cell));
          }
				});
        $("#results").append(row);
			});
      $('tr:first-of-type td').each(function() {
      var NewElement = $("<th />");
      $.each(this.attributes, function(i, attrib){
        $(NewElement).attr(attrib.name, attrib.value);
      });
      $(this).replaceWith(function () {
        return $(NewElement).append($(this).contents());
      });
      });
      removeTag()
      $('tr:first-of-type').wrap('<thead></thead>')
      $('tr:not(:first-child)').wrapAll("<tbody>")
      tablesort()
		}
	});
});

function removeTag (tagName){
  var b = document.getElementsByTagName('tbody');
  while(b.length) {
    var parent = b[ 0 ].parentNode;
    while( b[ 0 ].firstChild ) {
      parent.insertBefore(  b[ 0 ].firstChild, b[ 0 ] );
    }
    parent.removeChild( b[ 0 ] );
  }
}

function tablesort(){
  $(document).ready(function(){
    $("#results").tablesorter();
  });
}
