let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function criarTarefa() {
    let tarefa = input.value;
    if (tarefa === "" || tarefa === null) {
        alert("Digite uma tarefa!");
    } else {
        let novoItem = `
        <div class="item">
            <div class="item-icone" onclick="marcarTarefa()">
                <img class="icon" src="icons/cancel.svg" alt="Ícone de tarefa">
            </div>
            <div class="item-nome">
                <p>${tarefa}</p>
            </div>
            <div class="item-botao">
                <button onclick="deletarTarefa(this)" class="del"> <img class="icon" src="icons/delete-alert.svg" alt="Ícone de deletar tarefa"></button>
            </div>
        </div>
        `;

        main.innerHTML += novoItem;

        //Zera o campo de input e foca novamente para digitar a próxima tarefa
        input.value = "";
        input.focus();
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});

function deletarTarefa() {
    let tarefa = event.target;
    tarefa.parentElement.parentElement.remove();
}

function marcarTarefa() {
    let tarefa = event.target;
    tarefa.classList.toggle("clicado");
}
