$(document).ready(function() {
	

	$("#loading").show();
  $.ajax({
     type: "GET",
     url: "miss.xml",
     dataType: "xml",
     success: parseXmlMiss
 });



function parseXmlMiss(xml) {
$(xml).find("miss").each(function() {

			    id = $(this).attr("id");
			   etat = $(this).find("etat").text();
			   rob = $(this).find("rob").text();
			   duree =$(this).find("duree").text();
				
				 $("#missTab tbody:last").append("<tr><td>"+id+"</td><td>"+etat+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="running") $("#missTabRunning tbody:last").append("<tr><td>"+id+"</td><td>"+etat+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="finished") $("#missTabFinished tbody:last").append("<tr><td>"+id+"</td><td>"+etat+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="canceled") $("#missTabCanceled tbody:last").append("<tr><td>"+id+"</td><td>"+etat+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				
				$("#loading").hide();
 });
}


});