const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: { ssl: { rejectUnauthorized: false } },
  logging: false
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com Neon OK!');
  } catch (err) {
    console.error('❌ Erro de conexão:', err);
  }
})();

module.exports = sequelize;