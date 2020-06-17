nazwa1 = null; kod1= null; netto1=null; vat1=null; brutto1=null; kategoria1_1=null; opcja1=null; ocena1=null; photo1= null; licznik1=0; powtorzenie_danych = null; tableindeks=null;

function sprawdzTowarName() {
var formularz_obj=document.getElementById("nazwa_towaru");
var t_name = formularz_obj.value;
var blad = document.getElementById("towar_name_blad");
var objRegExp = /^[a-zA-Z]+$/;

powtorzenie_danych = document.querySelector("table tbody tr td[name='"+t_name+"']");

if (t_name === "")
 {
 blad.innerHTML = "Podaj nazwe towaru";
 blad.classList.add("invalid-feedback");
 formularz_obj.classList.add("is-invalid");
 blad.classList.remove("valid-feedback");
 formularz_obj.classList.remove("is-valid");
 blad_danych=false;
 }
else if (t_name.length > 10)
 {
 blad.innerHTML = "Za dluga nazwa (max 10 znakow)";
 blad.classList.add("invalid-feedback");
 formularz_obj.classList.add("is-invalid");
 blad.classList.remove("valid-feedback");
 formularz_obj.classList.remove("is-valid");
 blad_danych=true;
 }
else if(powtorzenie_danych != null) {
	blad.innerHTML = "Podany produkt znajduje się już w tabeli";
	blad.classList.remove('valid-feedback');
	formularz_obj.classList.remove('is-valid');
	blad.classList.add('invalid-feedback');
	formularz_obj.classList.add('is-invalid');
	return false;
}
else
{
 blad.classList.remove("invalid-feedback");
 formularz_obj.classList.remove("is-invalid");
 blad.classList.add("valid-feedback");
 formularz_obj.classList.add("is-valid");
 blad.innerHTML = "";
 blad_danych=false;
 }
nazwa1 = t_name;

return blad_danych;
}

function sprawdzTowarKod() 
{	
	var formularz_obj=document.getElementById("kod_towaru");
	var t_name = formularz_obj.value;
	var blad = document.getElementById("towar_kod_blad");
	var objRegExp  = /^[0-9a-zA-Z]{2}-[0-9a-zA-Z]{2}$/;

	if (t_name === "")
	 {
		 blad.innerHTML = "Podaj kod towaru";
		 blad.classList.add("invalid-feedback");
		 formularz_obj.classList.add("is-invalid");
		 blad.classList.remove("valid-feedback");
		 formularz_obj.classList.remove("is-valid");
		 blad_danych=false;
	 }
	 else if (!objRegExp.test(t_name))
    {
        blad.innerHTML = "Podaj Prawidłowy kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
	    else
	{
	 blad.classList.remove("invalid-feedback");
	 formularz_obj.classList.remove("is-invalid");
	 blad.classList.add("valid-feedback");
	 formularz_obj.classList.add("is-valid");
	 blad.innerHTML = "";
	 blad_danych=false;
	 }
	    kod1 = t_name;
	return blad_danych;
}

function sprawdzTowarCenaNetto() 
{	
	var formularz_obj=document.getElementById("cena_netto");
	var t_name = formularz_obj.value;
	var blad = document.getElementById("towar_cena_netto_blad");
	var objRegExp  = /^[0-9]/;

	if (t_name === "")
	 {
		 blad.innerHTML = "Podaj cene netto";
		 blad.classList.add("invalid-feedback");
		 formularz_obj.classList.add("is-invalid");
		 blad.classList.remove("valid-feedback");
		 formularz_obj.classList.remove("is-valid");
		 blad_danych=false;
	 }
	 else if(!objRegExp.test(t_name))
	 {
	 	blad.innerHTML = "Podaj prawidłową cene netto";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
	 }
	    else
	{
	 blad.classList.remove("invalid-feedback");
	 formularz_obj.classList.remove("is-invalid");
	 blad.classList.add("valid-feedback");
	 formularz_obj.classList.add("is-valid");
	 blad.innerHTML = "";
	 blad_danych=false;
	 }
	

	t_name = parseFloat(t_name);
	t_name = t_name.toFixed(2);
	document.getElementById("cena_netto").value = t_name; 



	 var stawka_vat_pobieranie = document.getElementById("stawka_vat");
	 var vat = stawka_vat_pobieranie.value;

	 vat = vat * 0.01;
	 wynik = parseFloat(t_name) + (t_name * vat);
	 document.getElementById("cena_brutto").value = wynik;



	 netto1 = t_name;
	 brutto1 = wynik;
	return blad_danych;
}

function sprawdzTowarStawkaVat() 
{	
	var formularz_obj=document.getElementById("stawka_vat");
	var t_name = formularz_obj.value;
	var blad = document.getElementById("towar_stawka_vat_blad");
	var objRegExp  = /^[0-9]/;

	if (t_name === "")
	 {
		 blad.innerHTML = "Podaj stawkę vat";
		 blad.classList.add("invalid-feedback");
		 formularz_obj.classList.add("is-invalid");
		 blad.classList.remove("valid-feedback");
		 formularz_obj.classList.remove("is-valid");
		 blad_danych=false;
	 }
	 else if (!objRegExp.test(t_name))
    {
        blad.innerHTML = "Podaj Prawidłowy kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
	    else
	{
	 blad.classList.remove("invalid-feedback");
	 formularz_obj.classList.remove("is-invalid");
	 blad.classList.add("valid-feedback");
	 formularz_obj.classList.add("is-valid");
	 blad.innerHTML = "";
	 blad_danych=false;
	 }


	 var cena_netto_pobieranie = document.getElementById("cena_netto");
	 var netto = cena_netto_pobieranie.value;

	 t_name = t_name * 0.01;
	 wynik = parseFloat(netto) + (netto * t_name);
	 document.getElementById("cena_brutto").value = wynik;

	vat1 = t_name;
	brutto1 = wynik;
	return blad_danych;
}

function sprawdzTowarKategoria(){
	var kategoria = document.getElementById("kategoriaTowaru");
	var kategoria1 = kategoria.value;
	var blad = document.getElementById('kategoriaBlad');
	if (kategoria1 == "Wybierz"){
		blad.innerHTML = "Zaznacz kategorię";
		blad.classList.add("invalid-feedback");
		kategoria.classList.add("is-invalid");
		blad.classList.remove("valid-feedback");
		kategoria.classList.remove("is-valid");
		kategoriaBlad=false;
	}
	else{
		blad.classList.remove("invalid-feedback");
		kategoria.classList.remove("is-invalid");
		blad.classList.add("valid-feedback");
		kategoria.classList.add("is-valid");
		blad.innerHTML = "";
		kategoria1_1 = kategoria1;
		kategoriaBlad=false;
	}
}


function sprawdzTowarCheckbox() {
	var licznik = 0;
	var opcje = null;
	for (var i = 0; i < 5; i++) {
		if (document.forms["form"]["opcjeTowaru"][i].checked) {
			licznik++;
			if (opcje == null) {
				opcje = document.forms["form"]["opcjeTowaru"][i].value + ", ";
			} else {
				opcje = opcje + document.forms["form"]["opcjeTowaru"][i].value + ", ";
			}

		}
	}

	var opcja = document.getElementById('productOptionGroup');
	var opcjaBlad = document.getElementById('opcjaBlady');

	if (licznik < 2) {
		opcjaBlad.innerHTML = "Prosze wybrać conajmniej 2 opcje";
		return false;
	} else {
		opcjaBlad.innerHTML = " ";
		opcja1 = opcje;
		return true;
	}
}


function sprawdzZdjecie() {
	var formularz_obj=document.getElementById("zdjecie_produktu");
	var t_name = formularz_obj.value;
	var blad = document.getElementById("zdjecie_blad");
	var objRegExp = /^[a-zA-Z]+$/;

	if (t_name === "")
	{
		blad.innerHTML = "Zly format";
		blad.classList.add("invalid-feedback");
		formularz_obj.classList.add("is-invalid");
		blad.classList.remove("valid-feedback");
		formularz_obj.classList.remove("is-valid");
		blad_danych=false;
	}
	else
	{
		blad.classList.remove("invalid-feedback");
		formularz_obj.classList.remove("is-invalid");
		blad.classList.add("valid-feedback");
		formularz_obj.classList.add("is-valid");
		blad.innerHTML = "";
		blad_danych=false;
	}
	photo1 = t_name;
	return blad_danych;
}

function sprawdzFormularz() {
	if (sprawdzTowarName() || sprawdzTowarKod() || sprawdzTowarStawkaVat() || sprawdzTowarCenaNetto() || sprawdzTowarKategoria() || sprawdzTowarCheckbox() || sprawdzZdjecie()) {


		var radio = document.getElementsByTagName("przykladoweRadio");
		for (var i = 0; i < 5; i++) {
			if (document.forms["form"]["przykladoweRadio"][i].checked) {
				ocena1 = document.forms["form"]["przykladoweRadio"][i].value;
			}
		}

		$(function () {
			var content = '<tr>';
			content += '<td name="' + nazwa1 + '">' + nazwa1 + '</td>';
			content += '<td>' + kod1 + '</td>';
			content += '<td>' + netto1 + '</td>';
			content += '<td>' + vat1 + '</td>';
			content += '<td>' + brutto1 + '</td>';
			content += '<td>' + kategoria1_1 + '</td>';
			content += '<td>' + opcja1 + '</td>';
			content += '<td>' + ocena1 + '</td>';
			content += '<td>' + photo1 + '</td>';
			content += '<td> <button type="button" class="btn btn-secondary buttony" id="bt1" onClick="deleteRow(this)"><img class="ikony" id="kosz2" src="kosz.png"></img></button> <button type="button" class="btn btn-secondary buttony" src="#" id="bt2" onClick="edytujWiersz(this)"><img class="ikony" src="edit.png"></img></button> <button type="button" class="btn btn-secondary buttony" data-toggle="modal" data-target="#exampleModal" id="bt3" onClick="dodajKoszyk(this)"><img class="ikony" src="koszyk.png"></img></button></td>';
			content += '</tr>';

			$content = $(content),
				// resort table using the current sort; set to false to prevent resort, otherwise
				// any other value in resort will automatically trigger the table resort.
				resort = true;
			var sorting = [[2, 1], [0, 0]];
			$('#myTable')

				.find('tbody').append($content)
				.trigger('updateAll', [$content, resort]);

			document.getElementById("form_id").reset();

			nazwa = document.getElementById('nazwa_towaru');
			kod = document.getElementById('kod_towaru');
			netto = document.getElementById('cena_netto');
			vat = document.getElementById('stawka_vat');
			brutto = document.getElementById('cena_brutto');
			checkBox = document.getElementsByTagName("productOptionGroup");
			selekt = document.getElementById("kategoriaTowaru");

			nazwa.classList.remove('is-valid');
			kod.classList.remove('is-valid');
			netto.classList.remove('is-valid');
			vat.classList.remove('is-valid');
			selekt.classList.remove('is-valid');
			document.getElementById("table2").removeAttribute("hidden");
			document.getElementById("kafle").setAttribute("hidden", "true");


			return false;
		});

	}
}

function walidacjaFormularzEdycja(){

	if (sprawdzTowarName() || sprawdzTowarKod() || sprawdzTowarStawkaVat() || sprawdzTowarCenaNetto() || sprawdzTowarKategoria() || sprawdzTowarCheckbox() || sprawdzZdjecie()) {
		var radio = document.getElementsByTagName("przykladoweRadio");
		for (var i = 0; i < 5; i++) {
			if (document.forms["form"]["przykladoweRadio"][i].checked) {
				ocena1 = document.forms["form"]["przykladoweRadio"][i].value;
			}
		}

		$('#myTable').trigger('updateAll', [$content, resort]);

		var table = document.getElementById('myTable');
		var i = tableindeks.parentNode.parentNode.rowIndex;

		table.rows[i].cells[0].innerHTML = nazwa1;
		table.rows[i].cells[1].innerHTML = kod1;
		table.rows[i].cells[2].innerHTML = netto1;
		table.rows[i].cells[3].innerHTML = vat1;
		table.rows[i].cells[4].innerHTML = brutto1;
		table.rows[i].cells[5].innerHTML = kategoria1_1;
		table.rows[i].cells[6].innerHTML = opcja1;
		table.rows[i].cells[7].innerHTML = ocena1;

		//el = null;
		nazwa.classList.remove('is-valid');
		kod.classList.remove('is-valid');
		netto.classList.remove('is-valid');
		vat.classList.remove('is-valid');
		selekt.classList.remove('is-valid');

		document.getElementById('przycisk2').innerHTML = 'Wyślij';
		document.getElementById('przycisk2').setAttribute( "onClick", "sprawdzFormularz()");
		document.getElementById('przycisk2').setAttribute( "id", "przycisk");
		$('#myTable').trigger('updateAll', [$content, resort]);
		document.getElementById("form_id").reset();
		return true;
	}

}

function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("myTable").deleteRow(i);

	$('#myTable').trigger('updateAll', [$content, resort]);

}

function edytujWiersz(r){

	nazwa.classList.add('is-valid');
	kod.classList.add('is-valid');
	netto.classList.add('is-valid');
	vat.classList.add('is-valid');
	selekt.classList.add('is-valid');

	window.scrollTo(0, 0);
	$('#myTable').trigger('updateAll', [$content, resort]);
	var table = document.getElementById('myTable');
	tableindeks = r;
	var i = r.parentNode.parentNode.rowIndex;
	nazwa.value = table.rows[i].cells[0].innerHTML;
	kod.value = table.rows[i].cells[1].innerHTML;
	netto.value = table.rows[i].cells[2].innerHTML;
	vat.value = table.rows[i].cells[3].innerHTML;
	brutto.value = table.rows[i].cells[4].innerHTML;
	selekt.value = table.rows[i].cells[5].innerHTML;
	//nazwa.value = table.rows[i].cells[6].innerHTML;
	var oc = parseInt(table.rows[i].cells[7].innerHTML);
	oc = oc -1;
	//alert(oc);
	document.forms["form"]["przykladoweRadio"][oc].checked = true;

	document.getElementById('przycisk').innerHTML = 'Edytuj';
	document.getElementById('przycisk').setAttribute( "onclick", "walidacjaFormularzEdycja()");
	document.getElementById('przycisk').setAttribute( "id", "przycisk2");

}


function dodajKoszyk(r){
	$('#myTable').trigger('updateAll', [$content, resort]);
	var table = document.getElementById('myTable');
	var i = r.parentNode.parentNode.rowIndex;
	var nazwa2 = table.rows[i].cells[0].innerHTML;
	var brutto2 = table.rows[i].cells[4].innerHTML;


	if(localStorage.length > 0 ){
		var zakupy = JSON.parse(localStorage.koszyk);
		//var help = zakupy.length;
		for (var i = 0; i < zakupy.length; i++) {
			//console.log(help);
			if(nazwa2 === zakupy[i].Product){
				zakupy[i].Ilosc += 1;
				exist = 1;
				break;
			}else{
				exist=0;
			}
		}
	}
	if(exist == 0){
		var item = { Product: nazwa2,  Price: brutto2, Ilosc: ilosc};
		cart.push(item);
		localStorage.koszyk = JSON.stringify(cart);

	}else{
		localStorage.setItem("koszyk", JSON.stringify(zakupy));
	}



}


$(function() {
	$("#table2").tablesorter({
		widgets: ["zebra"],
		//sortList: [[3,1],[0,0]],
	});
	//alert(dostawa2);
	$("#sortowanie").change(function(){
		var sortVal = document.getElementById("sortowanie").value;;

		switch(sortVal){
			case "1":
				$("#myTable").find("th:contains(Nazwa)").trigger("sorton", [ [[0,0]] ]);
				break;
			case "2":
				$("#myTable").find("th:contains(Nazwa)").trigger("sorton", [ [[0,1]] ]);
				break;
			case "3":
				$("#myTable").find("th:contains(Cena brutto)").trigger("sorton", [ [[4,0]] ]);
				break;
			case "4":
				$("#myTable").find("th:contains(Cena brutto)").trigger("sorton", [ [[4,1]] ]);
				break;
			case "5":
				$("#myTable").find("th:contains(Ocena)").trigger("sorton", [ [[7,0]] ]);
				break;
			case "6":
				$("#myTable").find("th:contains(Ocena)").trigger("sorton", [ [[7,1]] ]);
				break;
		}
		$("#kafle").empty();
		$('#myTable').trigger('updateAll', [$content, resort]);
		var table = document.getElementById('myTable');
		//var i = r.parentNode.parentNode.rowIndex;
		var i = 1;
		while(table.rows[i].cells[0] != null){
			var nazwa = table.rows[i].cells[0].innerHTML;
			var cenanet = table.rows[i].cells[2].innerHTML;
			var cenabrut = table.rows[i].cells[4].innerHTML;
			var zdjecie = table.rows[i].cells[8].innerHTML;
			var content = '<div class="kafelki">'+zdjecie+'<br><h4 class="kafelki_nazwa">'+nazwa+'</h4><h6>'+cenanet+'zł('+cenabrut+'zł)</h6></div>';
			$content = $(content),

				$('#kafle').append($content);
			//document.getElementById("table").innerHTML(content);
			//alert(zdjecie);
			i++;
		}

	});

});

