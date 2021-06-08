import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: 'email  ou password inválidos ',
        });
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({
          message: 'usuário não encontrado',
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.json(400).json({
          message: 'usuário ou senha inválidos ',
        });
      }
      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return res.status(200).json({ token });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TokenController();
