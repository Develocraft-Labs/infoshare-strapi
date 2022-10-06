module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b5123d4ff10a0b83f137e82953e7756f'),
  },
});
