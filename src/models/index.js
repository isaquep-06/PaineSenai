import Sequelize from 'sequelize';
import DatabaseConfig from '../database/index.js';
import Sala from './Sala.js';
import Turma from './Turma.js';

const sequelize = DatabaseConfig;

const models = {
  Sala: Sala.init(sequelize),
  Turma: Turma.init(sequelize),
};

// Associações
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export default { ...models, sequelize };