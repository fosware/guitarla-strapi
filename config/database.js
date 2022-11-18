module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-21.railway.app'),
      port: env.int('DATABASE_PORT', 7190),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'jxNQxnE0OXu6Zb33eGuq'),
      schema: env('DATABASE_SCHEMA', 'public'),
     // ssl: env.bool('DATABASE_SSL', true),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
