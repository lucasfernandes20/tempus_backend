# TEMPUS DIGITAL BACKEND

Projeto relizado para processo seletivo da tempus digital.

## Conteúdos:

  - [Visão Geral](#visão-geral)
  - [Desafio](#desafio)
  - [Meu Processo](#meu-processo)
  - [Feito com](#feito-com)
  - [Continuando a Aplicação](#continuando-a-aplicação)
  - [Autor](#autor)

## Visão Geral

### Desafio

Endpoints deverão:

 (CRUD)
- Criar um novo cliente;
- Visualizar todos os clientes;
- Visualizar um cliente especifico por ID;
- Editar os clientes cadastrados;
- Deletar clientes cadastrados;


## Meu Processo:

### Feito com

- MYSQL como banco de dados relacional
- express
- modelo MSC
- Tratamento de erro por instancia de Classe
- Joi para validação de dados
- dotenv para variáveis de ambiente
- sequelize para interação com o banco de dados


### Continuando a Aplicação

- Testes unitários ainda serão implementados.

## Autor

- Linkedin - [@lucasfernandesreis](https://www.linkedin.com/in/lucasfernandesreis/)
- GitHub - [@lucasfernandes20](https://github.com/lucasfernandes20)


## Como rodar a aplicação:

 Partindo do ponto que a aplicação precisa do banco de dados, você vai precisar ter em sua maquina o MYSQL instalado e configurado com um usuario para acesso. Caso não tenha siga as instruções deste link: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt .
  
  Agora vamos por passos:
  
  - Clone o repositório:
  
  ```sh
  git clone git@github.com:lucasfernandes20/tempus_backend.git
  ```
  
  - Execute o seguinte comando para baixar as dependências:
  
   ```sh
  npm install
  ```
  
  - Configure as suas Variáveis de ambiente, para isso siga este modelo e apenas preencha com dados do seu usuario MYSQL:
  
  **atenção: copie e cole isso em um arquivo .env que vc criará na raiz do projeto. substitua apenas oque está entre [colchetes]**
  
  ```sh
    MYSQL_USERNAME= [coloque o nome do seu usuario aqui]
    MYSQL_PASSWORD= [coloque sua senha aqui, caso nao tenha senha deixe sem valor]
    HOSTNAME=127.0.0.1

    PORT=3000
```
  
  - Pronto, agora basta executar o seguinte comando para rodar o servidor na sua porta Local e utilizando 'Api clients' como Postman ou insomnia você poderá testar todos os endpoints disponiveis:
  
  ```sh
  npm start
  ```
  
  
  ## MODELO DO BANCO DE DADOS:
  
  ```yaml
      {
        name: 'Lucas Fernandes',
        CPF: '78965412548',
        birthDate: '2000-08-25',
        familyIncome: 3500
      },
      {
        name: 'Daniel Cuca',
        CPF: '1234567891',
        birthDate: '1945-05-21',
        familyIncome: 4700
      },
      {
        name: 'Gabiel Dresdi',
        CPF: '9876543219',
        birthDate: '1998-09-17',
        familyIncome: 9800
      }
  
