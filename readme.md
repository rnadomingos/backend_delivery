# Backend Entregas

    [x] Criar estrutura de projeto
        [x] Prisma
        [x] TS
        [x] Bcrypt
        [x] JWT
        [x] Express
    [x] Criar tabela deliveryman
    [x] Criar tabela client
    [x] Criar tabela deliveries
    [x] Configurar express(server)
    [x] Criar cadastro de client
    [x] Criar autenticacao client
    [x] Criar cadastro de deliveryman
    [x] Criar autenticacao deliveryman
    [x] Criar cadastro de entregas
    [x] Criar busca de entregas sem deliveryman
    [x] Criar update de entregas
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
