function copyCode(codeElement) {
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    var copyButton = codeElement.parentNode.querySelector('.copyButton');
    copyButton.textContent = 'Code kopiert!';

    setTimeout(function() {
        copyButton.textContent = 'Copy';
    }, 2000);
}

function createExampleCode(exampleCodeTag) {
    var code = exampleCodeTag.innerHTML;
    var lang = exampleCodeTag.getAttribute('lang');
    var AttributfontSize = exampleCodeTag.getAttribute('fontSize');
    var divWidth = exampleCodeTag.getAttribute('width');
    var divHeight = exampleCodeTag.getAttribute('height');
    var theme = exampleCodeTag.getAttribute('theme') || 'dark';
    

    var container = document.createElement('div');
    container.classList.add('code-container');
    container.style.position = 'relative';
    container.style.backgroundColor = theme === 'dark' ? '#1e1e1e' : '#f5f5f5';
    container.style.color = '#d4d4d4';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';
    container.style.marginBottom = '20px';

    if (divWidth == null) {
        container.style.width = "auto";
    } else {
        container.style.width = divWidth;
    }
    if (divHeight == null) {
        container.style.height = "auto";
    } else {
        container.style.height = divHeight;
    }

    

    var button = document.createElement('button');
    button.classList.add('copyButton');
    button.textContent = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '5px';
    button.style.right = '5px';
    button.style.backgroundColor = theme === 'dark' ? '#007acc' : '#005f8c';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.padding = '5px 10px';
    button.style.borderRadius = '3px';


    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s';

    var pre = document.createElement('pre');
    pre.textContent = code;
    pre.style.color = theme === 'dark' ? '#ffffff' : '#333333';

    var langText = document.createElement('p');
    langText.textContent = lang;
    langText.style.color = theme === 'dark' ? '#ffffff' : '#333333';
    langText.style.marginTop = '5px';
    langText.style.fontSize = '15px';
    langText.style.fontFamily = 'Monospace,Monaco';

    if (AttributfontSize == null) {
        pre.style.fontSize = '15px';
    } else {
        pre.style.fontSize = AttributfontSize;
    }


    button.addEventListener('click', function() {
        copyCode(pre);
    });

    container.appendChild(button);
    container.appendChild(langText);
    container.appendChild(pre);


    return container;
}

window.addEventListener('DOMContentLoaded', function() {
    var style = document.createElement('style');
    style.textContent = `
        .code-container button:hover {
            background-color: #005f8c;
        }

        .code-container button:active {
            background-color: #003c5a;
        }
    `;

    document.head.appendChild(style);

    var exampleCodeTags = document.getElementsByTagName('examplecode');
    var containers = [];
    for (var i = 0; i < exampleCodeTags.length; i++) {
        var exampleCodeTag = exampleCodeTags[i];
        var lang = exampleCodeTag.getAttribute('lang');
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