import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async Index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     mensage: 'Id não encontrado',
      //   });
      // }
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          mensage: 'usuario não encontrado',
        });
      }
      const novoUsuario = await user.update(req.body);
      return res.status(200).json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          mensage: 'Id não encontrado',
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          mensage: 'usuario não encontrado',
        });
      }
      await user.destroy();
      return res.status(200).json();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
