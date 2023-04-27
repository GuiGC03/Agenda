const Agenda = require('../models/Agenda')

module.exports = class AgendaController {
  static createAgenda(req, res) {
    res.render('agendas/create')
  }

  static createAgendasave(req, res) {
    const agenda = {
      titulo: req.body.titulo,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
      descricao: req.body.descricao,
      done: false,
    }

    Agenda.create(agenda)
      .then(res.redirect('/agendas'))
      .catch((err) => console.log())
  }

  static showAgendas(req, res) {
    Agenda.findAll({ raw: true })
      .then((data) => {
        let emptyAgendas = false

        if (data.length === 0) {
          emptyAgendas = true
        }

        res.render('agendas/all', { agendas: data, emptyAgendas })
      })
      .catch((err) => console.log(err))
  }

  static removeAgenda(req, res) {
    const id = req.body.id

    Agenda.destroy({ where: { id: id } })
      .then(res.redirect('/agendas'))
      .catch((err) => console.log())
  }

  static updateAgenda(req, res) {
    const id = req.params.id

    Agenda.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render('agendas/edit', { agenda: data })
      })
      .catch((err) => console.log())
  }

  static updateAgendaPost(req, res) {
    const id = req.body.id

    const agenda = {
      titulo: req.body.titulo,
      data_inicio: req.body.data_inicio,
      data_fim: req.body.data_fim,
      descricao: req.body.descricao,
    }

    Agenda.update(agenda, { where: { id: id } })
      .then(res.redirect('/agendas'))
      .catch((err) => console.log())
  }

  static toggleAgendastatus(req, res) {
    const id = req.body.id

    console.log(req.body)

    const agenda = {
      done: req.body.done === '0' ? true : false,
    }

    console.log(agenda)

    Agenda.update(agenda, { where: { id: id } })
      .then(res.redirect('/agendas'))
      .catch((err) => console.log())
  }
}
