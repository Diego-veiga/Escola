import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Nome precisa ter entre 3 e 50 caractere',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email invalido',
          },
        },
        unique: {
          msg: 'email ja cadastrado',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade deve ser um numero',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'O campo peso deve ser um numero',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        isFloat: {
          msg: 'O campo altura deve ser um nome ',
        },
      },

    }, {
      sequelize,
    });
    return this;
  }
}
