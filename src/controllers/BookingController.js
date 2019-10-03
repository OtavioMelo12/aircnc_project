const Booking = require("../models/Booking");

// index(listagem de sessoes),
// show(listar uma unica sessao),
// store(criar uma sessao),
// update(editar uma sessao),
// destroy(deletar uma sessao)

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json(booking);
  }
};
