## Como Rodar o Projeto

Este projeto é uma aplicação web simples que permite [descrição do projeto]. Para executá-lo, siga as etapas abaixo.

### Pré-requisitos

- [NodeJS]
- [Docker + Postgres]

### Instruções Passo a Passo

1. Clone este repositório em sua máquina:

```bash
  git clone https://github.com/andersonsilvapp/fincheck-api.git
  cd fincheck-api
```

2. Instale as dependências:
    

```bash
yarn ou npm install
```

3. Configure o arquivo de configuração:
    - Faça uma cópia do arquivo .env.example e renomeie para .env
    - Em JWT_SECRET adicione uma hash qualquer

4. Crie o banco de dados com nome `fincheck`

5. Rode as migrations:

```bash
yarn prisma migrate dev
```
