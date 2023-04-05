function openAndCloseModal(){
    const button = document.querySelector('#openModal');
    const divModal = document.querySelector('.modal-wrapper');

    button.addEventListener("click", function(event) {
        console.log(event);
        divModal.classList.remove('invisible');
    })

    document.addEventListener("keydown", function(event){
        console.log(event);
        if(event.key === "Escape"){
            divModal.classList.add('invisible');

        }
    })
}

openAndCloseModal();
