
document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementsByTagName('Loader').length > 0) {

      var loaderDiv = document.createElement('div');
      loaderDiv.id = 'preloader';

      loaderDiv.innerHTML = '<svg><circle cx="70" cy="70" r="70"></circle></svg><style>* {    margin: 0;    padding: 0;}#preloader {    display: flex;    justify-content: center;    align-items: center;    min-height: 100vh;    background: #05091f;}#preloader svg {    position: relative;    width: 150px;    height: 150px;    animation: rotate 2s linear infinite;}@keyframes rotate {    0% {        transform: rotate(0deg);    }    100% {        transform: rotate(360deg);    }}#preloader svg circle {    width: 100%;    height: 100%;    fill: none;    stroke-width: 10;    stroke: #00a1ff;    stroke-linecap: round;    transform: translate(5px, 5px);    stroke-dasharray: 440;    stroke-dashoffset: 440;    animation: animate 4s linear infinite;}@keyframes animate {    0%,    100% {        stroke-dashoffset: 440;    }    50% {        stroke-dashoffset: 0;    }    50.1% {        stroke-dashoffset: 880;    }}</style><script>var preloader = document.getElementById("preloader");window.addEventListener("load", function(){preloader.style.display = "none";})</script>';

      var loaderTag = document.getElementsByTagName('Loader')[0];

      loaderTag.parentNode.replaceChild(loaderDiv, loaderTag);
    }
  });
  