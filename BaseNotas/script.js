document.getElementById('criarBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
});

// Função para criar uma nova nota
function criarNota() {
    // Cria um elemento de nota com funções de editar e excluir
    const notaContainer = document.createElement('div');
    notaContainer.className = 'nota';
    notaContainer.innerHTML = `
        <div contenteditable="true" class="nota-texto">Escreva sua nota aqui...</div>
        <button class="delete-btn" onclick="excluirNota(this)">Excluir</button>
    `;

    document.getElementById('content').appendChild(notaContainer);
    document.getElementById('toolbar').style.display = 'block'; // Exibe a barra de ferramentas
    fecharDropdown();
}

// Função para salvar a nota
function salvarNota() {
    const notas = document.querySelectorAll('.nota-texto');
    notas.forEach(nota => {
        console.log('Conteúdo salvo:', nota.innerHTML); // Salvar o conteúdo (pode ser salvo no localStorage ou enviado ao servidor)
    });
    alert('Notas salvas com sucesso!');
}

// Função para aplicar formatação de texto (negrito, itálico, sublinhado)
function format(command) {
    document.execCommand(command, false, null);
}

// Função para alterar o tamanho do texto
function alterarTamanho() {
    let tamanho = prompt('Digite o tamanho da fonte (ex: 16px):', '16px');
    document.execCommand('fontSize', false, '7'); // Aplica o tamanho maior, que será ajustado a seguir
    let fonts = document.getElementsByTagName('font');
    for (let i = 0; i < fonts.length; i++) {
        if (fonts[i].size === '7') {
            fonts[i].removeAttribute('size');
            fonts[i].style.fontSize = tamanho;
        }
    }
}

// Função para excluir a nota
function excluirNota(btn) {
    const nota = btn.parentElement; // Seleciona a nota pai do botão de excluir
    if (confirm('Tem certeza que deseja excluir esta nota?')) {
        nota.remove();
    }
}

// Funções para Flash Cards e Mapas Mentais (sem barra de ferramentas)
function criarFlashCards() {
    document.getElementById('content').innerHTML = '<h2>Flash Cards</h2><p>Aqui você pode criar seus flash cards...</p>';
    document.getElementById('toolbar').style.display = 'none'; // Esconde a barra de ferramentas
    fecharDropdown();
}

function criarMapaMental() {
    document.getElementById('content').innerHTML = '<h2>Mapas Mentais</h2><p>Aqui você pode criar seus mapas mentais...</p>';
    document.getElementById('toolbar').style.display = 'none'; // Esconde a barra de ferramentas
    fecharDropdown();
}

function fecharDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}
