import models from './src/models/index.js';

const { Sala, Turma, sequelize } = models;

async function seed() {
  try {
    await sequelize.sync({ force: true }); // reseta o banco

    // Criar salas
    const salas = await Sala.bulkCreate([
      { name: 'LAB 1', type: 'Laboratorio' },
      { name: 'LAB 2', type: 'Laboratorio' },
      { name: 'LAB 3', type: 'Laboratorio' },
    ]);

    // Criar turmas
    await Turma.bulkCreate([
      { name: 'Turma X', turno: 'Matutino', sala_id: salas[0].id },
      { name: 'Turma Y', turno: 'Vespertino', sala_id: salas[1].id },
      { name: 'Turma Z', turno: 'Noturno', sala_id: null },
    ]);

    console.log('Seed concluída com sucesso!');
    process.exit(0);
  } catch (err) {
    console.error('Erro ao rodar seed:', err);
    process.exit(1);
  }
}

seed();