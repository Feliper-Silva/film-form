
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


const client = new pg.Client({
    user: "postgres",
    database: "Filmes",
    password: "postgres",
    host: "localhost",
    port: 5432,
});
client.connect();

app.get('/filmes/:id', function(req,res){
    client.query({
        text: 'SELECT * FROM filme WHERE id = $1',
        values: [req.params.id]
    })
    .then(
        function(ret){
            let filme = ret.rows[0]
            res.json({
                status:'filme encontrado!',
                titulo: filme.titulo,
                diretor: filme.diretor,
                minutos: filme.minutos
            })
        }
    );
});

app.post('/filmes/add', function(req,res){
    client.query({
        text:'INSERT INTO filme (titulo, diretor, minutos) VALUES ($1, $2, $3)',
        values: [req.body.titulo, req.body.diretor, req.body.minutos]
    }).then(
        function(ret){
            res.json(
                {
                    status:'Adicionado com sucesso!',
                    dadosEnviados: req.body
                }
            )
        }
    )
});
app.post('/filmes/del', function(req,res){
    client.query({
        text:'DELETE FROM filme WHERE id = $1',
        values: [req.body.id]
    }).then(
        function(ret){
            res.json(
                {
                    status:'Excluido filme com sucesso!'
                }
            )
        }
    )
});
app.post('/filmes/refresh',function(req,res){
    client.query({
        text:'UPDATE filme SET titulo=$2, diretor=$3, minutos=$4 WHERE id=$1',
        values: [req.body.id,req.body.titulo, req.body.diretor, req.body.minutos]
    }).then(
        function (ret) {
            res.json(
                {
                    status:'Alterado com sucesso!'
                }
            )
        }
    )
});

app.listen(
   
        3000,
        function(){
            console.log('Servidor Web Funcionando!');
    }
);
