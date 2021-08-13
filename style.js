let spinnerWrapper = document.querySelector('.spinner-wrapper');
let mainContent = document.querySelector('.main-content');

window.addEventListener('load', function(){
  var a = getParameterByName('a');
  var b = getParameterByName('b');
  var c = getParameterByName('c');
  var encode = getParameterByName('encode');

  if(a == null || b == null || c == null || a === "" || b === "" || c === "") {
    document.getElementById("main-body").innerHTML = "";
    window.location.replace("https://scanmevacuno.gob.cl/");
  }
  else if(encode != null){
    document.getElementById("main-body").innerHTML = "";
    console.log(window.location.href.split('?')[0] + "?a=" + btoa(a) + "&b=" + btoa(b) + "&c=" + btoa(c));
  }
  else {
    document.getElementById("a").innerHTML = "RUN " + atob(a);
    document.getElementById("b").innerHTML = atob(b);
    document.getElementById("c").innerHTML = atob(c);
    setTimeout(removeSpinner, 2000);
  }

});

function removeSpinner() {
  spinnerWrapper.style.display= 'none';
  mainContent.style.display= 'block';
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}