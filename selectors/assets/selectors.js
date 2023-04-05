function alertSelector(typeSelector){
    let divAlert = document.querySelector(typeSelector);
    if(typeSelector.includes('danger')){
        divAlert.innerHTML = "Falha ao carregar sistema!";
        divAlert.style= "color: white; background:#e94975; padding: 8px; border: 1px solid #b0cdf8; width: 50%; border-radius: 6px;"
        setTimeout(function() {divAlert.innerHTML='';},8000); // vai zerar o texto inserido na variável msg, depois que passar 8seg;
        setTimeout(function() {divAlert.style='';},8000); // vai apagar os elementos de style 8seg;
        
    }
}

