$(document).ready(function() {

var i =0;
function updateTabRob()
{

	$("#loading").show();
	  $.ajax({
		type: "GET",
		url: "rob.xml",
		dataType: "xml",
		success: parseXmlRob
	});
}


updateTabRob();
setInterval(updateTabRob,2000);


function parseXmlRob(xml) {
$("#robTab tbody").html("");
$(xml).find("rob").each(function() {

			    id = $(this).attr("id");
			   pos = $(this).find("pos").text();
			   batt = $(this).find("batt").text();
			   etat =$(this).find("etat").text();
				
				batt=adaptBatt(batt);				
				pos=adaptPos(pos);
				etat=adaptEtat(etat)
				
				
				$("#robTab tbody:last").append("<tr><td>"+id+"</td><td>"+pos+"</td><td>"+batt+"</td><td>"+etat+"</td></tr>");
				$("#loading").hide();
 });
}

function adaptBatt(batt)
	{
				if(parseInt(batt)<=50) batt='<p><span class="badge badge-important">'+batt+'</span> </p>';
				if(parseInt(batt)>=80) batt='<p><span class="badge badge-success">'+batt+'</span> </p>';
				if(parseInt(batt)>50) batt='<p><span class="badge badge-warning">'+batt+'</span> </p>';
				
				return batt;
	}
	
function adaptPos(pos)
	{
				if(pos.search('Sur')!=-1) pos ='<p><span class="badge badge-success">'+pos+'</span> </p>';
				if(pos.search('Hors')!=-1) pos ='<p><span class="badge badge-important">'+pos+'</span> </p>';
				
				return pos;
	}

function adaptEtat(etat)
	{
				if(etat.search('taxi')!=-1) etat='<p><span class="badge badge-info">'+etat+'</span> </p>';	
				if(etat.search('run')!=-1) etat='<p><span class="badge badge-success">'+etat+'</span> </p>';	
		
				return etat;
	}
	
});