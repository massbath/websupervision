$(document).ready(function() {

$("#loading").show();
  $.ajax({
    type: "GET",
    url: "rob.xml",
    dataType: "xml",
    success: parseXmlRob
});

function parseXmlRob(xml) {
$(xml).find("rob").each(function() {

			    id = $(this).attr("id");
			   pos = $(this).find("pos").text();
			   batt = $(this).find("batt").text();
			   etat =$(this).find("etat").text();
				
				$("#robTab tbody:last").append("<tr><td>"+id+"</td><td>"+pos+"</td><td>"+batt+"</td><td>"+etat+"</td></tr>");
				$("#loading").hide();
 });
}
});