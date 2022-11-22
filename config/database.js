module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.asdvnafyxeylheulkmrk.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'U0CJMUoYQLrbLtaf'),
      //U0CJMUoYQLrbLtaf
      schema: env('DATABASE_SCHEMA', 'public'),
     // ssl: env.bool('DATABASE_SSL', true),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
