import dotenv from 'dotenv';
import express from 'express';

import Routes from './src/routes/homeRoutes';
import usersRouter from './src/routes/userRouter';
import tokenRoutes from './src/routes/tokenRouter';
import alunoRouter from './src/routes/alunosRouter';
import fotoRouter from './src/routes/fotoRouter';

import './src/database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', Routes);
    this.app.use('/user/', usersRouter);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/foto/', fotoRouter);
  }
}

export default new App().app;
