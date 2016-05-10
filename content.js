var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var node2 = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Kobe Bryant/gi, 'Ajit Bopalkar');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

        }
    }
}


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var node2 = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Bryant/gi, 'Bopalkar');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

        }
    }
}


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var node2 = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Kobe/gi, 'Ajit');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var node2 = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Mamba/gi, 'PM');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

        }
    }
}