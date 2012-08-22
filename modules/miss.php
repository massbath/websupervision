
<script type="text/javascript" src="includes/miss.js"></script>

<header class="jumbotron subhead" id="overview">
  <div class="container">
    <h1>Missions</h1>
    <p class="lead">Tableau affichant les missions affectées aux chariots ainsi que des informations dessus</p>
  </div>
</header>

<div class="tabbable ">
		<ul class="nav nav-pills">
		  <li class="active"><a href="#all" data-toggle="tab">Toutes</a></li>
		  <li><a href="#running" data-toggle="tab">En cours</a></li>
		  <li><a href="#finished" data-toggle="tab">Terminée</a></li>
		  <li><a href="#canceled" data-toggle="tab">Annulée</a></li>
		</ul>
		<div class="tab-content">
			<div class="tab-pane active" id="all">
				<div id="missTab" >
					<?php include("modules/table_miss.php") ;?>
				</div>
				</div>
			<div class="tab-pane " id="running">
				<div class="tab-pane active" id="all">
				<div id="missTabRunning" >
					<?php include("modules/table_miss.php") ;?>
				</div>
				</div>
			</div>
			<div class="tab-pane " id="finished">
					<div class="tab-pane active" id="all">
				<div id="missTabFinished" >
					<?php include("modules/table_miss.php") ;?>
				</div>
				</div>
			</div>
			<div class="tab-pane" id="canceled">
					<div class="tab-pane active" id="all">
				<div id="missTabCanceled" >
					<?php include("modules/table_miss.php") ;?>
				</div>
				</div>
			</div>
		</div>
	</div>
