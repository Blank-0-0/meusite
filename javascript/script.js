document.addEventListener("DOMContentLoaded", function() {
    let inputs = [  document.getElementById("name"),
                    document.getElementById("email"),
                    document.getElementById("text")]
    let button = document.getElementById("button");
    button.addEventListener("click", function(){
        if(!inputs[0].value){
            alert("Campo nome não pode ser vazio!");
            return;
        }
        else if(inputs[0].value.length > 50 || !/^[a-zA-ZÀ-ÿ]+$/.test(inputs[0].value)){
            alert("Nome muito grande ou contém caracteres especiais/números!");
            return;
        }
        else if(inputs[1].value.length > 50 || !/^\S+@\S+\.\S+$/.test(inputs[1].value)){
            alert("Email informado muito grande ou inválido!");
            return;
        }
        else if(inputs[2].value.length > 200 || !inputs[2].value){
            alert("Mensagem maior que 200 caracteres ou vazia!");
            return;
        }
        for(let i = 0; i < 3; i++){
            inputs[i].value = "";
        }
        alert("Mensagem enviada com sucesso!");
        return;
    });
});

