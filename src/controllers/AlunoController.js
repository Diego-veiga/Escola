import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.status(200).json(alunos);
    } catch (e) {
      return res.status(400).json({
        erros: e.erros.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.json(400).status({
          errors: ['Aluno não encontrado'],
        });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const newAluno = await Aluno.create(req.body);
      return res.status(200).json(newAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      return res.json(400).status({
        errors: ['Aluno não encontrado'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não encontrado'],
        });
      }
      await aluno.destroy();
      return res.status(200).json({ message: 'Aluno excluído com sucesso' });
    } catch (e) {
      return res.json(400).status({
        errors: ['Aluno não encontrado'],
      });
    }
  }
}

export default new HomeController();
