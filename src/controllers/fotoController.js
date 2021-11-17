import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Fotos';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        console.log('criando foto');
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.status(200).json(foto);
      } catch (e) {
        return res.status(400).json({ error: 'Aluno inválido' });
      }
    });
  }
}

export default new FotoController();
