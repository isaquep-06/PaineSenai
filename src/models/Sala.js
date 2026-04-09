import { Model, DataTypes } from 'sequelize';

class Sala extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'salas',
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Turma, { foreignKey: 'sala_id', as: 'Turmas' });
  }
}

export default Sala;