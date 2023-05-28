var championships = [
    { nome: "Campeonato 1", data: "01/01/2023", imagem: "../../assets/item.svg" },
    { nome: "Campeonato 2", data: "02/01/2023", imagem: "../../assets/item.svg"},
    { nome: "Campeonato 3", data: "03/01/2023", imagem: "../../assets/item.svg" }
];

function adicionarCampeonatos() {
    var championshipRow = document.getElementById("championship-row");

    championships.forEach(function(championship) {
        var championshipCard = document.createElement("div");
        championshipCard.classList.add("championship");

        var championshipImage = document.createElement("img");
        championshipImage.classList.add("championship-image");
        championshipImage.src = championship.imagem;

        var championshipName = document.createElement("h3");
        championshipName.classList.add("championship-name");
        championshipName.textContent = championship.nome;

        var championshipDate = document.createElement("p");
        championshipDate.classList.add("championship-date");
        championshipDate.textContent = "Data: " + championship.data;

        var cadastrarButton = document.createElement("button");
        cadastrarButton.type = "submit";
        cadastrarButton.classList.add("btn", "btn-cor", "fontInterWhite2");
        cadastrarButton.textContent = "CADASTRAR";

        cadastrarButton.addEventListener("click", function() {
            window.location.href = "../participantes/participantes.html";
        });

        championshipCard.appendChild(championshipImage);
        championshipCard.appendChild(championshipName);
        championshipCard.appendChild(championshipDate);
        championshipCard.appendChild(cadastrarButton);

        championshipRow.appendChild(championshipCard);
    });
}

adicionarCampeonatos();
