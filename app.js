/******************************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Matheus Lucas
 * Versão: 1.0
 ******************************************************************************************************/

/*******************************************************************************************************
 * Para configurar a API:
 *  Instalar o EXPRESS  -> npm install express --save
 *      Dependencia para configurar e utilizar o protocolo HTTP para criar a API
 *  Instalar o CORS     -> npm install cors --save
 *      Dependencia para configurar as permissões de acesso da API
 * 
 *  Assim que a instalação for concluida, uma nova pasta e dois novos arquivos vão aparecer no projeto
 *  
 * OBSERVAÇÃO: SÓ POSSO BAIXAR O EXPRESS E O CORS SE ESTIVER NA PASTA RAIZ DO PROJETO
 * 
*******************************************************************************************************/

// Import das dependencias para criar a API
const express   = require('express')
const cors      = require('cors')

// Criando um objeto do express para criar a API
const app = express()

// Configurações do CORS da API
const corsOptions = {
    origin: ['*'], //Configuração de origem da requisição(IP ou Dominio).
    methods: 'GET', //Configuração dos verbos que serão utilizados na API.
    allowedHeaders: ['Content-type', 'Authorization'] //Configurações de permissões.
                    //Tipo de dados  //Autorização de acesso 
}

// Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

const estadosCidades = require('./modulo/funcoes.js')

// O GET é uma função de callback
// Endpoint para listar os estados
// Sempre que for fazer um Endpoint, deve ser colocodado o nome do projeto
// ou o nome da empresa, junto com a versão do projeto.
//      ex: app.get('/v1/senai/estados')
app.get('/v1/senai/sigla/estado', function(request, response){
    let estado = estadosCidades.getListaDeEstados()
    if(estado){
        response.json(estado)
        response.status(200) // Requisição bem-sucedida!!!
    }else{
        response.json({'message' : "Nenhum estado encontrado."})
        response.status(404)  
    }
    
})

// Para criar uma variavel e obter uma url personalizada de acordo com o usuario,
// deve-se ter " :(palavra) " e assim obter o resultado desejado
// Fazendo o Endpoint de getDadosEstado
app.get('/v1/senai/dados/estado/:uf', function(request,response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message' : "Nenhuma estado foi encotrado."})
        response.status(404)  
    }
    
})

// Fazendo o Endpoint da função getCapitalEstado
app.get('/v1/senai/capital/estado/:uf', function(request, response){
    
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalEstado(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message' : "Nenhuma capital encontrada."})
        response.status(404) 
    }
    
})

// Fazendo o Endpoint da função getEstadosRegiao
app.get('/v1/senai/estado/regiao/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estado = estadosCidades.getEstadosRegiao(regiao)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message' : "Nenhuma região encontrada."})
        response.status(404) 
    }
})

// Fazendo o Endpoint da função getCapitalPais
app.get('/v1/senai/capital/pais', function(request, response){
    let estado = estadosCidades.getCapitalPais()
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message' : 'Nenhuma capital antiga foi encontrada.'})
        response.status(404)
    }
})

// Fazendo o Endpoint da função getCidades
app.get('/v1/senai/cidade/:uf', function(request, response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCidades(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message' : 'Nenhuma cidade foi encontrada.'})
        response.status(404)
    }
})


// Fazer um start na API (Aguardando requisição)
app.listen(8090, function(){
    console.log('API aguardando novas requisições...')
})