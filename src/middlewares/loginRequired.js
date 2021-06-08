import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  console.log('token', authorization);

  if (!authorization) {
    return res.status(401).json({
      message: 'token  inválido',
    });
  }
  const [, token] = authorization.split(' ');
  console.log('token', token);

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: 'Token expirado ou invalido',
    });
  }
};
