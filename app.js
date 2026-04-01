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

const corsOptions = {
    origin: ['*'] // É a origem da requisição da API
    
}

