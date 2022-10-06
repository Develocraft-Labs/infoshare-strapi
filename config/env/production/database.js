module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: {
        ca: env("DATABASE_CA", ""),
      },
    },
    debug: false,
  },
});
