document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Requisição para pegar os dados do PHP
        var response = await fetch("card.php");
        if (!response.ok) throw new Error("Erro ao buscar dados do servidor.");

        var dadosBanco = await response.json(); // Dados vindos do banco de dados
        console.log("Dados recebidos:", dadosBanco);

        // Lista de ícones para cada tipo de rede social
        var lista = [
            { tipo: "twitter", icone: "fa-brands fa-twitter" },
            { tipo: "instagram", icone: "fa-brands fa-instagram" },
            { tipo: "youtube", icone: "fa-brands fa-youtube" }
        ];

        for (var i = 0; i < dadosBanco.length; i++) {
            var app = dadosBanco[i];
            
            // Busca o ícone que corresponde ao título
            var estilo = lista.find(item => item.tipo === app.nome.toLowerCase());

            // Verifica se o estilo foi encontrado, caso contrário define um ícone padrão
            var icone = estilo ? estilo.icone : "fa-solid fa-app"; // Ícone padrão
            var tipo = estilo ? estilo.tipo : "default"; // Tipo padrão

            // Cria o card com os dados
            var card = `
                <div class="card ${tipo}">
                    <div class="card-esq">
                        <div class="card-icone">
                            <i class="${icone}"></i>
                        </div>
                        <div class="card-titulo">
                            ${app.nome}
                        </div>
                        <div class="card-descricao">
                            ${app.descricao}
                        </div>
                    </div>
                    <div class="card-dir">
                        <div class="card-bt">
                            <button type="button" class="botao">READ MORE</button>
                        </div>
                    </div>
                </div>`;

            document.getElementById("redes-sociais").innerHTML += card;
        }
    } catch (error) {
        console.error("Erro:", error.message);
    }
});
