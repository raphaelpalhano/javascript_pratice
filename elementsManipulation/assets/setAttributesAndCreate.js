function setAttributeHTML(){
    const selectHeader = document.querySelector('header');

    selectHeader.setAttribute('id', 'header-top')
}

setAttributeHTML();

function createElement(){
    const selectHeader = document.querySelector('header');
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'container')
    selectHeader.append(divElement);
}

createElement();