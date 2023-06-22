

function createExampleCode(exampleCodeTag) {
    var code = exampleCodeTag.innerHTML;
    

    var container = document.createElement('div');




    return container;
}

window.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent = `* {    margin: 0;    padding: 0;}#preloader {    display: flex;    justify-content: center;    align-items: center;    min-height: 100vh;    background: #05091f;}#preloader svg {    position: relative;    width: 150px;    height: 150px;    animation: rotate 2s linear infinite;}@keyframes rotate {    0% {        transform: rotate(0deg);    }    100% {        transform: rotate(360deg);    }}#preloader svg circle {    width: 100%;    height: 100%;    fill: none;    stroke-width: 10;    stroke: #00a1ff;    stroke-linecap: round;    transform: translate(5px, 5px);    stroke-dasharray: 440;    stroke-dashoffset: 440;    animation: animate 4s linear infinite;}@keyframes animate {    0%,    100% {        stroke-dashoffset: 440;    }    50% {        stroke-dashoffset: 0;    }    50.1% {        stroke-dashoffset: 880;    }}`;

    var script = document.createElement('script');
    script.textContent = `var preloader = document.getElementById("preloader");window.addEventListener("load", function(){preloader.style.display = "none";})`;

    var script = document.createElement('svg');
    script.textContent = `<circle cx="70" cy="70" r="70"></circle>`;

    document.head.appendChild(style);
    document.head.appendChild(script);

    var exampleCodeTags = document.getElementsByTagName('Loader');
    var containers = [];
    for (var i = 0; i < exampleCodeTags.length; i++) {
        var exampleCodeTag = exampleCodeTags[i];
        var container = createExampleCode(exampleCodeTag);
        containers.push({
            exampleCodeTag: exampleCodeTag,
            container: container
        });
    }

    containers.forEach(function(item) {
        item.exampleCodeTag.parentNode.replaceChild(item.container, item.exampleCodeTag);
    });
});