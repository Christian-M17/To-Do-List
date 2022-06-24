const form = document.getElementById('lista');
const lista = document.getElementById('tarefas');

form.onsubmit = function (e) {
e.preventDefault();
const texto = document.getElementById('adicionar-tarefa');
adicionarTarefa (texto.value);
form.reset();
};

function adicionarTarefa(description) {
const divTarefa = document.createElement('div');
const novaTarefa = document.createElement('input');
const tarefaTexto = document.createElement('label');
const descricaoTarefa = document.createTextNode(description);

novaTarefa.setAttribute('type', 'checkbox');
novaTarefa.setAttribute('name', description);
novaTarefa.setAttribute('id',description);

tarefaTexto.setAttribute('for', description);
tarefaTexto.appendChild(descricaoTarefa);

divTarefa.classList.add('task-item');
divTarefa.appendChild(novaTarefa);
divTarefa.appendChild(tarefaTexto);


lista.appendChild(divTarefa);

}