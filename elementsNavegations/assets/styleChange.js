function changeStyleMain(){
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    body.style = "height: 100vh; border: solid 1px black;"
    body.classList.toggle('cls-green');
    header.style = "background-color: black;  color: white; padding: 0.5rem; margin: 5px;"
    main.style = "border: solid 1px black; flex:1"

}
changeStyleMain();