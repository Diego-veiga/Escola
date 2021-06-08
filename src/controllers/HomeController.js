import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Diego',
      sobrenome: 'Veiga',
      email: 'diego@ht.com',
      idade: 25,
      peso: 105,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
