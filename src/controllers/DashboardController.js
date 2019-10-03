const Spot = require("../models/Spot");

// index(listagem de sessoes),
// show(listar uma unica sessao),
// store(criar uma sessao),
// update(editar uma sessao),
// destroy(deletar uma sessao)

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const spots = await Spot.find({ user: user_id });

    return res.json(spots);
  }
};
