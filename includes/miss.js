$(document).ready(function() {
	

	$("#loading").show();
  



function updateTabMiss()
{
	$.ajax({
     type: "GET",
     url: "miss.xml",
     dataType: "xml",
     success: parseXmlMiss
 });
}
 
 updateTabMiss();
 setInterval(updateTabMiss,2500);
 
function parseXmlMiss(xml) {
$("#missTab tbody").html("");
$("#missTabRunning tbody").html("");
$("#missTabFinished tbody").html("");
$("#missTabCanceled tbody").html("");
$("#missTabWaiting tbody").html("");

$(xml).find("miss").each(function() {

			    id = $(this).attr("id");
			   etat = $(this).find("etat").text();
			   rob = $(this).find("rob").text();
			   duree =$(this).find("duree").text();
				
				
				 $("#missTab tbody:last").append("<tr><td>"+id+"</td><td>"+adaptEtat(etat)+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="running") $("#missTabRunning tbody:last").append("<tr><td>"+id+"</td><td>"+adaptEtat(etat)+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="finished") $("#missTabFinished tbody:last").append("<tr><td>"+id+"</td><td>"+adaptEtat(etat)+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="canceled") $("#missTabCanceled tbody:last").append("<tr><td>"+id+"</td><td>"+adaptEtat(etat)+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				 if(etat =="waiting") $("#missTabWaiting tbody:last").append("<tr><td>"+id+"</td><td>"+adaptEtat(etat)+"</td><td >"+rob+"</td><td >"+duree+"</td></tr>");
				
				$("#loading").hide();
 });
}

function adaptEtat(etat)
{
	if(etat.search('waiting')!=-1) etat ='<p><span class="badge badge-info">'+etat+'</span> </p>';
	if(etat.search('running')!=-1) etat ='<p><span class="badge badge-success">'+etat+'</span> </p>';
	if(etat.search('finished')!=-1) etat ='<p><span class="badge badge-warning">'+etat+'</span> </p>';
	if(etat.search('canceled')!=-1) etat ='<p><span class="badge badge-important">'+etat+'</span> </p>';
	
	
	return etat;
}

});