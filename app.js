let section = document.getElementById("resultados-pesquisa");
// Seleciona o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável para posterior manipulação.


console.log(section);
// Imprime no console do navegador o elemento selecionado para fins de depuração.

function pesquisar() {
    // Função responsável por gerar e inserir os resultados da pesquisa na seção HTML.

    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa.value);

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado, favor realizar uma busca possível</p>" 
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();  

    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of banco_de_dados) { 
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();  
        tags = dado.tags.map(tag => tag.toLowerCase());
        // Se titulo includes campoPesquisa
        // então, faça...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||  tags.some(tag => tag.includes(campoPesquisa))){
            // cria um novo elemento.
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais</a>
                </div>
            `;
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado, faça uma busca válida</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}







