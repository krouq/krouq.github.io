let spinnerWrapper = document.querySelector('.spinner-wrapper');
let mainContent = document.querySelector('.main-content');

window.addEventListener('load', function(){
  setTimeout(removeSpinner, 2000)
});

function removeSpinner() {
  spinnerWrapper.style.display= 'none';
  mainContent.style.display= 'block';
}