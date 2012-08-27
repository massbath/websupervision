<?php
	if (empty ($_GET['page']))	{
	include ("modules/accueil.php");
	}
	
	
	
	elseif($_GET['page'] == 'robot') {
	include("modules/rob.php");
	}
	elseif($_GET['page'] == 'accueil') {
	include("modules/accueil.php");
	}
	elseif($_GET['page'] == 'mission') {
	include("modules/miss.php");
	}
	
	
	