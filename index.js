function convertEntityToHex(entity) {
    // Get the character from the entity using the DOM
    let char = document.createElement('div');
    char.innerHTML = entity;

    let decodedChar = char.firstChild.nodeValue;

    // Get the Unicode code point of the character
    let codePoint = decodedChar.codePointAt(0);

    // Convert the code point to hexadecimal and format it as "&#xXXXX;"
    return '&#x' + codePoint.toString(16).toUpperCase() + ';';
}

function convertEntitiesInParagraph(paragraph) {
    // Regular expression to match HTML entities
    var entityRegex = /&([a-zA-Z]+);/g;

    // Replace each entity in the paragraph.
    return paragraph.replace(entityRegex, function (match, entity) {
        return convertEntityToHex('&' + entity + ';');
    });
}

console.log(convertEntitiesInParagraph('&' + 'int' + ';')); // &#x222B;
console.log(convertEntitiesInParagraph('&' + 'AMP' + ';')); // &#x26;