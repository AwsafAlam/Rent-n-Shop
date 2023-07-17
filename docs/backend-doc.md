## Graphql

For graphql, install:

Run `ts-node generate-typings`

Generate product resource:

`nest g resource product`

`nest g service prisma`

`nest g module user`

## Prisma

`npm i -D prisma`
`npx prisma init`

```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

## Postgres Database Setup

`docker compose up` starts an instance of postgres database.
`npx prisma migrate dev --name init`

creats a migration

Now, we can run `npx prisma studio` and view the models created.

Need to be run, everytime we modify a model. to change the schemas

- `npx prisma migrate dev --name <name_of_migration>`
- `npx prisma generate`

## Database Design

Several assumptions are made here for modelling the database:

1. Each product consists of a single item [we are not considering inventory/stock here] for the sake of simplicity.
2. Once sold, the same item will not be re-sold.
