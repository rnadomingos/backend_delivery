# Backend Entregas

    - [X] Criar estrutura de projeto
        - [X] Prisma
        [X] TS
        [X] Bcrypt
        [X] JWT
        [X] Express
    [X] Criar tabela deliveryman
    [X] Criar tabela client
    [X] Criar tabela deliveries
    [X] Configurar express(server)
    [] Criar cadastro de client
    [] Criar autenticacao
    [] Criar cadastro de deliveryman
    [] Criar cadastro de entregas
    [] Criar busca de entregas sem deliveryman
    [] Criar update de entregas
    [] Criar busca de entregas do client
    [] Criar busca de entregas do deliverymay

## Docker DB - Postgres
   sudo docker run --name postgres \
    -e POSTGRES_USER=delivery \
    -e POSTGRES_PASSWORD=delivery \
    -e POSTGRES_DB=delivery \
    -p 5432:5432 \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -v /home/renan/stgfile/Developer/projetos_nodejs/rocketseat/beckend_entregas/PGDATA:/var/lib/postgresql/data/pgdata \
    -d \
    postgres:alpine
