var blocnom = document.getElementById("blocnom");
var blocprojets = document.getElementById("blocprojets");
var bloccontact = document.getElementById("bloccontact");
var blocabout = document.getElementById("blocabout");
var boutonprojets = document.getElementById("boutonprojets");
var boutoncontact = document.getElementById("boutoncontact");
var boutonabout = document.getElementById("boutonabout");
var body = document.getElementById("body");

var all = [blocnom,blocprojets,bloccontact,blocabout,boutonprojets,boutoncontact,boutonabout,body];
var couleurs = ['#74bfc2','#eb5850','#464e50','#fbab22'];

function changeprojets() {
  for (var items = 0; items < all.length; items++) {
    all[items].removeAttribute("class");
    all[items].className = 'projets';
  }
}

function changeabout() {
  for(var items = 0; items < all.length; items++) {
    all[items].removeAttribute("class");
    all[items].className = 'about';
  }
}

function changecontact() {
  for(var items = 0; items < all.length; items++) {
    all[items].removeAttribute("class");
    all[items].className = 'contact';
  }
}

function changecouleur() {

}
