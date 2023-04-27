const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Agenda = db.define('Agenda', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Agenda
