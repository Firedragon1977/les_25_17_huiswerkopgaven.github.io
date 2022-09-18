/* JavaScript-document */
$(document).ready(function(){
	/* De berekeningen uitvoeren. */
	$("#rekenen").click(function(){
		var eerstegetal = $("#eerstegetal").val().replaceAll(".", "");
		var tweedegetal = $("#tweedegetal").val().replaceAll(".", "");
		/* Eerst nalopen of de waarden ingevoerd en numeriek zijn. */
		switch(true){
			case isNaN(eerstegetal):
				window.alert("Typ alleen een getal in de eerste invoerveld!");
				$("#eerstegetal").val("");
				return;
			case eerstegetal=="":
				window.alert("Typ alsnog een getal in de eerste invoerveld!");
				return;
		}
		switch(true){
			case isNaN(tweedegetal):
				window.alert("Typ alleen een getal in de tweede invoerveld!");
				$("#tweedegetal").val("");
				return;
			case tweedegetal=="":
				window.alert("Typ alsnog een getal in de tweede invoerveld!");
				return;
		}					
		var uitkomst = eerstegetal * tweedegetal;
		/* De ingevoerde waarden in lokale formaat tonen. */
		$("#eerstegetal").val(Number(eerstegetal).toLocaleString());
		$("#tweedegetal").val(Number(tweedegetal).toLocaleString());
		$("#uitkomst").val(Number(uitkomst).toLocaleString());
		const tekstvak = document.getElementById("uitkomst");
		var kleur = "";
		switch(true){
			case uitkomst >= 1E6:
				kleur = "red";
				window.alert("De uitkomst is veel te hoog!");
				break;
			case uitkomst >= 0.5E6:
				kleur = "orange";
				break;
			case uitkomst >= 0.25E6:
				kleur = "yellow";
				break;
			case uitkomst >= 0:
				kleur = "green";
				break;
		}
		/* De meerdere CSS-eigenschappen in een keer achter elkaar gezet. */
		$("#uitkomst").css({"background-color": kleur,
							"color": "white"});
	});
	/* De betrokken tekstvelden opschonen. */
	$("#opschonen").click(function(){
		$("#eerstegetal").val("");
		$("#tweedegetal").val("");
		$("#uitkomst").val("");
		$("#uitkomst").css({"background-color": "white"});
	});
});