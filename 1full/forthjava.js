function doFirst(){
	var x = document.getElementById("zombie");
	x.addEventListener("mouseover", shoot ,false);
	x.addEventListener("mouseout", cancel,false);
	
	var y = document.getElementById("peter");
	y.addEventListener("mouseover", shoot1 ,false);
	y.addEventListener("mouseout", cancel1,false);
	
	var z = document.getElementById("anne");
	z.addEventListener("mouseover", shoot2 ,false);
	z.addEventListener("mouseout", cancel2,false);
	
	var a = document.getElementById("my_leg");
	a.addEventListener("mouseover", shoot3 ,false);
	a.addEventListener("mouseout", cancel3,false);
	
}
function shoot(){
	document.getElementById("zombie").innerHTML = "<br><br><br><br><br>Shoot me?";
	document.getElementById("my_leg").innerHTML = "<br>Zombie";
}
function cancel(){
	document.getElementById("zombie").innerHTML = "";
	document.getElementById("my_leg").innerHTML = "";
}
function shoot1(){
	document.getElementById("peter").innerHTML = "<br><br><br><br><br>Imma rape you";
	document.getElementById("my_leg").innerHTML = "<br>Peter";
}
function cancel1(){
	document.getElementById("peter").innerHTML = "";
	document.getElementById("my_leg").innerHTML = "";
}
function shoot2(){
	document.getElementById("anne").innerHTML = "<br><br><br><br><br>I love you!<br>Dont kill me!";
	document.getElementById("my_leg").innerHTML = "<br>Anne";
}
function cancel2(){
	document.getElementById("anne").innerHTML = "";
	document.getElementById("my_leg").innerHTML = "";
}
function shoot3(){
	document.getElementById("my_leg").innerHTML = "<br>Shoot my leg....";
}
function cancel3(){
	document.getElementById("my_leg").innerHTML = "";
}
window.addEventListener("load",doFirst,false);