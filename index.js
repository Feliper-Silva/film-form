function enviar() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/filmes/add",
        data: JSON.stringify({
            titulo: $("#titulo").val(),
            diretor: $("#diretor").val(),
            minutos: $('#minutos').val()
        }),
        contentType: "application/json",
        success: function (dados) {
            $('#status-enviado').text("Enviado com sucesso!!");
        }

    });
}

function verLista() {
    let numeroFilme = $('#numero').val();
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/filmes/${numeroFilme}`,
        success: function (dados) {
            $('#status-busca').text(status);
            $('#mostraTitulo').text(dados.titulo);
            $('#mostraDiretor').text(dados.diretor);
            $('#mostraMinutos').text(dados.minutos);
        }
    })
}

function deletFilm() {
    let deletfilme = $('#numero-del').val();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/filmes/del',
        data: JSON.stringify({
            id: deletfilme
        }),
        contentType: "application/json",
        success: function (dados) {
            $('#status-delet').text("excluido com sucesso!!");
        }
    })

}

function edit() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/filmes/refresh",
        data: JSON.stringify({
            id: $('#numeroEdita').val(),
            titulo: $("#tituloEdita").val(),
            diretor: $("#diretorEdita").val(),
            minutos: $('#minutosEdita').val()
        }),
        contentType: "application/json",
        success: function (dados) {
            $('#status-editado').text("Alterado com sucesso!!");
        }

    });
}