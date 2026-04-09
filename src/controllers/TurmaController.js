import yup from 'yup';
import models from "../models/index.js";

const { Turma, Sala } = models;

class TurmaController {
  async store(req, res) {
    // Validação com Yup
    const schema = yup.object().shape({
      nome: yup.string().required("Nome da turma é obrigatório!"),
      turno: yup.string().required("Turno é obrigatório!"),
      sala_id: yup.number().nullable(),
    });

    try {
      schema.validateSync(req.body, {
        abortEarly: false,
        strict: true,
      });
    } catch (err) {
      return res.status(400).json({ message: err.errors });
    }

    const { nome, turno, sala_id } = req.body;

    try {
      // Checa se já existe turma com mesmo nome
      const existingTurma = await Turma.findOne({ where: { name: nome } });
      if (existingTurma) {
        return res.status(401).json({ message: 'Turma já existe!' });
      }

      // Cria a turma
      const turmaCriada = await Turma.create({
        name: nome,
        turno,
        sala_id: sala_id || null,
      });

      // Pega a turma criada com o include da Sala para retornar o nome
      const turmaComSala = await Turma.findOne({
        where: { id: turmaCriada.id },
        include: [{
          model: Sala,
          as: 'Sala',
          attributes: ['id', 'name'],
        }]
      });

      return res.status(201).json({ message: 'Turma criada com sucesso!', turma: turmaComSala });

    } catch (err) {
      console.error("Erro ao criar turma:", err);
      return res.status(500).json({ message: 'Erro interno ao criar turma' });
    }
  }

  async index(req, res) {
    try {
      const turmas = await Turma.findAll({
        include: [{
          model: Sala,
          as: 'Sala',
          attributes: ['id', 'name']
        }]
      });
      return res.status(200).json(turmas);
    } catch (err) {
      console.error("Erro ao buscar turmas:", err);
      return res.status(500).json({ message: 'Erro interno ao buscar turmas' });
    }
  }
}

export default new TurmaController();